import { Train } from '../modals'
import { stationMap } from './stations'

export const trainsK = [
  new Train({
    id: 'K2501',
    train_number: 'K2501',
    color: 'black',
    times: Array.from({ length: 10 }).map((_, i) => 490 + i * 5),
    stations: [
      stationMap['05-058'],
      stationMap['05-059'],
      stationMap['05-060'],
      stationMap['05-061'],
      stationMap['05-062'],
      stationMap['05-063'],
      stationMap['05-064'],
      stationMap['05-065'],
      stationMap['05-066'],
      stationMap['05-067'],
    ],
    start: stationMap['05-058'],
    end: stationMap['05-067'],
  }),
]
