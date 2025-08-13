import { useEffect, useState, useCallback, useRef } from 'react'
import cookie from 'react-cookies';
import { defaultData } from './store/data';
import Settings from './components/Settings';
import MapContainer from './components/MapContainer';
import AppLeft from './components/App-left';
import { isMobile } from './utils';

import './css/App.css'
import './css/App-mobile.css'
import './css/zIndex.css'

function App() {
  let [version, setVersion] = useState('');
  let [time, setTime] = useState(defaultData.initTime || 0);

  let timer = useRef(null);
  let appRightRef = useRef(null);

  // 从 package.json 中动态获取版本号
  useEffect(() => {
    fetch('/package.json')
      .then(res => res.json())
      .then(pkg => setVersion(pkg.version))
      .catch((e) => {
        console.log('获取版本号失败', e);
        setVersion('1.0')
      });
  }, []);

  // 移动端只支持预览，不显示设置栏，自动启动
  useEffect(() => {
    if (isMobile()) {
      start();
    }
  }, []);

  useEffect(() => {
    if (appRightRef.current) {
      let zoom = Number(cookie.load('map-zoom')) || 1;
      appRightRef.current.scrollTo({
        left: defaultData.translateX * zoom,
        top: defaultData.translateY * zoom,
        behavior: 'smooth'
      });
    }
  }, [defaultData.translateX, defaultData.translateY]);

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

  const exportData = () => {
    // TODO: 目前导出的是全局站点，未来支持导出其他类型数据
    const dataStr = JSON.stringify(defaultData.stations, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'stations.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // TODO：从本地上传 JSON 文件，并验证数据有效性，然后可以导入数据库，或者显示在界面上
  // const importData = () => {
  // }

  return (
    <div className="app">
      <div className="app-header">
        <h2>{'火车路线模拟图'}</h2>
      </div>
      <div className="app-body">
        <AppLeft defaultData={defaultData} />
        <div
          className="app-right"
          ref={appRightRef}
        >
          <MapContainer defaultData={defaultData} time={time} />
          <Settings
            time={time}
            start={start}
            stop={stop}
            reset={reset}
            // importData={importData}
            exportData={exportData}
          />
        </div>
      </div>
      <div className="app-footer">
        <p>{`版本: ${version}`}</p>
      </div>
    </div>
  )
}

export default App
