import { calculateTrains } from '../utils'
import { trainsD } from './trains-d'
import { trainsK } from './trains-k'
import { trainsN } from './trains-n'
import { trainsG } from './trains-g'
import { trainsC } from './trains-c'

let trains = []

trains.push(
  ...trainsN,
  ...trainsK,
  ...trainsD,
  ...trainsC,
  ...trainsG,
);

trains = calculateTrains(trains);

export { trains };
