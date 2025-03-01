import React from 'react'
import PropTypes from 'prop-types';
import cookie from 'react-cookies'
import { useCallback } from 'react'

const zoom = Number(cookie.load('map-zoom')) || 1;

const StationList = ({ stations }) => {

  const clickStation = useCallback((event, station) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("Click station:", station);
  }, []);

  return (
    <>
      {stations.filter(station => {
        if (zoom <= 1) {
          return station.size >= 2
        }
        return true;        
      }).map(station => {
        const { id, x, y, name, size } = station;        
        return (
          <React.Fragment key={id}>
            <div
              key={"station-" + id}
              className="station"
              onClick={(e) => clickStation(e, station)}
              style={{ left: x - size * 2.5, top: y - size * 2.5, width: size * 5, height: size * 5 }}
              title={`x: ${x}, y: ${y}`}
            ></div>
            <div
              key={"station-name-" + id}
              className="station-name"
              style={{ left: x - size * 2.5, top: y + size * 5, height: size * 5 }}
              title={id}
            >{name}</div>
          </React.Fragment>
        )
      })}
    </>
  )
}

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

export default StationList
