import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY || "e99774205843f619f2957ea1058e0edf";
const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const GEO_URL = 'https://api.openweathermap.org/geo/1.0';

export const fetchWeatherByCity = async (city) => {
    try {
        // 1. Get Coordinates
        const geoResponse = await axios.get(`${GEO_URL}/direct`, {
            params: {
                q: city,
                limit: 1,
                appid: API_KEY
            }
        });

        if (geoResponse.data.length === 0) {
            throw new Error('City not found');
        }

        const { lat, lon } = geoResponse.data[0];

        // 2. Get Weather Data
        const weatherResponse = await axios.get(`${BASE_URL}/weather`, {
            params: {
                lat,
                lon,
                units: 'metric',
                appid: API_KEY
            }
        });

        return weatherResponse.data;
    } catch (error) {
        console.error('Error fetching weather:', error);
        throw error;
    }
};
