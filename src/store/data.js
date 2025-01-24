import cookie from 'react-cookies'
import { stations } from './stations';
import { trains } from './trains';
import { routes } from './routes';

const zoom = Number(cookie.load('map-zoom')) || 1;

const basicData = {
  width: 6000 * zoom,
  height: 4690 * zoom,
  initTime: 495,
  stations,
  trains,
  routes,
}

const beijingData = {
  ...basicData,
  name: '北京铁路枢纽',
  translateX: -4000,
  translateY: -1500,
}

const tianjinData = {
  ...basicData,
  name: '天津铁路枢纽',
  translateX: -200,
  translateY: -200,
}

const shijiazhuangData = {
  ...basicData,
  name: '石家庄铁路枢纽',
  translateX: 200,
  translateY: 0,
}

const jinanData = {
  ...basicData,
  name: '济南铁路枢纽',
  translateX: -200,
  translateY: -600,
}

const haerbinData = {
  ...basicData,
  name: '哈尔滨铁路枢纽',
  translateX: -3500,
  translateY: -500,
}

export { beijingData, tianjinData, shijiazhuangData, jinanData, haerbinData };
