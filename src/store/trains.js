import { Train } from '../modals'
import { calculateTrains } from '../utils'
import { stationMap } from './stations'
import { trainsD } from './trains-d'
import { trainsK } from './trains-k'
import { trainsN } from './trains-n'
import { trainsG } from './trains-g'
import { trainsC } from './trains-c'

let trains = []

// 高等级车辆可以覆盖低等级车辆路线
trains.push(
  ...trainsN,
  ...trainsK,
  ...trainsD,
  ...trainsC,
  ...trainsG,
);

trains = calculateTrains(trains);

export { trains };
