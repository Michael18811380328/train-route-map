import { useState, useCallback, useRef } from 'react'
import cookie from 'react-cookies'
import Stations from './components/Stations';
import Routes from './components/Routes';
import Trains from './components/Trains';
import { beijingData, tianjinData } from './data';

import './App.css'
import './zIndex.css'

// const defaultData = tianjinData;
const defaultData = beijingData;

function App() {

  let [time, setTime] = useState(defaultData.initTime || 0);

  let timer = useRef(null);

  const start = useCallback(() => {
    if (!timer.current) {
      timer = setInterval(() => {
        setTime(prevTime => (prevTime + 1));
      }, 1000);
    }
  }, [time])
  
  const stop = useCallback(() => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }, [timer]);

  const reset = useCallback(() => {
    stop();
    setTime(defaultData.initTime || 0);
  }, [timer]);

  const clickMap = useCallback((event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log("Click map:", x, y);
  }, []);

  const zoomIn = useCallback(() => {
    let zoom = Number(cookie.load('map-zoom')) || 1;
    cookie.save('map-zoom', Math.min(zoom + 0.5, 5), { path: '/' });
    window.location.reload();
  }, []);

  const zoomOut = useCallback(() => {
    let zoom = Number(cookie.load('map-zoom')) || 1;
    cookie.save('map-zoom', Math.max(zoom - 0.5, 0.5), { path: '/' });
    window.location.reload();
  }, []);

  const zoomReset = useCallback(() => {
    cookie.save('map-zoom', 1, { path: '/' });
    window.location.reload();
  }, []);

  return (
    <div className="app">
      <h2 className="map-name">{defaultData.name}</h2>
      <div
        className="map"
        style={{
          width: defaultData.width,
          height: defaultData.height,
          transform: `translate(${defaultData.translateX}px, ${defaultData.translateY}px)`
        }}
        onClick={clickMap}
      >
        <Stations stations={defaultData.stations} />
        <Routes routes={defaultData.routes} />
        <Trains time={time} trains={defaultData.trains}/>
      </div>
      <div className="settings">
        <span>{`时间：${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, '0')}`}</span>
        <button onClick={start}>开始</button>
        <button onClick={stop}>暂停</button>
        <button onClick={reset}>重置时间</button>
        <br/>
        <span>{`缩放：${Number(cookie.load('map-zoom')) || 1}`}</span>
        <button onClick={zoomIn}>放大</button>
        <button onClick={zoomOut}>缩小</button>
        <button onClick={zoomReset}>重置缩放</button>
      </div>
      <div className="infos">
        {/* author info */}
      </div>
    </div>
  )
}

export default App

