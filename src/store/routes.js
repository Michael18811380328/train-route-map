import { Route } from '../modals'
import { calculateRoutes } from '../utils'
import { stationMap } from './stations'

let routes = [
  // 客货线路
  new Route({
    id: 4,
    name: '津蓟铁路',
    color: 'black',
    line_number: 1,
    speed: 80,
    points: [
      stationMap['02-003'],
      stationMap['02-008'],
      stationMap['02-007'],
      stationMap['02-006'],
    ],
  }),
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
    id: 6,
    name: '津山铁路',
    color: 'black',
    line_number: 2,
    speed: 120,
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
    id: 101,
    name: '津山铁路联络线',
    color: 'black',
    line_number: 2,
    speed: 80,
    points: [
      stationMap['03-010'],
      stationMap['03-094'],
      stationMap['02-007'],
      stationMap['03-092'],
      stationMap['03-003'],
      stationMap['03-093'],
      stationMap['03-005'],
    ],
  }),
  new Route({
    id: 102,
    name: '唐山铁路联络线',
    color: 'black',
    line_number: 2,
    speed: 80,
    points: [
      stationMap['03-012'],
      stationMap['03-004'],
      stationMap['03-003'],
      stationMap['03-095'],
      stationMap['02-009'],
      stationMap['02-004'],
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
      stationMap['03-034'],
      stationMap['03-035'],
      stationMap['03-036'],
      stationMap['03-037'],
      stationMap['03-038'],
      stationMap['03-039'],
      stationMap['03-040'],
      stationMap['03-041'],
      stationMap['03-042'],
      stationMap['03-043'],
      stationMap['03-044'],
      stationMap['03-045'],
      stationMap['03-046'],
      stationMap['03-058'],
      stationMap['03-059'],
      stationMap['03-060'],
      stationMap['03-061'],
      stationMap['03-062'],
      stationMap['03-063'],
      stationMap['03-064'],
      stationMap['03-065'],
      stationMap['03-066'],
      stationMap['03-067'],
      stationMap['03-068'],
      stationMap['03-069'],
      stationMap['03-070'],
      stationMap['03-071'],
      stationMap['03-072'],
      stationMap['03-073'],
      stationMap['03-074'],
    ],
  }),
  // 客运专线
  new Route({
    id: 5,
    name: '京秦铁路',
    color: 'green',
    line_number: 2,
    speed: 180,
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
    id: 13,
    name: '石济客专',
    color: 'green',
    line_number: 2,
    speed: 180,
    points: [
      stationMap['03-046'],
      stationMap['03-080'],
      stationMap['03-081'],
      stationMap['03-082'],
      stationMap['03-083'],
      stationMap['03-084'],
      stationMap['04-002'],
      stationMap['03-085'],
      stationMap['03-086'],
      stationMap['03-087'],
      stationMap['03-088'],
    ],
  }),
  // 高铁线路
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
      stationMap['03-075'],
      stationMap['04-002'],
      stationMap['04-003'],
      stationMap['04-004'],
      stationMap['04-005'],
      stationMap['04-006'],
      stationMap['04-007'],
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
    id: 1,
    name: '京津高铁',
    color: 'red',
    line_number: 2,
    speed: 350,
    points: [
      stationMap['01-001'],
      stationMap['03-002'],
      stationMap['02-001'],
      stationMap['02-003'],
      stationMap['02-011'],
      stationMap['02-004'],
      stationMap['02-005'],
    ],
  }),
  new Route({
    id: 7,
    name: '北京联络线', // 高铁可以走，速度达不到高铁
    color: 'red',
    line_number: 4,
    speed: 160,
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
  new Route({
    id: 11,
    name: '京广高铁',
    color: 'red',
    line_number: 2,
    speed: 350,
    points: [
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
  new Route({
    id: 12,
    name: '京港高铁',
    color: 'red',
    line_number: 2,
    speed: 350,
    points: [
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
  new Route({
    id: 14,
    name: '济郑高铁',
    color: 'red',
    line_number: 2,
    speed: 350,
    points: [
      stationMap['03-088'],
      stationMap['03-089'],
      stationMap['04-003'],
      stationMap['03-090'],
      stationMap['03-091'],
      stationMap['05-010'],
    ],
  }),
]

routes = calculateRoutes(routes);

export { routes };
