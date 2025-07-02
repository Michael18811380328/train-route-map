import { useEffect, useState, useCallback, useRef } from 'react'
import { defaultData } from './store/data';
import Settings from './components/Settings';
import MapContainer from './components/MapContainer';
import AppLeft from './components/App-left';

import './css/App.css'
import './css/zIndex.css'

function App() {

  let [version, setVersion] = useState('');
  let [time, setTime] = useState(defaultData.initTime || 0);

  let timer = useRef(null);
  
  // 从 package.json 中动态获取版本号
  useEffect(() => {
    fetch('/package.json')
      .then(res => res.json())
      .then(pkg => setVersion(pkg.version))
      .catch(() => setVersion('1.0'));
  }, []);

  const start = useCallback(() => {
    if (!timer.current) {
      timer.current = setInterval(() => {
        setTime(prevTime => (prevTime + 1));
      }, 1000);
    }
  }, [timer]);
  
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

  return (
    <div className="app">
      <div className="app-header">
        <h2>{'火车路线模拟图'}</h2>
      </div>
      <div className="app-body">
        <AppLeft defaultData={defaultData} />
        <div className="app-right">
          <MapContainer defaultData={defaultData} time={time} />
          <Settings time={time} start={start} stop={stop} reset={reset} />
        </div>
      </div>
      <div className="app-footer">
        <p>{`版本: ${version}`}</p>
      </div>
    </div>
  )
}

export default App
