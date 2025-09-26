import { useState } from 'react';
import TrainDialog from '../dialog/TrainDialog';

function TrainList({ trains }) {
  const [selectedTrain, setSelectedTrain] = useState(null);

  const toggleTrain = (train) => {
    setSelectedTrain(train ? train : null);
  };

  return (
    <>
      <details>
        <summary>车次列表</summary>
        <ul>
          {trains.map((train, idx) => (
            <li 
              key={idx} 
              onClick={() => toggleTrain(train)}
              title={train.start.name + '——' + train.end.name}
            >
              {train.train_number}
            </li>
          ))}
        </ul>
      </details>
      {selectedTrain && (
        <TrainDialog 
          isOpen={!!selectedTrain}
          toggle={() => toggleTrain(null)}
          train={selectedTrain}
        />
      )}
    </>
  );
}

export default TrainList;
