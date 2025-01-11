import React from 'react';

const Train = ({ train, time }) => {
  const { id, train_number, start, end, color, times, stations, points } = train;

  if (!points) {
    return null;
  }

  const point = points[time];

  if (!point) {
    return null;
  }
  // todo：render station and times info
  // next station is stations[x], next time is times[x]

  return (
    <div id={id} className="train" style={{ left: point.x, top: point.y, color }}>
      <div>{train_number}</div>
      <div>{start.name}-{end.name}</div>
    </div>
  );
};

export default Train;
