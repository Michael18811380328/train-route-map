import { Station, Train, Route } from './modals'

// mock data
let stations = [
  // id 省份标识-序列号
  new Station({ id: '01-001', x: 200, y: 200, name: '北京南', size: 3 }),
  new Station({ id: '01-002', x: 150, y: 150, name: '北京西', size: 3 }),
  new Station({ id: '01-003', x: 250, y: 150, name: '北京', size: 2.5 }),
  new Station({ id: '01-004', x: 300, y: 150, name: '北京东', size: 2 }),
  new Station({ id: '01-005', x: 150, y: 100, name: '北京北', size: 2.5 }),
  new Station({ id: '01-006', x: 100, y: 50, name: '清河', size: 2.5 }),
  new Station({ id: '01-007', x: 50, y: 20, name: '八达岭', size: 2 }),
  new Station({ id: '01-008', x: 300, y: 100, name: '北京朝阳', size: 2.5 }),
  new Station({ id: '01-009', x: 350, y: 170, name: '通州', size: 2.5 }),
  new Station({ id: '01-010', x: 125, y: 225, name: '北京丰台', size: 2.5 }),

  new Station({ id: '02-001', x: 400, y: 370, name: '天津西', size: 3 }),
  new Station({ id: '02-002', x: 400, y: 450, name: '天津南', size: 2.5 }),
  new Station({ id: '02-003', x: 450, y: 410, name: '天津', size: 3 }),
  new Station({ id: '02-004', x: 550, y: 400, name: '塘沽', size: 2 }),
  new Station({ id: '02-005', x: 600, y: 400, name: '滨海', size: 2 }),
  new Station({ id: '02-006', x: 450, y: 225, name: '蓟州', size: 2 }),
  new Station({ id: '02-007', x: 450, y: 300, name: '宝坻', size: 2 }),

  new Station({ id: '03-002', x: 300, y: 300, name: '廊坊', size: 2.5 }),
  new Station({ id: '03-003', x: 550, y: 250, name: '唐山', size: 3 }),
  new Station({ id: '03-004', x: 550, y: 200, name: '唐山北', size: 2.5 }),
  new Station({ id: '03-005', x: 650, y: 150, name: '滦县', size: 2 }),
  new Station({ id: '03-006', x: 700, y: 125, name: '昌黎', size: 2 }),
  new Station({ id: '03-007', x: 750, y: 100, name: '北戴河', size: 2.5 }),
  new Station({ id: '03-008', x: 800, y: 75, name: '秦皇岛', size: 3 }),
  new Station({ id: '03-009', x: 850, y: 50, name: '山海关', size: 2.5 }),
  new Station({ id: '03-010', x: 400, y: 200, name: '燕郊', size: 2 }),
  new Station({ id: '03-011', x: 500, y: 225, name: '玉田县', size: 2 }),
  new Station({ id: '03-012', x: 650, y: 100, name: '迁安', size: 2 }),
  new Station({ id: '03-013', x: 700, y: 80, name: '卢龙', size: 2 }),
]


const stationMap = {}
for (let i = 0; i < stations.length; i++) {
  stationMap[stations[i].id] = stations[i];
}

let routes = [
  new Route({
    id: 2,
    name: '京沪高铁',
    color: 'red',
    line_number: 2,
    speed: 350,
    points: [
      stationMap['01-001'],
      stationMap['03-002'],
      stationMap['02-002'],
    ],
  }),
  new Route({
    id: 3,
    name: '京张高铁',
    color: 'red',
    line_number: 2,
    speed: 350,
    points: [
      stationMap['01-005'],
      stationMap['01-006'],
      stationMap['01-007'],
    ],
  }),
  new Route({
    id: 4,
    name: '津蓟铁路',
    color: 'black',
    line_number: 1,
    speed: 100,
    points: [
      stationMap['02-003'],
      stationMap['02-007'],
      stationMap['02-006'],
    ],
  }),
  new Route({
    id: 5,
    name: '京秦铁路',
    color: 'green',
    line_number: 2,
    speed: 120,
    points: [
      stationMap['01-003'],
      stationMap['01-004'],
      stationMap['01-009'],
      stationMap['03-010'],
      stationMap['02-006'],
      stationMap['03-011'],
      stationMap['03-004'],
      stationMap['03-005'],
      stationMap['03-006'],
      stationMap['03-007'],
      stationMap['03-008'],
      stationMap['03-009'],
    ],
  }),
  new Route({
    id: 6,
    name: '津山铁路',
    color: 'black',
    line_number: 2,
    speed: 160,
    points: [
      stationMap['02-003'],
      stationMap['02-004'],
      stationMap['03-003'],
      stationMap['03-012'],
      stationMap['03-013'],
      stationMap['03-008'],
      stationMap['03-009'],
    ],
  }),
  new Route({
    id: 1,
    name: '京津高铁',
    color: 'red',
    line_number: 2,
    speed: 350,
    points: [
      stationMap['01-001'],
      stationMap['02-001'],
      stationMap['02-003'],
      stationMap['02-004'],
      stationMap['02-005'],
    ],
  }),
  new Route({
    id: 7,
    name: '北京联络线',
    color: 'black',
    line_number: 4,
    speed: 80,
    points: [
      stationMap['01-005'],
      stationMap['01-002'],
      stationMap['01-010'],
      stationMap['01-001'],
      stationMap['01-003'],
      stationMap['01-004'],
      stationMap['01-008'],
      stationMap['01-005'],
    ],
  }),
]

let trains = [
  new Train({
    id: 1,
    train_number: 'D101',
    start: stationMap['01-003'],
    end: stationMap['03-009'],
    color: 'green',
    times: [490, 495, 500, 510, 520, 530, 540, 550, 560, 570, 580, 590],
    stations: [
      stationMap['01-003'],
      stationMap['01-004'],
      stationMap['01-009'],
      stationMap['03-010'],
      stationMap['02-006'],
      stationMap['03-011'],
      stationMap['03-004'],
      stationMap['03-005'],
      stationMap['03-006'],
      stationMap['03-007'],
      stationMap['03-008'],
      stationMap['03-009'],
    ],
  }),
  new Train({
    id: 2,
    train_number: 'C301',
    start: stationMap['01-001'],
    end: stationMap['02-005'],
    color: 'red',
    times: [490, 505, 510, 515, 520],
    stations: [
      stationMap['01-001'],
      stationMap['02-001'],
      stationMap['02-003'],
      stationMap['02-004'],
      stationMap['02-005'],
    ],
  }),
  new Train({
    id: 3,
    train_number: 'C501',
    start: stationMap['01-005'],
    end: stationMap['01-007'],
    color: 'red',
    times: [490, 505, 510],
    stations: [
      stationMap['01-005'],
      stationMap['01-006'],
      stationMap['01-007'],
    ],
  }),
  new Train({
    id: 4,
    train_number: 'G101',
    start: stationMap['01-001'],
    end: stationMap['02-002'],
    color: 'red',
    times: [490, 500, 505],
    stations: [
      stationMap['01-001'],
      stationMap['03-002'],
      stationMap['02-002'],
    ],
  }),
  new Train({
    id: 5,
    train_number: 'K2501',
    start: stationMap['02-003'],
    end: stationMap['02-006'],
    color: 'black',
    times: [490, 510, 530],
    stations: [
      stationMap['02-003'],
      stationMap['02-007'],
      stationMap['02-006'],
    ],
  }),
  new Train({
    id: 6,
    train_number: 'K873',
    start: stationMap['02-004'],
    end: stationMap['03-009'],
    color: 'black',
    times: [490, 500, 510, 520, 530, 550],
    stations: [
      stationMap['02-004'],
      stationMap['03-003'],
      stationMap['03-012'],
      stationMap['03-013'],
      stationMap['03-008'],
      stationMap['03-009'],
    ],
  }),
]

// 计算属性 lines，把多个节点连成线段
routes = routes.map(route => {
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

// 计算属性 points
trains = trains.map(train => {
  // 初始化计算出全部车次的时间和位置
  let points = [];
  train.startTime = train.times[0];
  train.endTime = train.times[train.times.length - 1];
  let preIndex = 0;
  let nextIndex = 1;
  // first point
  points[train.startTime] = {
    x: train.stations[0].x,
    y: train.stations[0].y,
  };
  // last point
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

export { stations, trains, routes }
