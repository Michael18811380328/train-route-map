import Train from './Train'

const Trains = ({ time, trains }) => {
  return (
    <div className="trains">
      {trains.map(train => (
        <Train key={train.id} train={train} time={time} />
      ))}
    </div>
  );
};

export default Trains
