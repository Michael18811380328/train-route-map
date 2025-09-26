import { useState } from 'react';
import AllStationsDialog from '../dialog/AllStationsDialog';

function AllStations({ stations, trains }) {
  const [showAllStations, setShowAllStations] = useState(false);

  return (
    <>
      <button
        className="toggle-all-btn"
        onClick={(e) => {
          e.preventDefault();
          setShowAllStations(!showAllStations);
        }}
      >
        全部车站
      </button>
      <AllStationsDialog 
        isOpen={showAllStations}
        toggle={() => setShowAllStations(!showAllStations)}
        stations={stations}
        trains={trains}
      />
    </>
  );
}

export default AllStations;
