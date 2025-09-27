import { Train } from '../../modals'
import { stationMap } from '../stations'

const trainsC = []

for (let indent = 0; indent < 5; indent++) {
  trainsC.push(
    // 北京南——滨海
    new Train({
      id: `C${indent * 10 + 1}`,
      train_number: `C${indent * 10 + 1}`,
      start: stationMap['01-021'],
      end: stationMap['02-003'],
      color: 'red',
      times: Array.from({ length: 5 }).map((_, i) => 480 + indent * 16 + i * 4),
      stations: [
        stationMap['01-021'],
        stationMap['02-006'],
        stationMap['02-001'],
        stationMap['02-003'],
        stationMap['02-003'],
      ],
    }),
    new Train({
      id: `C${indent * 10 + 2}`,
      train_number: `C${indent * 10 + 2}`,
      start: stationMap['02-003'],
      end: stationMap['01-021'],
      color: 'red',
      times: Array.from({ length: 5 }).map((_, i) => 480 + indent * 16 + i * 4),
      stations: [
        stationMap['02-003'],
        stationMap['02-001'],
        stationMap['02-006'],
        stationMap['01-021'],
        stationMap['01-021'],
      ],
    }),
    // 北京南——天津
    new Train({
      id: `C${indent * 10 + 3}`,
      train_number: `C${indent * 10 + 3}`,
      start: stationMap['01-021'],
      end: stationMap['02-001'],
      color: 'red',
      times: Array.from({ length: 4 }).map((_, i) => 480 + indent * 16 + i * 4),
      stations: [
        stationMap['01-021'],
        stationMap['02-006'],
        stationMap['02-001'],
        stationMap['02-001'],
      ],
    }),
    new Train({
      id: `C${indent * 10 + 4}`,
      train_number: `C${indent * 10 + 4}`,
      start: stationMap['02-001'],
      end: stationMap['01-021'],
      color: 'red',
      times: Array.from({ length: 4 }).map((_, i) => 480 + indent * 16 + i * 4),
      stations: [
        stationMap['02-001'],
        stationMap['02-006'],
        stationMap['01-021'],
        stationMap['01-021'],
      ],
    }),
    // 上海南京往返
    new Train({
      id: `C${indent * 10 + 5}`,
      train_number: `C${indent * 10 + 5}`,
      start: stationMap['20-001'],
      end: stationMap['15-001'],
      color: 'red',
      times: Array.from({ length: 8 }).map((_, i) => 480 + indent * 16 + i * 4),
      stations: [
        stationMap['20-001'],
        stationMap['20-002'],
        stationMap['15-006'],
        stationMap['15-005'],
        stationMap['15-004'],
        stationMap['15-003'],
        stationMap['15-002'],
        stationMap['15-001'],
      ],
    }),
    new Train({
      id: `C${indent * 10 + 6}`,
      train_number: `C${indent * 10 + 6}`,
      start: stationMap['15-001'],
      end: stationMap['20-001'],
      color: 'red',
      times: Array.from({ length: 8 }).map((_, i) => 480 + indent * 16 + i * 4),
      stations: [
        stationMap['15-001'],
        stationMap['15-002'],
        stationMap['15-003'],
        stationMap['15-004'],
        stationMap['15-005'],
        stationMap['15-006'],
        stationMap['20-002'],
        stationMap['20-001'],
      ],
    }),
  )
}

export default trainsC;
