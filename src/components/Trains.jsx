import Train from './Train'
import PropTypes from 'prop-types';

/**
 * The Trains component renders a list of Train components.
 * It takes a time and an array of train objects as props.
 *
 * @param {number} time - The current time.
 * @param {Array} trains - The list of train objects to display.
 */
const Trains = ({ time, trains }) => {
  return (
    <div className="trains">
      {trains.map((train, index) => (
        <Train key={`${train.id}-${index}`} train={train} time={time} />
      ))}
    </div>
  );
};

Trains.propTypes = {
  time: PropTypes.number.isRequired,
  trains: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
};

export default Trains;
