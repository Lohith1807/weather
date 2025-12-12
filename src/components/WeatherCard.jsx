import React from 'react';
import { Wind, Droplets, Thermometer, Sunrise, Sunset, Eye, Gauge } from 'lucide-react';
import '../styles/WeatherCard.css';

const WeatherCard = ({ data }) => {
    if (!data) return null;

    const { name, main, weather, wind, sys, visibility } = data;
    const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;

    const formatTime = (timestamp) => {
        return new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className="weather-card">
            <div className="card-header">
                <h2 className="city-name">{name}, {sys.country}</h2>
                <p className="date-string">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
            </div>

            <div className="weather-info">
                <div className="icon-wrapper">
                    <img src={iconUrl} alt={weather[0].description} className="weather-icon-large" />
                </div>
                <div className="temp-wrapper">
                    <h1 className="temp-large">{Math.round(main.temp)}°</h1>
                    <p className="description">{weather[0].description}</p>
                </div>
            </div>

            <div className="details-grid">
                <div className="detail-item">
                    <Thermometer size={18} className="accent-color" />
                    <span className="detail-label">Feels Like</span>
                    <span className="detail-value">{Math.round(main.feels_like)}°</span>
                </div>

                <div className="detail-item">
                    <Droplets size={18} className="accent-color" />
                    <span className="detail-label">Humidity</span>
                    <span className="detail-value">{main.humidity}%</span>
                </div>

                <div className="detail-item">
                    <Wind size={18} className="accent-color" />
                    <span className="detail-label">Wind</span>
                    <span className="detail-value">{wind.speed} <span className="unit">m/s</span></span>
                </div>

                <div className="detail-item">
                    <Gauge size={18} className="accent-color" />
                    <span className="detail-label">Pressure</span>
                    <span className="detail-value">{main.pressure} <span className="unit">hPa</span></span>
                </div>

                <div className="detail-item">
                    <Eye size={18} className="accent-color" />
                    <span className="detail-label">Visibility</span>
                    <span className="detail-value">{(visibility / 1000).toFixed(1)} <span className="unit">km</span></span>
                </div>

                <div className="detail-item">
                    <Sunrise size={18} className="accent-color" />
                    <span className="detail-label">Sunrise</span>
                    <span className="detail-value">{formatTime(sys.sunrise)}</span>
                </div>
            </div>

            <div className="footer-stats">
                <div className="sun-path">
                    <div className="sun-event">
                        <Sunrise size={14} />
                        <span>{formatTime(sys.sunrise)}</span>
                    </div>
                    <div className="sun-line"></div>
                    <div className="sun-event">
                        <Sunset size={14} />
                        <span>{formatTime(sys.sunset)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
