import { Train } from '../modals'
import { stationMap } from './stations'

export const trainsN = [
  // 北京西——涞源
  new Train({
    id: 'N6437',
    train_number: '6437',
    start: stationMap['01-002'],
    end: stationMap['01-033'],
    color: 'black',
    times: [490, 500, 505, 510, 515, 520, 525, 530, 535, 540, 545, 550, 555, 560, 565, 570, 575, 580, 585, 590, 595, 600, 610, 615],
    stations: [
      stationMap['01-002'],
      stationMap['01-012'], // 石景山到站
      stationMap['01-012'], // 石景山出发
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
  // 任丘-唐山（货运）
  new Train({
    id: '30026',
    train_number: '30026',
    start: stationMap['03-019'],
    end: stationMap['03-003'],
    color: 'black',
    times: Array.from({ length: 8 }).map((_, i) => 490 + i * 6),
    stations: [
      stationMap['03-019'],
      stationMap['03-018'],
      stationMap['02-001'],
      stationMap['02-008'],
      stationMap['02-003'],
      stationMap['02-010'],
      stationMap['02-009'],
      stationMap['03-003'],
    ],
  }),
]
