import PropTypes from 'prop-types';

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
                transformOrigin: 'left top',
              }}
            >
            </div>
          )
        })
      )}
    </>
  );
};

Routes.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      lines: PropTypes.arrayOf(
        PropTypes.shape({
          x1: PropTypes.number.isRequired,
          y1: PropTypes.number.isRequired,
          x2: PropTypes.number.isRequired,
          y2: PropTypes.number.isRequired,
          angle: PropTypes.number.isRequired,
          length: PropTypes.number.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default Routes;
