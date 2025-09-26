import { useState } from 'react';
import RouteDialog from '../dialog/RouteDialog';

function RouteList({ routes }) {
  const [selectedRoute, setSelectedRoute] = useState(null);

  const toggleRoute = (route) => {
    setSelectedRoute(route ? route : null);
  };

  return (
    <>
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
      {selectedRoute && (
        <RouteDialog 
          isOpen={!!selectedRoute}
          toggle={() => toggleRoute(null)}
          route={selectedRoute}
        />
      )}
    </>
  );
}

export default RouteList;
