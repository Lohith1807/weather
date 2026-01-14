import React from 'react';
import {
    Wind,
    Droplets,
    Thermometer,
    Sunrise,
    Sunset,
    Eye,
    Gauge,
    Cloud,
    Navigation,
    ArrowDownCircle,
    ArrowUpCircle,
    MapPin,
    Clock
} from 'lucide-react';
import '../styles/WeatherCard.css';

const WeatherCard = ({ data }) => {
    if (!data) return null;

    const { name, main, weather, wind, sys, visibility, clouds, coord, dt } = data;
    const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;

    const formatTime = (timestamp) => {
        return new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const formatShortDate = (timestamp) => {
        return new Date(timestamp * 1000).toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <div className="weather-dashboard">
            {/* Left Column: Hero Unit */}
            <div className="hero-column">
                <div className="header-compact">
                    <div className="location-row">
                        <MapPin size={24} className="accent-color" />
                        <h2 className="city-title">{name}, {sys.country}</h2>
                    </div>
                    <p className="dt-tag"><Clock size={14} /> {formatShortDate(dt)} | {formatTime(dt)}</p>
                </div>

                <div className="hero-main">
                    <img src={iconUrl} alt={weather[0].description} className="hero-icon" />
                    <h1 className="hero-temp">{Math.round(main.temp)}°</h1>
                    <p className="hero-desc">{weather[0].description}</p>
                </div>

                <div className="hero-footer">
                    <div className="hero-stat">
                        <ArrowUpCircle size={20} color="#f87171" />
                        <span>High: {Math.round(main.temp_max)}°</span>
                    </div>
                    <div className="hero-stat">
                        <ArrowDownCircle size={20} color="#60a5fa" />
                        <span>Low: {Math.round(main.temp_min)}°</span>
                    </div>
                </div>
            </div>

            {/* Right Column: Details & Stats */}
            <div className="details-columns">
                <div className="stats-grid-compact">
                    <div className="s-item">
                        <Thermometer size={20} />
                        <label>Feels Like</label>
                        <value>{Math.round(main.feels_like)}°</value>
                    </div>
                    <div className="s-item">
                        <Droplets size={20} />
                        <label>Humidity</label>
                        <value>{main.humidity}%</value>
                    </div>
                    <div className="s-item">
                        <Wind size={20} />
                        <label>Wind Speed</label>
                        <value>{wind.speed} m/s</value>
                    </div>
                    <div className="s-item">
                        <Navigation size={20} style={{ transform: `rotate(${wind.deg}deg)` }} />
                        <label>Direction</label>
                        <value>{wind.deg}°</value>
                    </div>
                    <div className="s-item">
                        <Gauge size={20} />
                        <label>Pressure</label>
                        <value>{main.pressure} hPa</value>
                    </div>
                    <div className="s-item">
                        <Eye size={20} />
                        <label>Visibility</label>
                        <value>{(visibility / 1000).toFixed(1)} km</value>
                    </div>
                    <div className="s-item">
                        <Cloud size={20} />
                        <label>Cloudiness</label>
                        <value>{clouds.all}%</value>
                    </div>
                    {main.sea_level && (
                        <div className="s-item">
                            <Navigation size={20} />
                            <label>Sea Level</label>
                            <value>{main.sea_level}</value>
                        </div>
                    )}
                    {main.grnd_level && (
                        <div className="s-item">
                            <Navigation size={20} />
                            <label>Ground</label>
                            <value>{main.grnd_level}</value>
                        </div>
                    )}
                </div>

                <div className="sun-card-compact">
                    <div className="sun-row">
                        <div className="sun-point">
                            <Sunrise size={24} color="#fdba74" />
                            <div className="sun-text">
                                <span className="sun-label">Sunrise</span>
                                <span className="sun-time">{formatTime(sys.sunrise)}</span>
                            </div>
                        </div>
                        <div className="sun-progress">
                            <div className="sun-line-dot"></div>
                        </div>
                        <div className="sun-point">
                            <Sunset size={24} color="#f472b6" />
                            <div className="sun-text">
                                <span className="sun-label">Sunset</span>
                                <span className="sun-time">{formatTime(sys.sunset)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
