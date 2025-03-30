import { useState, useCallback, useRef } from 'react'
import cookie from 'react-cookies'
import Stations from './components/Stations';
import Routes from './components/Routes';
import Trains from './components/Trains';
import AddTrain from './components/Add-Train';
import { beijingData, tianjinData, shijiazhuangData, jinanData, haerbinData } from './store/data';
import mapImage from '/media/map.jpg';

import './App.css'
import './zIndex.css'

const datas = [
  beijingData,
  tianjinData,
  shijiazhuangData,
  jinanData,
  haerbinData
];

const defaultData = datas[0];

function App() {

  let [time, setTime] = useState(defaultData.initTime || 0);

  let timer = useRef(null);

  const startMusic = useCallback(() => {
    let audio = document.querySelector('audio');
    audio.play();
  }, []);

  const start = useCallback(() => {
    startMusic();
    if (!timer.current) {
      timer.current = setInterval(() => {
        setTime(prevTime => (prevTime + 1));
      }, 1000);
    }
  }, [timer, startMusic]);
  
  const stop = useCallback(() => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  }, [timer]);

  const reset = useCallback(() => {
    stop();
    setTime(defaultData.initTime || 0);
  }, [stop]);

  const clickMap = useCallback((event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const clickPoint = `x: ${x}, y: ${y}`;
    if (x < 100 && y < 100) return;
    console.log(clickPoint);
  }, []);

  const zoomIn = useCallback(() => {
    let zoom = Number(cookie.load('map-zoom')) || 1;
    cookie.save('map-zoom', Math.min(zoom + 0.5, 5), { path: '/' });
    window.location.reload();
  }, []);

  const zoomOut = useCallback(() => {
    let zoom = Number(cookie.load('map-zoom')) || 1;
    cookie.save('map-zoom', Math.max(zoom - 0.5, 1), { path: '/' });
    window.location.reload();
  }, []);

  const zoomReset = useCallback(() => {
    cookie.save('map-zoom', 1, { path: '/' });
    window.location.reload();
  }, []);

  return (
    <div className="app">
      <div className="map-name">
        <h2>{'火车路线模拟图'}</h2>
        <p>{'版本: 1.1'}</p>
      </div>
      <div className="map-container">
        <div
          className="map"
          style={{
            width: defaultData.width,
            height: defaultData.height,
            transform: `translate(${defaultData.translateX}px, ${defaultData.translateY}px)`,
            backgroundImage: `url(${mapImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          onClick={clickMap}
        >
          <Stations stations={defaultData.stations} />
          <Routes routes={defaultData.routes} />
          <Trains time={time} trains={defaultData.trains}/>
        </div>
      </div>
      <div className="settings">
        <span>{`时间：${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, '0')}`}</span>
        <button onClick={start}>开始</button>
        <button onClick={stop}>暂停</button>
        <button onClick={reset}>重置</button>
        <br/>
        <span>{`缩放：${Number(cookie.load('map-zoom')) || 1}`}</span>
        <button onClick={zoomIn}>放大</button>
        <button onClick={zoomOut}>缩小</button>
        <button onClick={zoomReset}>重置</button>
        <br/>
        <audio src="/media/Alla-Figaro.mp3" loop controls autoPlay={true} />
        <AddTrain />
      </div>
      <div className="infos">
        {/* author info */}
      </div>
    </div>
  )
}

export default App
