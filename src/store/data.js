import Cookies from 'js-cookie';
import { stations, stationMap } from './stations';
import { trains } from './trains';
import { routes } from './routes';
import { generateNext } from '../utils';

const zoom = Number(Cookies.get('map-zoom')) || 1;

const defaultData = {
  width: 6000 * zoom,
  height: 4690 * zoom,
  initTime: 480,
  stations,
  trains,
  routes,
  name: '北京铁路枢纽',
  translateX: 4200,
  translateY: 1500,
}

generateNext(stationMap, routes);

export { stationMap, defaultData };
