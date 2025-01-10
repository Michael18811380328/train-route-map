import { useState, useCallback, useRef } from 'react'
import Stations from './components/Stations';
import Routes from './components/Routes';
import Trains from './components/Trains';

import './App.css'
import './zIndex.css'

// 初始化时间
const initTime = 490;

function App() {

  const [time, setTime] = useState(initTime);

  let timer = useRef(null);

  const start = useCallback(() => {
    console.log('start')
    timer = setInterval(() => {
      setTime(prevTime => (prevTime + 1));
    }, 1000);
  }, [time])
  
  const stop = useCallback(() => {
    console.log('stop');
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }, [timer]);

  const reset = useCallback(() => {
    console.log('reset');
    setTime(initTime);
  }, [timer]);

  return (
    <div className="app">
      <div className="map" style={{}}>
        <Stations />
        <Routes />
        <Trains time={time} />
      </div>
      <div className="settings">
        <button onClick={start}>开始</button>
        <button onClick={stop}>暂停</button>
        <button onClick={reset}>重置</button>
        <span>{`${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, '0')}`}</span>
      </div>
    </div>
  )
}

export default App

