import { useState } from 'react';
import StationList from './app-left/StationList';
import RouteList from './app-left/RouteList';
import TrainList from './app-left/TrainList';
import AllTrains from './app-left/AllTrains';
import AllStations from './app-left/AllStations';

import './App-left.css';

function AppLeft({ defaultData }) {
  const { stations, trains, routes } = defaultData;
  return (
    <div className="app-left">
      <StationList stations={stations} />
      <RouteList routes={routes} />
      <TrainList trains={trains} />
      <AllTrains trains={trains} />
      <AllStations stations={stations} trains={trains} />
    </div>
  );
}

export default AppLeft;
