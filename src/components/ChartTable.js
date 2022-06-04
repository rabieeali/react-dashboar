import { useState } from "react";
import { Table, Row, Col} from "react-bootstrap";
import ModalTemplate from "./ModalTemplate";
export default function ChartTable({ show, setShow, handleClose, handleShow }) {
  const [value, setValue] = useState("افق بندرعباس");

  return (
    <Row>
      <Col md="12 m-auto">
        <Table className="rtl my-5" striped bordered hover>
          <thead>
            <tr>
              <th>شماره</th>
              <th> نام شرکت</th>
              <th>اطلاعات قرارداد</th>
              <th>اطلاعات مجوز</th>
              <th>اطلاعات درخواست</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td className="d-flex justify-content-between align-items-center">
                <p className="my-auto">{value}</p>
                <ModalTemplate
                  value={value}
                  setValue={setValue}
                  show={show}
                  setShow={setShow}
                  handleClose={handleClose}
                  handleShow={handleShow}
                />
              </td>
              <td>تست</td>
              <td>تست</td>
              <td>تست</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}
