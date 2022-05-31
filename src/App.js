import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import ChartTable from "./components/ChartTable";

function App() {
  const [inputTerm, setInputTerm] = useState([]);


  const fetchData = async (e) => {
    e.preventDefault();
  const response = await axios("http://localhost:3000/data")
  setInputTerm(response.data)
  }



  useEffect(() => {
    fetchData();
   }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-9">
            <div className="search-bar p-3">
              <div className="wrapper">
                <div className="searchBar">
                  <input
                    id="searchQueryInput"
                    type="text"
                    name="searchQueryInput"
                    placeholder="جستجو"
                  />
                  <button
                    id="searchQuerySubmit"
                    type="submit"
                    name="searchQuerySubmit"
                  >
                    <svg
                      style={{
                        width: "24px",
                        height: "24px",
                        viewBox: "0 0 24 24",
                      }}
                    >
                      <path
                        fill="#666666"
                        d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-6 m-auto">
              <Form className="rtl">
                <Form.Group
                  className="mb-3 text-end"
                  controlId="formBasicEmail"
                >
                  <Form.Label>شناسه ملی شرکت</Form.Label>
                  <Form.Control
                    // onChange={(e) => setInputTerm(e.target.value)}
                    type="text"
                  />
                </Form.Group>

                <Button
                  onClick={(e)=>fetchData(e)}
                  className=""
                  variant="primary"
                  type="submit"
                >
                  تایید
                </Button>
              </Form>
            </div>
            <div>
              <ChartTable inputTerm={inputTerm} setInputTerm={setInputTerm} />
            </div>
          </div>
          <div className="col-3">
            <div className="header">
              <div className="side-nav">
                <span className="logo">
                  <img className="logo-img" src={require("./img/logo.png")} />
                  <img
                    src={require("./img/logo-sm.jpg")}
                    className="logo-icon"
                    alt="logo"
                  />
                </span>
                <ul className="nav-links">
                  <li>
                    <span>
                      <i className="fas fa-home"></i>
                      <p className="">داشبورد</p>
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-comment-dots"></i>
                      <p>پیام ها</p>
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-user-group"></i>
                      <p>کاربران</p>
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-chart-pie"></i>
                      <p>گزارش ها</p>
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-gear"></i>
                      <p>تنظیمات</p>
                    </span>
                  </li>
                  <div className="active"></div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
