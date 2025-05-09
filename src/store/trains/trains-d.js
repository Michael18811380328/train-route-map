import { Train } from '../../modals'
import { stationMap } from '../stations'

const trainsD = [];

for (let indent = 0; indent < 5; indent++) {
  trainsD.push(
    // 北京——唐山
    new Train({
      id: `D${indent * 10 + 1}`,
      train_number: `D${indent * 10 + 1}`,
      start: stationMap['01-020'],
      end: stationMap['06-006'],
      color: 'green',
      times: Array.from({ length: 6 }).map((_, i) => 480 + indent * 20 + i * 4),
      stations: [
        stationMap['01-020'],
        stationMap['06-003'],
        stationMap['06-004'],
        stationMap['06-005'],
        stationMap['06-006'],
        stationMap['06-006'],
      ],
    }),
    new Train({
      id: `D${indent * 10 + 2}`,
      train_number: `D${indent * 10 + 2}`,
      start: stationMap['06-006'],
      end: stationMap['01-020'],
      color: 'green',
      times: Array.from({ length: 6 }).map((_, i) => 480 + indent * 20 + i * 4),
      stations: [
        stationMap['06-006'],
        stationMap['06-005'],
        stationMap['06-004'],
        stationMap['06-003'],
        stationMap['01-020'],
        stationMap['01-020'],
      ],
    }),
    // 北京——沈阳
    new Train({
      id: `D${indent * 10 + 3}`,
      train_number: `D${indent * 10 + 3}`,
      start: stationMap['01-020'],
      end: stationMap['05-014'],
      color: 'green',
      times: Array.from({ length: 18 }).map((_, i) => 480 + indent * 20 + i * 4),
      stations: [
        stationMap['01-020'],
        stationMap['06-003'],
        stationMap['06-004'],
        stationMap['06-005'],
        stationMap['06-006'],
        stationMap['06-010'],
        stationMap['06-011'],
        stationMap['06-009'],
        stationMap['05-058'],
        stationMap['05-059'],
        stationMap['05-060'],
        stationMap['05-061'],
        stationMap['05-062'],
        stationMap['05-063'],
        stationMap['05-064'],
        stationMap['05-065'],
        stationMap['05-066'],
        stationMap['05-014'],
      ],
    }),
    new Train({
      id: `D${indent * 10 + 4}`,
      train_number: `D${indent * 10 + 4}`,
      start: stationMap['05-014'],
      end: stationMap['01-020'],
      color: 'green',
      times: Array.from({ length: 18 }).map((_, i) => 480 + indent * 20 + i * 4),
      stations: [
        stationMap['05-014'],
        stationMap['05-066'],
        stationMap['05-065'],
        stationMap['05-064'],
        stationMap['05-063'],
        stationMap['05-062'],
        stationMap['05-061'],
        stationMap['05-060'],
        stationMap['05-059'],
        stationMap['05-058'],
        stationMap['06-009'],
        stationMap['06-011'],
        stationMap['06-010'],
        stationMap['06-006'],
        stationMap['06-005'],
        stationMap['06-004'],
        stationMap['06-003'],
        stationMap['01-020'],
      ],
    }),
    // 秦皇岛——沈阳
    new Train({
      id: `D${indent * 10 + 5}`,
      train_number: `D${indent * 10 + 5}`,
      start: stationMap['06-009'],
      end: stationMap['05-014'],
      color: 'green',
      times: Array.from({ length: 11 }).map((_, i) => 480 + indent * 20 + i * 4),
      stations: [
        stationMap['06-009'],
        stationMap['05-058'],
        stationMap['05-059'],
        stationMap['05-060'],
        stationMap['05-061'],
        stationMap['05-062'],
        stationMap['05-063'],
        stationMap['05-064'],
        stationMap['05-065'],
        stationMap['05-066'],
        stationMap['05-014'],
      ],
    }),
    new Train({
      id: `D${indent * 10 + 6}`,
      train_number: `D${indent * 10 + 6}`,
      start: stationMap['05-014'],
      end: stationMap['06-009'],
      color: 'green',
      times: Array.from({ length: 11 }).map((_, i) => 480 + indent * 20 + i * 4),
      stations: [
        stationMap['05-014'],
        stationMap['05-066'],
        stationMap['05-065'],
        stationMap['05-064'],
        stationMap['05-063'],
        stationMap['05-062'],
        stationMap['05-061'],
        stationMap['05-060'],
        stationMap['05-059'],
        stationMap['05-058'],
        stationMap['06-009'],
      ],
    }),
    // 长春-珲春
    new Train({
      id: `D${indent * 10 + 7}`,
      train_number: `D${indent * 10 + 7}`,
      start: stationMap['04-001'],
      end: stationMap['04-012'],
      color: 'green',
      times: Array.from({ length: 10 }).map((_, i) => 480 + indent * 20 + i * 4),
      stations: [
        stationMap['04-001'],
        stationMap['04-006'],
        stationMap['04-007'],
        stationMap['04-008'],
        stationMap['04-013'],
        stationMap['04-014'],
        stationMap['04-009'],
        stationMap['04-010'],
        stationMap['04-011'],
        stationMap['04-012'],
      ],
    }),
    new Train({
      id: `D${indent * 10 + 8}`,
      train_number: `D${indent * 10 + 8}`,
      start: stationMap['04-012'],
      end: stationMap['04-001'],
      color: 'green',
      times: Array.from({ length: 10 }).map((_, i) => 480 + indent * 20 + i * 4),
      stations: [
        stationMap['04-012'],
        stationMap['04-011'],
        stationMap['04-010'],
        stationMap['04-009'],
        stationMap['04-014'],
        stationMap['04-013'],
        stationMap['04-008'],
        stationMap['04-007'],
        stationMap['04-006'],
        stationMap['04-001'],
      ],
    }),
    // 太原-大同
    new Train({
      id: `D${indent * 10 + 9}`,
      train_number: `D${indent * 10 + 9}`,
      start: stationMap['10-003'],
      end: stationMap['10-004'],
      color: 'green',
      times: Array.from({ length: 7 }).map((_, i) => 480 + indent * 20 + i * 4),
      stations: [
        stationMap['10-003'],
        stationMap['10-007'],
        stationMap['10-013'],
        stationMap['10-016'],
        stationMap['10-008'],
        stationMap['10-015'],
        stationMap['10-004'],
      ],
    }),
    new Train({
      id: `D${indent * 10 + 10}`,
      train_number: `D${indent * 10 + 10}`,
      start: stationMap['10-004'],
      end: stationMap['10-003'],
      color: 'green',
      times: Array.from({ length: 7 }).map((_, i) => 480 + indent * 20 + i * 4),
      stations: [
        stationMap['10-004'],
        stationMap['10-015'],
        stationMap['10-008'],
        stationMap['10-016'],
        stationMap['10-013'],
        stationMap['10-007'],
        stationMap['10-003'],
      ],
    }),
  )
}

export default trainsD;

