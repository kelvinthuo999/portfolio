// Vercel Serverless Function for WakaTime API Proxy
export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    
    // Only allow GET requests
    if (req.method !== 'GET') {
        return res.status(405).json({ 
            error: 'Method not allowed',
            message: 'Only GET requests are supported'
        });
    }
    
    try {
        console.log('Fetching WakaTime stats from serverless function...');
        
        // Get API key from environment variables
        const apiKey = process.env.WAKATIME_API_KEY;
        
        if (!apiKey) {
            console.error('WakaTime API key not configured');
            return res.status(500).json({ 
                error: 'WakaTime API key not configured',
                fallback: true
            });
        }
        
        // Import fetch for Node.js environment (if needed)
        const fetch = (await import('node-fetch')).default;
        
        const wakaTimeUrl = 'https://wakatime.com/api/v1/users/current/stats/all_time';
        
        console.log('Making request to WakaTime API...');
        
        const response = await fetch(wakaTimeUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
                'User-Agent': 'Portfolio-Vercel/1.0'
            },
            timeout: 8000 // 8 second timeout
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
        data.source = 'vercel-function';
        
        console.log('Successfully fetched WakaTime data');
        
        // Set cache headers (cache for 1 hour)
        res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
        
        return res.status(200).json(data);
        
    } catch (error) {
        console.error('Serverless function error:', error);
        
        // Handle specific error types
        if (error.code === 'ETIMEDOUT' || error.message.includes('timeout')) {
            return res.status(408).json({ 
                error: 'Request timeout',
                message: 'WakaTime API request timed out',
                fallback: true
            });
        }
        
        return res.status(500).json({ 
            error: 'Internal server error',
            message: error.message,
            fallback: true
        });
    }
}