const calculateStations = (stations, zoom) => {
  return stations.map(station => {
    let { x, y } = station;
    return { ...station, x : x * zoom, y: y * zoom };
  });
};

const calculateRoutes = (routes) => {
  return routes.map(route => {
    let lines = [];
    for (let i = 0; i < route.points.length - 1; i++) {
      let x1 = route.points[i].x;
      let y1 = route.points[i].y;
      let x2 = route.points[i + 1].x;
      let y2 = route.points[i + 1].y;
      let angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
      let length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
      lines.push({ x1, y1, x2, y2, angle, length });
    }
    return { ...route, lines };
  });
};

const calculateTrains = (trains) => {
  return trains.map(train => {
    let points = [];
    train.startTime = train.times[0];
    train.endTime = train.times[train.times.length - 1];
    let preIndex = 0;
    let nextIndex = 1;
    points[train.startTime] = {
      x: train.stations[0].x,
      y: train.stations[0].y,
    };
    points[train.endTime] = {
      x: train.stations[train.stations.length - 1].x,
      y: train.stations[train.stations.length - 1].y,
    };
    for (let t = train.startTime + 1; t < train.endTime; t++) {
      if (t >= train.times[nextIndex]) {
        preIndex++;
        nextIndex++;
      }      
      let { x: x1, y: y1 } = train.stations[preIndex];
      let { x: x2, y: y2 } = train.stations[nextIndex];
      let x = x1 + (x2 - x1) * ((t - train.times[preIndex]) / (train.times[nextIndex] - train.times[preIndex] ));
      let y = y1 + (y2 - y1) * ((t - train.times[preIndex]) / (train.times[nextIndex] - train.times[preIndex] ));
      points[t] = {x, y};
    }
    return {
      ...train,
      points,
    };
  });
}

export { calculateStations, calculateRoutes, calculateTrains };
