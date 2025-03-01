import { Train } from '../modals'
import { stationMap } from './stations'

export const trainsN = [
  // 任丘-唐山
  new Train({
    id: '30020',
    train_number: '30020',
    start: stationMap['07-001'],
    end: stationMap['02-001'],
    color: 'black',
    times: Array.from({ length: 5 }).map((_, i) => 490 + i * 10),
    stations: [
      stationMap['07-001'],
      stationMap['01-028'],
      stationMap['01-051'],
      stationMap['07-002'],
      stationMap['02-001'],
    ],
  }),
]
