// Configuration for WakaTime API integration
// SECURITY NOTE: In a production environment, the API key should be stored server-side

const CONFIG = {
    // WakaTime API configuration
    WAKATIME: {
        BASE_URL: 'https://wakatime.com/api/v1',
        // You'll need to set this with your actual WakaTime API key
        // Get it from https://wakatime.com/api-key
        API_KEY: null, // Set this in a separate config file or environment
        
        // Default fallback values if API fails
        FALLBACK_VALUES: {
            TOTAL_HOURS: '2,800+',
            TOTAL_SECONDS: 2800 * 3600 // 2800 hours in seconds
        }
    },
    
    // Cache configuration
    CACHE: {
        DURATION: 1000 * 60 * 60, // 1 hour in milliseconds
        KEY: 'wakatime_data'
    },
    
    // Display configuration
    DISPLAY: {
        UPDATE_INTERVAL: 1000 * 60 * 60 * 24, // Update every 24 hours
        LOADING_TEXT: 'Loading coding time...',
        ERROR_TEXT: 'Unable to load coding time'
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}