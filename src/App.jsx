import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import { fetchWeatherByCity } from './services/weatherService';
import './styles/App.css';

function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [bgClass, setBgClass] = useState('bg-default');

    const handleSearch = async (city) => {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchWeatherByCity(city);
            setWeatherData(data);
            updateBackground(data.weather[0].main);
        } catch (err) {
            setError(err.message || 'Something went wrong');
            setWeatherData(null);
            setBgClass('bg-default');
        } finally {
            setLoading(false);
        }
    };

    const updateBackground = (condition) => {
        const weatherMap = {
            'Clear': 'bg-clear',
            'Clouds': 'bg-clouds',
            'Rain': 'bg-rain',
            'Drizzle': 'bg-rain',
            'Thunderstorm': 'bg-thunderstorm',
            'Snow': 'bg-snow',
            'Mist': 'bg-mist',
            'Smoke': 'bg-mist',
            'Haze': 'bg-mist',
            'Dust': 'bg-mist',
            'Fog': 'bg-mist',
            'Sand': 'bg-mist',
            'Ash': 'bg-mist',
            'Squall': 'bg-mist',
            'Tornado': 'bg-thunderstorm',
        };
        setBgClass(weatherMap[condition] || 'bg-default');
    };

    // Initial load
    useEffect(() => {
        handleSearch('London'); // Default city
    }, []);

    return (
        <div className={`app-container ${bgClass}`}>
            <main>
                <SearchBar onSearch={handleSearch} />

                {loading && <Loader />}

                {error && !loading && <ErrorMessage message={error} />}

                {weatherData && !loading && !error && (
                    <WeatherCard data={weatherData} />
                )}
            </main>
        </div>
    );
}

export default App;
