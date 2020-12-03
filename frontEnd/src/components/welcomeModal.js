import React from "react";
import { Modal, Button } from "react-bootstrap";

const WelcomeModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Title id="contained-modal-title-vcenter" className="mx-auto mt-3">
        Welcome to GameBox Center
      </Modal.Title>
      <Modal.Body>
        <p>
          Gamebox Center is a MERN stack content management app that was created
          for demonstration purposes. By clicking the button below, you are
          acknowledging that the merchandise displayed is not available for
          purchase and therefore no real contact or credit card information
          should be used in this app.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="mx-auto"
          variant="danger"
          onClick={props.onHide}
          block
        >
          Accept
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WelcomeModal;
