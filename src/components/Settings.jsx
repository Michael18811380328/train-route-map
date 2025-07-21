import { useCallback } from 'react';
import cookie from 'react-cookies';
import AddTrain from './Add-Train';

const Settings = ({
  time,
  start,
  stop,
  reset,
  importData,
  exportData,
}) => {

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
    <div className="settings">
      <span>{`时间：${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, '0')}`}</span>
      <button onClick={() => { start(); }}>开始</button>
      <button onClick={stop}>暂停</button>
      <button onClick={reset}>重置</button>
      <br/>
      <span>{`缩放：${Number(cookie.load('map-zoom')) || 1}`}</span>
      <button onClick={zoomIn}>放大</button>
      <button onClick={zoomOut}>缩小</button>
      <button onClick={zoomReset}>重置</button>
      <br/>
      <audio src="/media/Alla-Figaro.mp3" loop controls autoPlay={false} />
      <br/>
      <button onClick={exportData}>导出</button>
      {/* <button onClick={importData}>导入</button> */}
      <AddTrain />
    </div>
  );
};

export default Settings;
