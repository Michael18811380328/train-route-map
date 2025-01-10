import React from 'react'
import { stations } from '../data'

const StationList = () => (
  <>
    {stations.map(station => {
      const { id, x, y, name, size } = station;
      return (
        <React.Fragment key={id}>
          <div key={"station-" + id} className="station" style={{ left: x - size * 2.5, top: y - size * 2.5, width: size * 5, height: size * 5, borderRadius: '50%', position: 'absolute', backgroundColor: '#999' }} title={`x: ${x}, y: ${y}`}></div>
          <div key={"station-name-" + id} className="station-name" style={{ left: x - size * 2.5, top: y + size * 5, width: 'auto', height: size * 5, position: 'absolute' }}>{name}</div>
        </React.Fragment>  
      )
    })}
  </>
)

export default StationList
