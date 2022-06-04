import { FormControl, InputGroup, Button } from "react-bootstrap";

const NationalId = () => {
  return (
    <div className="my-5 ">
      <InputGroup className="mb-3">
        <Button variant="outline-primary" id="button-addon1">
          تایید
        </Button>
        <FormControl
          className="rtl"
          placeholder="شناسه ملی شرکت را وارد کنید"
        />
      </InputGroup>
    </div>
  );
};

export default NationalId;
