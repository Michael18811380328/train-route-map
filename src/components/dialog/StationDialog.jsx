import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

function StationDialog({ isOpen, toggle, station }) {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        {station?.name}站信息
      </ModalHeader>
      <ModalBody>
        <div>
          <p>ID: {station.id}</p>
          <p>坐标: ({station.x}, {station.y})</p>
          <p>等级: {station.size}</p>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>关闭</Button>
      </ModalFooter>
    </Modal>
  );
}

export default StationDialog;
