import { useState } from 'react';
import StationDialog from '../dialog/StationDialog';
import { provinceIDMap } from '../../store/stations';

function StationList({ stations }) {
  const [selectedStation, setSelectedStation] = useState(null);

  const toggleStation = (station) => {
    setSelectedStation(station ? station : null);
  };

  const provinceMap = {};
  stations?.forEach(station => {
    provinceMap[station.province_id] = provinceIDMap[station.province_id];
  });

  return (
    <>
      <details>
        <summary>车站列表</summary>
        {Object.keys(provinceMap).map(provinceID => (
          <>
            <summary style={{ paddingLeft: '10px' }} key={provinceID}>{provinceMap[provinceID]}</summary>
            <ul>
              {stations.filter(station => station.province_id === provinceID).map((station, idx) => (
                <li 
                  key={idx} 
                  onClick={() => toggleStation(station)}
                  title={station.name}
                >
                  {station.name}
                </li>
              ))}
            </ul>
          </>
        ))}
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
