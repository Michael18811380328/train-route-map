import { useCallback, useEffect, useState } from 'react'
import Stations from './Stations';
import Routes from './Routes';
import Trains from './Trains';
import mapImage from '/media/map.jpg';

import './MapContainer.css';

const MapContainer = ({ defaultData, time }) => {

  const clickMap = useCallback((event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    if (x < 100 && y < 100) return;
    window.emitter.emit('clickMap', { x, y });
  }, []);

  return (
    <div
      className="map"
      style={{ 
        width: defaultData.width,
        height: defaultData.height,
        backgroundImage: `url(${mapImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      onClick={clickMap}
    >
      <Stations stations={defaultData.stations} />
      <Routes routes={defaultData.routes} />
      <Trains time={time} trains={defaultData.trains}/>
    </div>
  );
};

export default MapContainer;
