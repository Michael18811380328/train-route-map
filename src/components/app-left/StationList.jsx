import { useState } from 'react';
import StationDialog from '../dialog/StationDialog';

function StationList({ stations }) {
  const [selectedStation, setSelectedStation] = useState(null);

  const toggleStation = (station) => {
    setSelectedStation(station ? station : null);
  };

  return (
    <>
      <details>
        <summary>车站列表</summary>
        <ul>
          {stations.map((station, idx) => (
            <li 
              key={idx} 
              onClick={() => toggleStation(station)}
              title={station.name}
            >
              {station.name}
            </li>
          ))}
        </ul>
      </details>
      {selectedStation && (
        <StationDialog 
          isOpen={!!selectedStation}
          toggle={() => toggleStation(null)}
          station={selectedStation}
        />
      )}
    </>
  );
}

export default StationList;
