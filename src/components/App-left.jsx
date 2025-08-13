import { useState } from 'react';
import StationDialog from './dialog/StationDialog';
import RouteDialog from './dialog/RouteDialog';
import TrainDialog from './dialog/TrainDialog';

import './App-left.css';

function AppLeft({ defaultData }) {
  const { stations, trains, routes } = defaultData;
  const [selectedStation, setSelectedStation] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [selectedTrain, setSelectedTrain] = useState(null);

  const toggleStation = (station) => {
    setSelectedStation(station ? station : null);
  };

  const toggleRoute = (route) => {
    setSelectedRoute(route ? route : null);
  };

  const toggleTrain = (train) => {
    setSelectedTrain(train ? train : null);
  };

  return (
    <div className="app-left">
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
      <details>
        <summary>路线列表</summary>
        <ul>
          {routes.map((route, idx) => (
            <li 
              key={idx} 
              onClick={() => toggleRoute(route)}
              title={route.points.map(point => point.name).join('-')}
            >
              {route.name}
            </li>
          ))}
        </ul>
      </details>
      <details>
        <summary>车次列表</summary>
        <ul>
          {trains.map((train, idx) => (
            <li 
              key={idx} 
              onClick={() => toggleTrain(train)}
              title={train.start.name + '——' + train.end.name}
            >
              {train.train_number}
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
      {selectedRoute && (
        <RouteDialog 
          isOpen={!!selectedRoute}
          toggle={() => toggleRoute(null)}
          route={selectedRoute}
        />
      )}
      {selectedTrain && (
        <TrainDialog 
          isOpen={!!selectedTrain}
          toggle={() => toggleTrain(null)}
          train={selectedTrain}
        />
      )}
    </div>
  );
}

export default AppLeft;
