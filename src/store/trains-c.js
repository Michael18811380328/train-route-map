import { Train } from '../modals'
import { stationMap } from './stations'

export const trainsC = [
  // 北京南滨海往返
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
  // 北京——延庆往返
  new Train({
    id: 'C501',
    train_number: 'C501',
    start: stationMap['01-005'],
    end: stationMap['01-011'],
    color: 'red',
    times: [490, 505, 510, 515, 520],
    stations: [
      stationMap['01-005'],
      stationMap['01-006'],
      stationMap['01-007'],
      stationMap['01-011'],
      stationMap['01-011'],
    ],
  }),
  new Train({
    id: 'C502',
    train_number: 'C502',
    start: stationMap['01-011'],
    end: stationMap['01-005'],
    color: 'red',
    times: [520, 525, 530, 535],
    stations: [
      stationMap['01-011'],
      stationMap['01-007'],
      stationMap['01-006'],
      stationMap['01-005'],
    ],
  }),
]
