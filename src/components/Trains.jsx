import { trains } from '../data'
import Train from './Train'

const Trains = ({ time }) => {
  return (
    <div className="trains">
      {trains.map(train => (
        <Train key={train.id} train={train} time={time} />
      ))}
    </div>
  );
};

export default Trains
