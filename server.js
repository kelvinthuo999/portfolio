const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// CORS configuration
const allowedOrigins = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(',')
  : ['http://localhost:3000', 'http://127.0.0.1:3000', 'file://'];

app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // Check if origin matches allowed origins or is a file:// protocol
    if (allowedOrigins.indexOf(origin) !== -1 || origin.startsWith('file://')) {
      return callback(null, true);
    }
    
    // For development, allow all localhost variants
    if (process.env.NODE_ENV === 'development' && origin.includes('localhost')) {
      return callback(null, true);
    }
    
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true
}));

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    hasApiKey: !!process.env.WAKATIME_API_KEY
  });
});

// WakaTime stats proxy endpoint
app.get('/api/wakatime', async (req, res) => {
  try {
    console.log('Fetching WakaTime stats...');
    
    if (!process.env.WAKATIME_API_KEY) {
      return res.status(500).json({ 
        error: 'WakaTime API key not configured',
        fallback: true
      });
    }

    const wakaTimeUrl = 'https://wakatime.com/api/v1/users/current/stats/all_time';
    
    const response = await fetch(wakaTimeUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.WAKATIME_API_KEY}`,
        'Content-Type': 'application/json',
        'User-Agent': 'Portfolio-Proxy/1.0'
      }
    });

    if (!response.ok) {
      console.error('WakaTime API error:', response.status, response.statusText);
      return res.status(response.status).json({
        error: `WakaTime API error: ${response.status}`,
        message: response.statusText,
        fallback: true
      });
    }

    const data = await response.json();
    
    // Add server timestamp
    data.server_timestamp = new Date().toISOString();
    
    console.log('Successfully fetched WakaTime data');
    res.json(data);
    
  } catch (error) {
    console.error('Server error fetching WakaTime stats:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message,
      fallback: true
    });
  }
});

// WakaTime projects endpoint (optional)
app.get('/api/wakatime/projects', async (req, res) => {
  try {
    if (!process.env.WAKATIME_API_KEY) {
      return res.status(500).json({ 
        error: 'WakaTime API key not configured'
      });
    }

    const wakaTimeUrl = 'https://wakatime.com/api/v1/users/current/projects';
    
    const response = await fetch(wakaTimeUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.WAKATIME_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      return res.status(response.status).json({
        error: `WakaTime API error: ${response.status}`
      });
    }

    const data = await response.json();
    res.json(data);
    
  } catch (error) {
    console.error('Error fetching WakaTime projects:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message
    });
  }
});

// Catch-all for undefined routes
app.use('*', (req, res) => {
  res.status(404).json({ 
    error: 'Endpoint not found',
    available_endpoints: ['/health', '/api/wakatime', '/api/wakatime/projects']
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Unhandled error:', error);
  res.status(500).json({ 
    error: 'Internal server error',
    message: error.message
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Portfolio WakaTime proxy server running on port ${PORT}`);
  console.log(`📊 Health check available at: http://localhost:${PORT}/health`);
  console.log(`⏱️  WakaTime API available at: http://localhost:${PORT}/api/wakatime`);
  console.log(`🔑 API Key configured: ${!!process.env.WAKATIME_API_KEY}`);
});