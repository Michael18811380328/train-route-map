import { useState } from 'react';
import AllTrainsDialog from '../dialog/AllTrainsDialog';

function AllTrains({ trains }) {
  const [showAllTrains, setShowAllTrains] = useState(false);

  const handleToggleAllTrains = (e) => {
    e.preventDefault();
    setShowAllTrains(!showAllTrains);
  };

  const handleToggleDialog = () => {
    setShowAllTrains(!showAllTrains);
  };

  return (
    <>
      <button
        className="toggle-all-btn"
        onClick={handleToggleAllTrains}
      >
        全部车次
      </button>
      <AllTrainsDialog 
        isOpen={showAllTrains}
        toggle={handleToggleDialog}
        trains={trains}
      />
    </>
  );
}

export default AllTrains;
