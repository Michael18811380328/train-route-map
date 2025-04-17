import PropTypes from 'prop-types';

const Train = ({ train, time }) => {
  const { id, train_number, start, end, color = 'black', points } = train;

  if (!Array.isArray(points) || points.length === 0) {
    return null;
  }

  const point = (time >= 0 && time < points.length) ? points[time] : null;

  if (!point) {
    return null;
  }

  return (
    <div id={id} className="train" style={{ left: point.x, top: point.y, color }}>
      <div>{train_number}</div>
      <div>{start.name}-{end.name}</div>
    </div>
  );
};

Train.propTypes = {
  train: PropTypes.shape({
    id: PropTypes.string.isRequired,
    train_number: PropTypes.string.isRequired,
    start: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    end: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    color: PropTypes.string,
    points: PropTypes.arrayOf(
      PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
  time: PropTypes.number.isRequired,
};

export default Train;
