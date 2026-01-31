import React from 'react'
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import Station from './Station';

const zoom = Number(Cookies.get('map-zoom')) || 1;

const StationList = ({ stations }) => {
  return (
    <>
      {stations
        .filter(station => {
          if (zoom <= 1) {
            return station.size >= 2;
          }
          return true;
        })
        .map(station => (
          <Station 
            key={station.id} 
            station={station} 
          />
        ))
      }
    </>
  );
};

StationList.propTypes = {
  stations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default React.memo(StationList);