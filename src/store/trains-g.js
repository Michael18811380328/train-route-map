import { Train } from '../modals'
import { stationMap } from './stations'

export const trainsG = [
  new Train({
    id: 'G101',
    train_number: 'G101',
    // 北京南—济南西
    start: stationMap['01-001'],
    end: stationMap['04-003'],
    color: 'red',
    times: [490, 493, 496, 499, 502, 505],
    stations: [
      stationMap['01-001'],
      stationMap['03-002'],
      stationMap['02-002'],
      stationMap['03-075'],
      stationMap['04-002'],
      stationMap['04-003'],
    ],
  }),
  new Train({
    id: 'G102',
    train_number: 'G102',
    // 济南西—北京南
    start: stationMap['04-003'],
    end: stationMap['01-001'],
    color: 'red',
    times: [490, 493, 496, 499, 502, 505],
    stations: [
      stationMap['04-003'],
      stationMap['04-002'],
      stationMap['03-075'],
      stationMap['02-002'],
      stationMap['03-002'],
      stationMap['01-001'],
    ],
  }),
  new Train({
    id: 'G103',
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
  new Train({
    id: 'G104',
    train_number: 'G104',
    // 山海关——北京
    start: stationMap['03-009'],
    end: stationMap['01-003'],
    color: 'red',
    times: [490, 492, 495, 497, 500, 502, 505, 507, 510],
    stations: [
      stationMap['03-009'],
      stationMap['03-006'],
      stationMap['03-005'],
      stationMap['03-004'],
      stationMap['03-011'],
      stationMap['02-006'],
      stationMap['03-010'],
      stationMap['01-009'],
      stationMap['01-003'],
    ],
  }),

  // 北京丰台-广州
  new Train({
    id: 'G105',
    train_number: 'G105',
    start: stationMap['01-010'],
    // end: stationMap['03-057'],
    end: { name: '广州' }, // 线路比较少，模拟数据
    color: 'red',
    times: [490, 492, 495, 497, 500, 502, 505, 510, 515, 518, 521],
    stations: [
      stationMap['01-010'],
      stationMap['03-048'],
      stationMap['03-049'],
      stationMap['03-050'],
      stationMap['03-051'],
      stationMap['03-052'],
      stationMap['03-053'],
      stationMap['03-046'],
      stationMap['03-055'],
      stationMap['03-056'],
      stationMap['03-057'],
    ],
  }),
  // 北京丰台-深圳东
  new Train({
    id: 'G107',
    train_number: 'G107',
    start: stationMap['01-002'],
    // end: stationMap['03-057'],
    end: { name: '深圳东' }, // 线路比较少，模拟数据
    color: 'red',
    times: [490, 492, 495, 497, 500, 502, 505, 507, 510, 512, 515],
    stations: [
      stationMap['01-002'],
      stationMap['01-010'],
      stationMap['03-048'],
      stationMap['03-049'],
      stationMap['03-050'],
      stationMap['03-051'],
      stationMap['03-052'],
      stationMap['03-046'],
      stationMap['03-055'],
      stationMap['03-056'],
      stationMap['03-057'],
    ],
  }),
  // 北京丰台-武汉
  new Train({
    id: 'G109',
    train_number: 'G109',
    start: stationMap['01-010'],
    // end: stationMap['03-057'],
    end: { name: '武汉' }, // 线路比较少，模拟数据
    color: 'red',
    times: [500, 502, 505, 510, 515, 517, 520, 525, 530, 535, 538],
    stations: [
      stationMap['01-010'],
      stationMap['03-048'],
      stationMap['03-049'],
      stationMap['03-050'],
      stationMap['03-051'],
      stationMap['03-052'],
      stationMap['03-053'],
      stationMap['03-046'],
      stationMap['03-055'],
      stationMap['03-056'],
      stationMap['03-057'],
    ],
  }),
  // 北京南-上海虹桥
  new Train({
    id: 'G1',
    train_number: 'G1',
    start: stationMap['01-001'],
    // end: stationMap['04-007'],
    end: { name: '上海虹桥' }, // 线路比较少，模拟数据
    color: 'red',
    times: [500, 505, 507, 510, 512, 514, 516, 519, 522],
    stations: [
      stationMap['01-001'],
      stationMap['02-002'],
      stationMap['03-075'],
      stationMap['04-002'],
      stationMap['04-003'],
      stationMap['04-004'],
      stationMap['04-005'],
      stationMap['04-006'],
      stationMap['04-007'],
    ],
  }),
  // 北京南-上海虹桥
  new Train({
    id: 'G3',
    train_number: 'G3',
    start: stationMap['01-001'],
    // end: stationMap['04-007'],
    end: { name: '上海虹桥' }, // 线路比较少，模拟数据
    color: 'red',
    times: [505, 507, 510, 512, 515, 517, 520, 523, 525],
    stations: [
      stationMap['01-001'],
      stationMap['02-002'],
      stationMap['03-075'],
      stationMap['04-002'],
      stationMap['04-003'],
      stationMap['04-004'],
      stationMap['04-005'],
      stationMap['04-006'],
      stationMap['04-007'],
    ],
  }),
  // 南京南-北京南
  new Train({
    id: 'G70',
    train_number: 'G68',
    // start: stationMap['04-007'],
    start: { name: '南京南' }, // 线路比较少，模拟数据
    end: stationMap['01-001'],
    color: 'red',
    times: [500, 502, 505, 510, 515, 517, 520, 525, 530],
    stations: [
      stationMap['04-007'],
      stationMap['04-006'],
      stationMap['04-005'],
      stationMap['04-004'],
      stationMap['04-003'],
      stationMap['04-002'],
      stationMap['03-075'],
      stationMap['02-002'],
      stationMap['01-001'],
    ],
  }),

  // 北京西-合肥
  new Train({
    id: 'G501',
    train_number: 'G501',
    start: stationMap['01-002'],
    // end: stationMap['05-013'],
    end: { name: '合肥' }, // 线路比较少，模拟数据
    color: 'red',
    times: [490, 493, 496, 499, 502, 505, 508, 511, 514, 517, 520, 523, 525, 527],
    stations: [
      stationMap['01-002'],
      stationMap['01-010'],
      stationMap['05-002'],
      stationMap['05-003'],
      stationMap['05-004'],
      stationMap['05-005'],
      stationMap['05-006'],
      stationMap['05-007'],
      stationMap['05-008'],
      stationMap['05-009'],
      stationMap['05-010'],
      stationMap['05-011'],
      stationMap['05-012'],
      stationMap['05-013'],
    ],
  }),
  // 北京西-南昌
  new Train({
    id: 'G601',
    train_number: 'G601',
    start: stationMap['01-002'],
    // end: stationMap['05-013'],
    end: { name: '南昌' }, // 线路比较少，模拟数据
    color: 'red',
    times: [490, 493, 496, 499, 502, 505, 508, 511, 514, 517, 520, 523],
    stations: [
      stationMap['01-002'],
      stationMap['05-002'],
      stationMap['05-003'],
      stationMap['05-004'],
      stationMap['05-005'],
      stationMap['05-006'],
      stationMap['05-008'],
      stationMap['05-009'],
      stationMap['05-010'],
      stationMap['05-011'],
      stationMap['05-012'],
      stationMap['05-013'],
    ],
  }),
]

