import cookie from 'react-cookies'
import { stations } from './stations';
import { trains } from './trains';
import { routes } from './routes';

const zoom = Number(cookie.load('map-zoom')) || 1;

const basicData = {
  width: 1200 * zoom,
  height: 600 * zoom,
  initTime: 495,
  stations,
  trains,
  routes,
}

const beijingData = {
  ...basicData,
  name: '北京铁路枢纽',
  translateX: 0,
  translateY: 0,
}

const tianjinData = {
  ...basicData,
  name: '天津铁路枢纽',
  translateX: -200,
  translateY: -200,
  height: 800 * zoom,
}

const shijiazhuangData = {
  ...basicData,
  name: '石家庄铁路枢纽',
  translateX: 200,
  translateY: 0,
  height: 1200 * zoom,
}

const jinanData = {
  ...basicData,
  name: '济南铁路枢纽',
  translateX: -200,
  translateY: -600,
  width: 1500 * zoom,
  height: 1000 * zoom,
}

export { beijingData, tianjinData, shijiazhuangData, jinanData };
