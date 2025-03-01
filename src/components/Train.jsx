import PropTypes from 'prop-types';

const Train = ({ train, time }) => {
  const { id, train_number, start, end, color, points } = train;

  if (!points) {
    return null;
  }

  const point = points[time];

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
  train: PropTypes.object.isRequired,
  time: PropTypes.number.isRequired,
};

export default Train;
