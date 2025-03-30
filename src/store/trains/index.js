import { calculateTrains } from '../../utils'
import trainsN from './trains-n'
import { trainsK } from './trains-k'
import trainsC from './trains-c'
import trainsD from './trains-d'
import trainsG from './trains-g'

let trains = [
  ...trainsN,
  ...trainsK,
  ...trainsD,
  ...trainsC,
  ...trainsG,
];

trains = calculateTrains(trains);

export { trains };
