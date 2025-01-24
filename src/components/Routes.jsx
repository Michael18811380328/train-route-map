const Routes = ({ routes }) => {
  return (
    <>
      {routes.map(route => 
        route.lines.map(line => {
          const { x1, y1, x2, y2, angle, length } = line;
          return (
            <div
              title={route.name}
              key={`${x1}-${y1}-${x2}-${y2}`}
              className="line"
              // 看一下能否把名称写到 div 侧边，判断 line.index 是奇数还是偶数，然后写到旁边
              // 主要是高铁和普快的间隔不一样，怎么区分一下
              // 如果是黑色，那么就是普快，如果是蓝色，那么就是高铁，黑色站点间隔太小了
              // 可以根据不同缩放比例，进行设置名称：
              // 高铁可以全部显示
              // 普通线路在高放大倍率下显示路线名称
              style={{
                top: `${y1}px`,
                left: `${x1}px`,
                width: `${length}px`,
                backgroundColor: route.color,
                transform: `rotate(${angle}deg)`,
                transformOrigin: 'left top', // 基于左上角旋转
              }}
            >
            </div>
          )
        })
      )}
    </>
  );
};

export default Routes;
