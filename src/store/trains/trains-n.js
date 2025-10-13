import { Train } from '../../modals'
import { stationMap } from '../stations'

let trainsN = [];

for (let indent = 0; indent < 5; indent++) {
  trainsN.push(
    // 任丘-唐山
    new Train({
      id: `${30000 + indent}`,
      train_number: `${30000 + indent}`,
      start: stationMap['06-012'],
      end: stationMap['06-006'],
      color: 'black',
      times: Array.from({ length: 6 }).map((_, i) => 480 + indent * 30 + i * 10),
      stations: [
        stationMap['06-012'],
        stationMap['06-013'],
        stationMap['06-030'],
        stationMap['02-001'],
        stationMap['02-005'],
        stationMap['06-006'],
      ],
    }),
    // 唐山-任丘
    new Train({
      id: `${30010 + indent}`,
      train_number: `${30010 + indent}`,
      start: stationMap['06-006'],
      end: stationMap['06-012'],
      color: 'black',
      times: Array.from({ length: 6 }).map((_, i) => 490 + indent * 30 + i * 10),
      stations: [
        stationMap['06-006'],
        stationMap['02-005'],
        stationMap['02-001'],
        stationMap['06-030'],
        stationMap['06-013'],
        stationMap['06-012'],
      ],
    }),
    // 沈阳南-大连
    new Train({
      id: `${30030 + indent}`,
      train_number: `${30030 + indent}`,
      start: stationMap['05-015'],
      end: stationMap['05-036'],
      color: 'black',
      times: Array.from({ length: 9 }).map((_, i) => 480 + indent * 30 + i * 10),
      stations: [
        stationMap['05-015'],
        stationMap['05-039'],
        stationMap['05-040'],
        stationMap['05-041'],
        stationMap['05-042'],
        stationMap['05-043'],
        stationMap['05-044'],
        stationMap['05-045'],
        stationMap['05-036'],
      ],
    }),
    // 大连-沈阳南
    new Train({
      id: `${30040 + indent}`,
      train_number: `${30040 + indent}`,
      start: stationMap['05-036'],
      end: stationMap['05-015'],
      color: 'black',
      times: Array.from({ length: 9 }).map((_, i) => 490 + indent * 30 + i * 10),
      stations: [
        stationMap['05-036'],
        stationMap['05-045'],
        stationMap['05-044'],
        stationMap['05-043'],
        stationMap['05-042'],
        stationMap['05-041'],
        stationMap['05-040'],
        stationMap['05-039'],
        stationMap['05-015'],
      ],
    }),
  )
}

export default trainsN;
