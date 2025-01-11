import cookie from 'react-cookies'
import { Station, Train, Route } from './modals'
import { calculateStations, calculateRoutes, calculateTrains } from './utils'

const zoom = Number(cookie.load('map-zoom')) || 1;

// mock data
let stations = [
  // id 省份标识-序列号
  new Station({ id: '01-001', x: 420, y: 250, name: '北京南', size: 3.5 }),
  new Station({ id: '01-002', x: 350, y: 200, name: '北京西', size: 3.5 }),
  new Station({ id: '01-003', x: 450, y: 200, name: '北京', size: 3.5 }),
  new Station({ id: '01-004', x: 500, y: 200, name: '北京东', size: 3 }),
  new Station({ id: '01-005', x: 350, y: 150, name: '北京北', size: 2.5 }),
  new Station({ id: '01-006', x: 300, y: 100, name: '清河', size: 2.5 }),
  new Station({ id: '01-007', x: 220, y: 20, name: '八达岭长城', size: 2 }),
  new Station({ id: '01-008', x: 500, y: 150, name: '北京朝阳', size: 2.5 }),
  new Station({ id: '01-009', x: 550, y: 220, name: '通州', size: 2.5 }),
  new Station({ id: '01-010', x: 340, y: 250, name: '北京丰台', size: 3.5 }),
  new Station({ id: '01-011', x: 100, y: 10, name: '延庆', size: 2 }),
  // 京原
  new Station({ id: '01-012', x: 310, y: 205, name: '石景山', size: 3 }),
  new Station({ id: '01-013', x: 300, y: 230, name: '大灰厂', size: 1.5 }),
  new Station({ id: '01-014', x: 290, y: 235, name: '上万', size: 1.5 }),
  new Station({ id: '01-015', x: 265, y: 235, name: '南观村', size: 1.5 }),
  new Station({ id: '01-016', x: 240, y: 235, name: '燕山', size: 1.5 }),
  new Station({ id: '01-017', x: 235, y: 250, name: '良各庄', size: 2.5 }),
  new Station({ id: '01-018', x: 205, y: 255, name: '云居寺', size: 1.5 }),
  new Station({ id: '01-019', x: 190, y: 240, name: '十渡', size: 1.5 }),

  new Station({ id: '02-001', x: 600, y: 420, name: '天津西', size: 3 }),
  new Station({ id: '02-002', x: 580, y: 530, name: '天津南', size: 2.5 }),
  new Station({ id: '02-003', x: 650, y: 460, name: '天津', size: 3.5 }),
  new Station({ id: '02-004', x: 770, y: 450, name: '塘沽', size: 2 }),
  new Station({ id: '02-005', x: 800, y: 450, name: '滨海', size: 2 }),
  new Station({ id: '02-006', x: 650, y: 275, name: '蓟州', size: 2 }),
  new Station({ id: '02-007', x: 650, y: 350, name: '宝坻', size: 2 }),
  new Station({ id: '02-008', x: 650, y: 410, name: '天津北', size: 2.5 }),
  new Station({ id: '02-009', x: 760, y: 380, name: '滨海北', size: 2 }),
  new Station({ id: '02-010', x: 740, y: 420, name: '滨海西', size: 2.5 }),
  new Station({ id: '02-011', x: 705, y: 462, name: '军粮城南', size: 2 }),
  new Station({ id: '02-012', x: 765, y: 340, name: '芦台', size: 2 }),

  // 京山
  new Station({ id: '03-002', x: 500, y: 350, name: '廊坊', size: 2.5 }),
  new Station({ id: '03-003', x: 780, y: 300, name: '唐山', size: 3 }),
  new Station({ id: '03-004', x: 750, y: 250, name: '唐山北', size: 2.5 }),
  new Station({ id: '03-005', x: 850, y: 200, name: '滦县', size: 2 }),
  new Station({ id: '03-006', x: 900, y: 175, name: '昌黎', size: 2 }),
  new Station({ id: '03-007', x: 950, y: 150, name: '北戴河', size: 2.5 }),
  new Station({ id: '03-008', x: 1000, y: 125, name: '秦皇岛', size: 3 }),
  new Station({ id: '03-009', x: 1050, y: 100, name: '山海关', size: 2.5 }),
  new Station({ id: '03-010', x: 600, y: 250, name: '燕郊', size: 2 }),
  new Station({ id: '03-011', x: 700, y: 275, name: '玉田县', size: 2 }),
  new Station({ id: '03-012', x: 850, y: 150, name: '迁安', size: 2 }),
  new Station({ id: '03-013', x: 900, y: 130, name: '卢龙', size: 2 }),
  // 京广
  new Station({ id: '03-014', x: 250, y: 370, name: '高碑店', size: 2.5 }),
  new Station({ id: '03-015', x: 160, y: 470, name: '徐水', size: 2.5 }),
  new Station({ id: '03-016', x: 120, y: 530, name: '保定', size: 3 }),
  new Station({ id: '03-017', x: 280, y: 290, name: '涿州', size: 2 }),
  // 京九
  new Station({ id: '03-018', x: 370, y: 430, name: '霸州', size: 2 }),
  new Station({ id: '03-019', x: 390, y: 510, name: '任丘', size: 2.5 }),
  new Station({ id: '03-020', x: 360, y: 360, name: '固安', size: 2.5 }),

  // 京原
  new Station({ id: '01-020', x: 180, y: 250, name: '野三坡', size: 1.5 }),
  new Station({ id: '01-021', x: 170, y: 260, name: '百里峡', size: 1.5 }),
  new Station({ id: '01-022', x: 160, y: 280, name: '福山口', size: 1.5 }),
  new Station({ id: '01-023', x: 140, y: 290, name: '白涧', size: 2 }),
  new Station({ id: '01-024', x: 140, y: 295, name: '板城', size: 1.5 }),
  new Station({ id: '01-025', x: 130, y: 300, name: '南城司', size: 1.5 }),
  new Station({ id: '01-026', x: 120, y: 305, name: '奇峰塔', size: 1.5 }),
  new Station({ id: '01-027', x: 110, y: 305, name: '紫荆关', size: 1.5 }),
  new Station({ id: '01-028', x: 100, y: 305, name: '大盘石', size: 1.5 }),
  new Station({ id: '01-029', x: 90, y: 310, name: '塔崖驿', size: 1.5 }),
  new Station({ id: '01-030', x: 80, y: 315, name: '王安镇', size: 1.5 }),
  new Station({ id: '01-031', x: 70, y: 320, name: '浮图峪', size: 1.5 }),
  new Station({ id: '01-032', x: 60, y: 315, name: '北屯', size: 1.5 }),
  new Station({ id: '01-033', x: 40, y: 320, name: '涞源', size: 2 }),
]

if (zoom > 1) {
  stations = calculateStations(stations, zoom);
}

const stationMap = {}
for (let i = 0; i < stations.length; i++) {
  stationMap[stations[i].id] = stations[i];
}

let routes = [
  new Route({
    id: 11,
    name: '京原线',
    color: 'black',
    line_number: 1,
    speed: 80,
    points: [
      stationMap['01-002'],
      stationMap['01-012'],
      stationMap['01-013'],
      stationMap['01-014'],
      stationMap['01-015'],
      stationMap['01-016'],
      stationMap['01-017'],
      stationMap['01-018'],
      stationMap['01-019'],
      stationMap['01-020'],
      stationMap['01-021'],
      stationMap['01-022'],
      stationMap['01-023'],
      stationMap['01-024'],
      stationMap['01-025'],
      stationMap['01-026'],
      stationMap['01-027'],
      stationMap['01-028'],
      stationMap['01-029'],
      stationMap['01-030'],
      stationMap['01-031'],
      stationMap['01-032'],
      stationMap['01-033'],
    ],
  }),
  new Route({
    id: 10,
    name: '津霸线',
    color: 'black',
    line_number: 2,
    speed: 120,
    points: [
      stationMap['02-008'],
      stationMap['02-001'],
      stationMap['03-018'],
      stationMap['03-015'],
    ],
  }),
  new Route({
    id: 9,
    name: '京九线',
    color: 'black',
    line_number: 2,
    speed: 120,
    points: [
      stationMap['01-002'],
      stationMap['01-010'],
      stationMap['03-020'],
      stationMap['03-018'],
      stationMap['03-019'],
    ],
  }),
  new Route({
    id: 8,
    name: '京广线',
    color: 'black',
    line_number: 2,
    speed: 120,
    points: [
      stationMap['01-002'],
      stationMap['01-010'],
      stationMap['03-017'],
      stationMap['03-014'],
      stationMap['03-015'],
      stationMap['03-016'],
    ],
  }),
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
      stationMap['01-011'],      
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
      stationMap['02-008'],
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
      stationMap['02-010'],
      stationMap['02-009'],
      stationMap['02-012'],
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
      stationMap['02-011'],
      stationMap['02-004'],
      stationMap['02-005'],
    ],
  }),
  new Route({
    id: 7,
    name: '北京联络线',
    color: 'red',
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
    // 北京——山海关
    start: stationMap['01-003'],
    end: stationMap['03-009'],
    color: 'green',
    times: [490, 495, 500, 510, 520, 525, 530, 535, 540, 545, 550, 555],
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
    id: '2-1',
    train_number: 'C301',
    start: stationMap['01-001'],
    end: stationMap['02-005'],
    color: 'red',
    times: [490, 500, 505, 510, 513],
    stations: [
      stationMap['01-001'],
      stationMap['02-001'],
      stationMap['02-003'],
      stationMap['02-004'],
      stationMap['02-005'],
    ],
  }),
  new Train({
    id: '2-2',
    train_number: 'C302',
    start: stationMap['02-005'],
    end: stationMap['01-001'],
    color: 'red',
    times: [513, 515, 520, 525, 535],
    stations: [
      stationMap['02-005'],
      stationMap['02-004'],
      stationMap['02-003'],
      stationMap['02-001'],
      stationMap['01-001'],
    ],
  }),
  new Train({
    id: 3,
    train_number: 'C501',
    // 北京——延庆
    start: stationMap['01-005'],
    end: stationMap['01-011'],
    color: 'red',
    times: [490, 505, 510],
    stations: [
      stationMap['01-005'],
      stationMap['01-006'],
      stationMap['01-007'],
      stationMap['01-011'],
    ],
  }),
  new Train({
    id: 4,
    train_number: 'G101',
    // 北京南—天津南
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
    // 天津——蓟州
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
    // 滨海西——山海关
    start: stationMap['02-010'],
    end: stationMap['03-009'],
    color: 'black',
    times: [490, 510, 530, 550, 570, 600],
    stations: [
      stationMap['02-010'],
      stationMap['03-003'],
      stationMap['03-012'],
      stationMap['03-013'],
      stationMap['03-008'],
      stationMap['03-009'],
    ],
  }),
  new Train({
    id: 7,
    train_number: 'G103',
    // 北京——山海关
    start: stationMap['01-003'],
    end: stationMap['03-009'],
    color: 'red',
    times: [490, 492, 495, 497, 500, 502, 505, 507, 510],
    stations: [
      stationMap['01-003'],
      stationMap['01-009'],
      stationMap['03-010'],
      stationMap['02-006'],
      stationMap['03-011'],
      stationMap['03-004'],
      stationMap['03-005'],
      stationMap['03-006'],
      stationMap['03-009'],
    ],
  }),
]

trains = calculateTrains(trains);
routes = calculateRoutes(routes);

const basicData = {
  width: 1200 * zoom,
  height: 600 * zoom,
  initTime: 490,
  stations,
  trains,
  routes,
}

const beijingData = {
  ...basicData,
  name: '北京铁路枢纽',
  translateX: 0,
  translateY: 0,
}

const tianjinData = {
  ...basicData,
  name: '天津铁路枢纽',
  translateX: -200,
  translateY: -200,
}

export { beijingData, tianjinData };
