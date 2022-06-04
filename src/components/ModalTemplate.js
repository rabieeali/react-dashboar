import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";

const ModalTemplate = ({
  show,
  setShow,
  handleClose,
  handleShow,
  value,
  setValue,
}) => {
  const [editModal, setEditModal] = useState("");

  function editSubmitHandler(e) {
    e.preventDefault();
    setValue(editModal);
    handleClose()
  }


  return (
    <>
      <i onClick={handleShow} className="fa fa-edit cursor-pointer"></i>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="ms-auto">ویرایش اطلاعات</Modal.Title>
        </Modal.Header>
        <Modal.Body className="rtl">
          <Form autoComplete="off" >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-secondary">
                ویرایش نام شرکت
              </Form.Label>
              <Form.Control
                onChange={(e) => setEditModal(e.target.value)}
                type="text"
                placeholder={value}
                // defaultValue={value}
              />
            </Form.Group>
            <Button onClick={(e) => editSubmitHandler(e)} className="w-100" variant="primary">
            ثبت
          </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalTemplate;
