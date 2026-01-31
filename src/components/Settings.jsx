import { useCallback } from 'react';
import Cookies from 'js-cookie';
import { Button } from 'reactstrap';
import AddTrain from './Add-Train';
import AddStation from './Add-Station';

const Settings = ({
  time,
  start,
  stop,
  reset,
  importData,
  exportData,
}) => {

  const zoomIn = useCallback(() => {
    let zoom = Number(Cookies.get('map-zoom')) || 1;
    Cookies.set('map-zoom', Math.min(zoom + 0.5, 5), { path: '/' });
    window.location.reload();
  }, []);

  const zoomOut = useCallback(() => {
    let zoom = Number(Cookies.get('map-zoom')) || 1;
    Cookies.set('map-zoom', Math.max(zoom - 0.5, 1), { path: '/' });
    window.location.reload();
  }, []);

  const zoomReset = useCallback(() => {
    Cookies.set('map-zoom', 1, { path: '/' });
    window.location.reload();
  }, []);

  return (
    <div className="settings">
      <span>{`时间：${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, '0')}`}</span>
      <button onClick={() => { start(); }}>开始</button>
      <button onClick={stop}>暂停</button>
      <button onClick={reset}>重置</button>
      <br/>
      <span>{`缩放：${Number(Cookies.get('map-zoom')) || 1}`}</span>
      <button onClick={zoomIn}>放大</button>
      <button onClick={zoomOut}>缩小</button>
      <button onClick={zoomReset}>重置</button>
      <br/>
      <audio src="/media/Alla-Figaro.mp3" loop controls autoPlay={false} />
      <br/>
      {/* <button onClick={importData}>导入</button> */}
      <AddTrain />
      <AddStation />
      <Button color="primary" onClick={exportData} style={{ marginLeft: '10px' }}>导出数据</Button>
    </div>
  );
};

export default Settings;
