import Train from './Train'
import PropTypes from 'prop-types';

const Trains = ({ time, trains }) => {
  return (
    <div className="trains">
      {trains.map(train => (
        <Train key={train.id} train={train} time={time} />
      ))}
    </div>
  );
};

Trains.propTypes = {
  time: PropTypes.number.isRequired,
  trains: PropTypes.array.isRequired,
};

export default Trains;
