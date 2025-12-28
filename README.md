# 🌦️ SkyCast | Premium Weather Experience

SkyCast is a modern, production-ready weather application built with React. It features a stunning glassmorphism design, dynamic weather-based backgrounds, and real-time data from the OpenWeather API.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer-motion&logoColor=white)

---

## ✨ Features

- **💎 Modern UI/UX**: Professional glassmorphism design with soft gradients.
- **🌈 Dynamic Backgrounds**: The application interface changes its theme based on the current weather condition (Clear, Clouds, Rain, etc.).
- **🔍 Smart Search**: Real-time city search powered by OpenWeather Geocoding API.
- **📱 Fully Responsive**: Optimized for seamless experience across mobile, tablet, and desktop devices.
- **📊 Detailed Metrics**: View temperature, humidity, wind speed, and "feels like" temperature.
- **⏳ Interactive Loaders**: Smooth animations for data fetching states.
- **⚠️ Error Handling**: Robust UI for invalid city names or API failures.

---

## 🛠️ Tech Stack

- **Frontend**: React (Functional Components + Hooks)
- **Styling**: Vanilla CSS (CSS Modules approach)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **API Fetching**: Axios
- **Build Tool**: Vite

---

## 📂 Project Structure

```text
/src
 ├── components        # Reusable UI components (Card, Search, Loader)
 ├── services          # API logic and weather data processing
 ├── styles            # CSS files (Glassmorphism design tokens)
 ├── App.jsx           # Main application logic & state management
 └── main.jsx          # Entry point
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16.0.0 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Lohith1807/weather.git
   cd weather
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env` file in the root directory and add your OpenWeather API Key:
   ```env
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

---

## 🎬 Available Scripts

| Script | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server at `http://localhost:5173` |
| `npm run build` | Builds the application for production |
| `npm run preview` | Locally previews the production build |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Developed with ❤️ by [Lohith](https://github.com/Lohith1807)