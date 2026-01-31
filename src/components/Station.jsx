import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import StationDialog from './dialog/StationDialog';

const Station = ({ station }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const clickStation = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("Click station:", station);
  }, [station]);

  const clickStationName = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDialogOpen(true);
  }, []);

  const toggleDialog = useCallback(() => {
    setIsDialogOpen(!isDialogOpen);
  }, [isDialogOpen]);

  const { id, x, y, name, size } = station;

  return (
    <>
      <div
        className="station"
        onClick={clickStation}
        style={{
          cursor: 'pointer',
          left: x - size * 2.5, 
          top: y - size * 2.5, 
          width: size * 5, 
          height: size * 5 
        }}
        title={`x: ${x}, y: ${y}`}
      ></div>
      <div
        className="station-name"
        style={{ 
          cursor: 'pointer',
          left: x - size * 2.5, 
          top: y + size * 5, 
          height: size * 5 
        }}
        title={id}
        onClick={clickStationName}
      >
        {name}
      </div>
      <StationDialog 
        isOpen={isDialogOpen} 
        toggle={toggleDialog} 
        station={station} 
      />
    </>
  );
};

Station.propTypes = {
  station: PropTypes.shape({
    id: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  }).isRequired,
};

export default React.memo(Station);