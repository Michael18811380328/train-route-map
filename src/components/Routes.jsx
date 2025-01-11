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
