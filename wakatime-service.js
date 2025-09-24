/**
 * WakaTime API Service
 * Handles fetching and caching of WakaTime statistics
 */

class WakaTimeService {
    constructor(config, env) {
        this.config = config || CONFIG;
        this.apiKey = env?.WAKATIME_API_KEY || ENV?.WAKATIME_API_KEY;
        this.proxyUrl = env?.PROXY_SERVER_URL || ENV?.PROXY_SERVER_URL;
        
        // Bind methods to maintain context
        this.fetchStats = this.fetchStats.bind(this);
        this.getCachedData = this.getCachedData.bind(this);
        this.setCachedData = this.setCachedData.bind(this);
    }

    /**
     * Fetches total coding statistics from WakaTime API
     * @returns {Promise<Object>} Statistics object with total time
     */
    async fetchStats() {
        try {
            // Check cache first
            const cachedData = this.getCachedData();
            if (cachedData) {
                console.log('Using cached WakaTime data');
                return cachedData;
            }

            console.log('Fetching fresh WakaTime data...');
            
            // Check if we have either an API key or a proxy URL
            if (!this.proxyUrl && (!this.apiKey || this.apiKey === 'your-wakatime-api-key-here')) {
                throw new Error('WakaTime API key not configured and no proxy server available');
            }

            const stats = await this._fetchFromAPI();
            
            // Cache the results
            this.setCachedData(stats);
            
            return stats;
        } catch (error) {
            console.warn('Failed to fetch WakaTime stats:', error.message);
            return this._getFallbackData();
        }
    }

    /**
     * Internal method to fetch data from WakaTime API
     * @returns {Promise<Object>} Raw API response processed
     */
    async _fetchFromAPI() {
        const url = this.proxyUrl 
            ? this.proxyUrl 
            : `${this.config.WAKATIME.BASE_URL}/users/current/stats/all_time`;

        const headers = this.proxyUrl 
            ? {} // Proxy server handles authentication
            : {
                'Authorization': `Bearer ${this.apiKey}`,
                'Content-Type': 'application/json'
            };

        const response = await fetch(url, {
            method: 'GET',
            headers: headers
        });

        if (!response.ok) {
            throw new Error(`WakaTime API error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        
        return this._processAPIResponse(data);
    }

    /**
     * Processes the WakaTime API response into a standardized format
     * @param {Object} data - Raw API response
     * @returns {Object} Processed statistics
     */
    _processAPIResponse(data) {
        const totalSeconds = data.data?.total_seconds || 0;
        const totalHours = Math.floor(totalSeconds / 3600);
        const totalMinutes = Math.floor((totalSeconds % 3600) / 60);

        // Format the time display
        const formattedTime = this._formatTime(totalHours, totalMinutes);

        const stats = {
            total_seconds: totalSeconds,
            total_hours: totalHours,
            total_minutes: totalMinutes,
            formatted_time: formattedTime,
            display_text: `${formattedTime}`,
            last_updated: new Date().toISOString(),
            languages: data.data?.languages || [],
            projects: data.data?.projects || []
        };

        console.log('Processed WakaTime stats:', stats);
        return stats;
    }

    /**
     * Formats time into a readable string
     * @param {number} hours - Total hours
     * @param {number} minutes - Remaining minutes
     * @returns {string} Formatted time string
     */
    _formatTime(hours, minutes) {
        if (hours < 100) {
            return `${hours}h ${minutes}m`;
        } else if (hours < 1000) {
            return `${Math.round(hours)}+ hours`;
        } else {
            const roundedHours = Math.round(hours / 100) * 100;
            return `${roundedHours.toLocaleString()}+ hours`;
        }
    }

    /**
     * Returns fallback data when API is unavailable
     * @returns {Object} Fallback statistics
     */
    _getFallbackData() {
        const fallback = this.config.WAKATIME.FALLBACK_VALUES;
        return {
            total_seconds: fallback.TOTAL_SECONDS,
            total_hours: Math.floor(fallback.TOTAL_SECONDS / 3600),
            total_minutes: 0,
            formatted_time: fallback.TOTAL_HOURS,
            display_text: fallback.TOTAL_HOURS,
            last_updated: null,
            is_fallback: true,
            languages: [],
            projects: []
        };
    }

    /**
     * Gets cached data if it's still valid
     * @returns {Object|null} Cached data or null if expired/missing
     */
    getCachedData() {
        try {
            const cached = localStorage.getItem(this.config.CACHE.KEY);
            if (!cached) return null;

            const data = JSON.parse(cached);
            const now = new Date().getTime();
            const cacheTime = new Date(data.cached_at).getTime();

            if (now - cacheTime < this.config.CACHE.DURATION) {
                return data.stats;
            }

            // Cache expired, remove it
            localStorage.removeItem(this.config.CACHE.KEY);
            return null;
        } catch (error) {
            console.warn('Error reading cache:', error);
            return null;
        }
    }

    /**
     * Caches the statistics data
     * @param {Object} stats - Statistics to cache
     */
    setCachedData(stats) {
        try {
            const cacheData = {
                stats: stats,
                cached_at: new Date().toISOString()
            };
            localStorage.setItem(this.config.CACHE.KEY, JSON.stringify(cacheData));
        } catch (error) {
            console.warn('Error setting cache:', error);
        }
    }

    /**
     * Clears cached data
     */
    clearCache() {
        localStorage.removeItem(this.config.CACHE.KEY);
    }

    /**
     * Gets basic info about the service status
     * @returns {Object} Service status information
     */
    getServiceInfo() {
        return {
            hasApiKey: !!this.apiKey && this.apiKey !== 'your-wakatime-api-key-here',
            hasProxy: !!this.proxyUrl,
            cacheKey: this.config.CACHE.KEY,
            cacheDuration: this.config.CACHE.DURATION
        };
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WakaTimeService;
}