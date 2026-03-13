# Train Route Map

[中文说明](README.md)

An interactive train route simulation system built with React, showcasing China's major railway network including cities, stations, train routes, and comprehensive operational information.

Supports dynamic train movement effects with real-time position updates based on time, providing rich user interaction capabilities.

![demo](demo.gif)

## ✨ Core Features

### 🗺️ Map Interaction
- Dynamic Zooming: Zoom in/out to view different regional details
- Pan Navigation: Drag the map to explore the national railway network
- Mobile Optimization: Perfectly supports mobile and tablet devices

### 🚉 Station Management
- Station Display: Shows major railway stations nationwide, categorized by size (1-5 levels)
- Click to Add: Support adding new stations by clicking on the map
- Station Filtering: "All Stations" feature with name and ID filtering
- Station Details: Click stations to view detailed information including passing trains

### 🚄 Train Management
- Real-time Operation: Dynamically displays train positions based on time
- Train Classification: Supports different train types (High-speed G, Bullet D, Intercity C, Express K, etc.)
- Train Filtering: "All Trains" feature to view all train information
- Add Trains: Support custom train route creation

### 📊 Data Management
- Data Export: Export station and train data
- Offline Mode: Supports local data storage and offline usage
- Data Organization: Stations grouped by province ID for better management

### 🎛️ Interface Features
- Left Information Panel: Displays stations, routes, and trains lists with expand/collapse functionality
- Settings Panel: Background music, map settings, and other options
- Responsive Design: Adapts to different screen sizes

## 🛠️ Technology Stack

- Frontend Framework: React 18
- UI Component Library: Reactstrap (based on Bootstrap)
- Map Rendering: Canvas + Custom rendering engine
- State Management: React Hooks
- Build Tool: Vite

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Development Mode
```bash
npm run dev
```

### Build Production Version
```bash
npm run build
```

## 📈 Data Coverage

The project currently covers railway networks in the following regions:

- North China: Beijing, Tianjin, Hebei, Shanxi, Inner Mongolia
- Northeast China: Heilongjiang, Jilin, Liaoning
- East China: Shandong, Jiangsu, Anhui, Shanghai
- Central China: Henan, Shaanxi
- Northwest China: Gansu

Includes major high-speed rail lines such as Beijing-Shanghai HSR, Beijing-Guangzhou HSR, Harbin-Dalian HSR, Xuzhou-Lanzhou HSR, etc.

## ⚠️ Important Notes

- This project is for technical learning and personal entertainment purposes only
- Data is based on publicly available information and may differ from actual operations
- Issues and Pull Requests are welcome to improve the project

## 🔗 Related Documentation

- [Function Details](./docs/function.md) - Detailed feature descriptions and railway knowledge
- [Technical Details](./docs/technical-detail.md) - Technical implementation principles and code structure
- [Change Log](./docs/change-log.md) - Version update history

## 🌐 Live Demo

Visit live demo: https://michael18811380328.github.io/demo/train-route-map/index.html

## 💖 Support the Project

If this project is helpful to you, feel free to give it a star!

For any questions or suggestions, please submit an Issue or Pull Request.
