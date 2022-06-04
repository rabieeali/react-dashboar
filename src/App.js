import { useState, useEffect } from "react";
import axios from "axios";
import ChartTable from "./components/ChartTable";
import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";
import NationalId from "./components/NationalId";

function App() {
  const URL = null;
  const [nationalId, setNationalId] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const fetchData = async () => {
  //   const response = await axios.get(URL);
  //   console.log(response);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10">
          <SearchBar />
          <div className="col-5 m-auto">
            <NationalId />
          </div>
          <ChartTable
            show={show}
            setShow={setShow}
            handleClose={handleClose}
            handleShow={handleShow}
            nationalId={nationalId}
            setNationalId={setNationalId}
          />
        </div>
        <div className="col-2">
          <SideBar />
        </div>
      </div>
    </div>
  );
}

export default App;
