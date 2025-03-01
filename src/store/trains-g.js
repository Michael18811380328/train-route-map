import { Train } from '../modals'
import { stationMap } from './stations'

export const trainsG = [
  // 北京上海往返
  new Train({
    id: 'G1',
    train_number: 'G1',
    start: stationMap['01-021'],
    end: stationMap['01-042'],
    color: 'red',
    times: Array.from({ length: 21 }).map((_, i) => 490 + i * 3),
    stations: [
      stationMap['01-021'],
      stationMap['01-028'],
      stationMap['01-029'],
      stationMap['01-030'],
      stationMap['01-031'],
      stationMap['01-032'],
      stationMap['01-033'],
      stationMap['01-034'],
      stationMap['01-036'],
      stationMap['01-037'],
      stationMap['01-038'],
      stationMap['01-039'],
      stationMap['01-040'],
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
  new Train({
    id: 'G2',
    train_number: 'G2',
    start: stationMap['01-042'],
    end: stationMap['01-021'],
    color: 'red',
    times: Array.from({ length: 21 }).map((_, i) => 493 + i * 3),
    stations: [
      stationMap['01-042'],
      stationMap['01-048'],
      stationMap['01-047'],
      stationMap['01-046'],
      stationMap['01-045'],
      stationMap['01-044'],
      stationMap['01-043'],
      stationMap['01-041'],
      stationMap['01-040'],
      stationMap['01-039'],
      stationMap['01-038'],
      stationMap['01-037'],
      stationMap['01-036'],
      stationMap['01-034'],
      stationMap['01-033'],
      stationMap['01-032'],
      stationMap['01-031'],
      stationMap['01-030'],
      stationMap['01-029'],
      stationMap['01-028'],
      stationMap['01-021'],
    ],
  }),
  new Train({
    id: 'G3',
    train_number: 'G3',
    start: stationMap['01-021'],
    end: stationMap['01-042'],
    color: 'red',
    times: Array.from({ length: 21 }).map((_, i) => 500 + i * 3),
    stations: [
      stationMap['01-021'],
      stationMap['01-028'],
      stationMap['01-029'],
      stationMap['01-030'],
      stationMap['01-031'],
      stationMap['01-032'],
      stationMap['01-033'],
      stationMap['01-034'],
      stationMap['01-036'],
      stationMap['01-037'],
      stationMap['01-038'],
      stationMap['01-039'],
      stationMap['01-040'],
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
  new Train({
    id: 'G4',
    train_number: 'G4',
    start: stationMap['01-042'],
    end: stationMap['01-021'],
    color: 'red',
    times: Array.from({ length: 21 }).map((_, i) => 503 + i * 3),
    stations: [
      stationMap['01-042'],
      stationMap['01-048'],
      stationMap['01-047'],
      stationMap['01-046'],
      stationMap['01-045'],
      stationMap['01-044'],
      stationMap['01-043'],
      stationMap['01-041'],
      stationMap['01-040'],
      stationMap['01-039'],
      stationMap['01-038'],
      stationMap['01-037'],
      stationMap['01-036'],
      stationMap['01-034'],
      stationMap['01-033'],
      stationMap['01-032'],
      stationMap['01-031'],
      stationMap['01-030'],
      stationMap['01-029'],
      stationMap['01-028'],
      stationMap['01-021'],
    ],
  }),
  new Train({
    id: 'G5',
    train_number: 'G5',
    start: stationMap['01-023'],
    end: stationMap['06-031'],
    color: 'red',
    times: Array.from({ length: 21 }).map((_, i) => 510 + i * 3),
    stations: [
      stationMap['01-023'],
      stationMap['06-025'],
      stationMap['06-026'],
      stationMap['06-027'],
      stationMap['06-028'],
      stationMap['06-029'],
      stationMap['06-024'],
      stationMap['06-032'],
      stationMap['06-033'],
      stationMap['06-034'],
      stationMap['06-035'],
      stationMap['06-036'],
      stationMap['06-037'],
      stationMap['06-030'],
      stationMap['06-038'],
      stationMap['06-039'],
      stationMap['06-040'],
      stationMap['06-041'],
      stationMap['06-042'],
      stationMap['06-043'],
      stationMap['06-031'],
    ],
  }),
  new Train({
    id: 'G6',
    train_number: 'G6',
    start: stationMap['06-031'],
    end: stationMap['01-023'],
    color: 'red',
    times: Array.from({ length: 21 }).map((_, i) => 513 + i * 3),
    stations: [
      stationMap['06-031'],
      stationMap['06-043'],
      stationMap['06-042'],
      stationMap['06-041'],
      stationMap['06-040'],
      stationMap['06-039'],
      stationMap['06-038'],
      stationMap['06-030'],
      stationMap['06-037'],
      stationMap['06-036'],
      stationMap['06-035'],
      stationMap['06-034'],
      stationMap['06-033'],
      stationMap['06-032'],
      stationMap['06-024'],
      stationMap['06-029'],
      stationMap['06-028'],
      stationMap['06-027'],
      stationMap['06-026'],
      stationMap['06-025'],
      stationMap['01-023'],
    ],
  }),
  // 北京西-石家庄
  new Train({
    id: 'G7',
    train_number: 'G7',
    start: stationMap['01-022'],
    end: stationMap['06-024'],
    color: 'red',
    times: Array.from({ length: 7 }).map((_, i) => 490 + i * 3),
    stations: [
      stationMap['01-022'],
      stationMap['01-023'],
      stationMap['06-025'],
      stationMap['06-026'],
      stationMap['06-027'],
      stationMap['06-028'],
      stationMap['06-029'],
      stationMap['06-024'],
    ],
  }),
  new Train({
    id: 'G8',
    train_number: 'G8',
    start: stationMap['06-024'],
    end: stationMap['01-022'],
    color: 'red',
    times: Array.from({ length: 7 }).map((_, i) => 493 + i * 3),
    stations: [
      stationMap['06-024'],
      stationMap['06-029'],
      stationMap['06-028'],
      stationMap['06-027'],
      stationMap['06-026'],
      stationMap['06-025'],
      stationMap['01-023'],
      stationMap['01-022'],
    ],
  }),

  new Train({
    id: 'G9',
    train_number: 'G9',
    start: stationMap['01-001'],
    end: stationMap['05-068'],
    color: 'red',
    times: [490, 510, 535, 540, 560, 580],
    stations: [
      stationMap['01-001'],
      stationMap['01-013'],
      stationMap['01-019'],
      stationMap['05-014'],
      stationMap['05-052'],
      stationMap['05-068'],
    ],
  }),
  new Train({
    id: 'G10',
    train_number: 'G10',
    start: stationMap['05-068'],
    end: stationMap['01-001'],
    color: 'red',
    times: [490, 510, 535, 540, 560, 580],
    stations: [
      stationMap['05-068'],
      stationMap['05-052'],
      stationMap['05-014'],
      stationMap['01-019'],
      stationMap['01-013'],
      stationMap['01-001'],
    ],
  }),
]
