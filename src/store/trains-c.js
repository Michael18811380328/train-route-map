import { Train } from '../modals'
import { stationMap } from './stations'

export const trainsC = [
  // 北京南滨海往返
  new Train({
    id: 'C101',
    train_number: 'C101',
    start: stationMap['01-021'],
    end: stationMap['01-054'],
    color: 'red',
    times: [490, 493, 495, 497],
    stations: [
      stationMap['01-021'],
      stationMap['01-050'],
      stationMap['01-051'],
      stationMap['01-054'],
    ],
  }),
  new Train({
    id: 'C102',
    train_number: 'C102',
    start: stationMap['01-054'],
    end: stationMap['01-021'],
    color: 'red',
    times: [503, 506, 509, 511],
    stations: [
      stationMap['01-054'],
      stationMap['01-051'],
      stationMap['01-050'],
      stationMap['01-021'],
    ],
  }),
  // 北京南天津往返
  new Train({
    id: 'C103',
    train_number: 'C103',
    start: stationMap['01-021'],
    end: stationMap['01-051'],
    color: 'red',
    times: [503, 506, 509],
    stations: [
      stationMap['01-021'],
      stationMap['01-050'],
      stationMap['01-051'],
    ],
  }),
  new Train({
    id: 'C104',
    train_number: 'C104',
    start: stationMap['01-051'],
    end: stationMap['01-021'],
    color: 'red',
    times: [510, 514, 518],
    stations: [
      stationMap['01-051'],
      stationMap['01-050'],
      stationMap['01-021'],
    ],
  }),
  new Train({
    id: 'C105',
    train_number: 'C105',
    start: stationMap['01-042'],
    end: stationMap['01-041'],
    color: 'red',
    times: [520, 524, 528, 532, 535, 539, 543, 547],
    stations: [
      stationMap['01-042'],
      stationMap['01-048'],
      stationMap['01-047'],
      stationMap['01-046'],
      stationMap['01-045'],
      stationMap['01-044'],
      stationMap['01-043'],
      stationMap['01-041'],
    ],
  }),
  new Train({
    id: 'C106',
    train_number: 'C106',
    start: stationMap['01-041'],
    end: stationMap['01-042'],
    color: 'red',
    times: [549, 553, 557, 561, 564, 568, 572, 576],
    stations: [
      stationMap['01-041'],
      stationMap['01-043'],
      stationMap['01-044'],
      stationMap['01-045'],
      stationMap['01-046'],
      stationMap['01-047'],
      stationMap['01-048'],
      stationMap['01-042'],
    ],
  }),
]
