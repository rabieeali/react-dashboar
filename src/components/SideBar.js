import React from "react";

const SideBar = () => {
  const utilities = [
    { text: "داشبورد", icon: "fa-home" },
    { text: "پیام ها", icon: "fa-comment-dots" },
    { text: "کاربران", icon: "fa-user-group" },
    { text: "گزارش ها", icon: "fa-chart-pie" },
    { text: "تنظیمات", icon: "fa-gear" },
  ];

  return (
    <div className="bg-primary p-2 vh-100">
      <img
        className="img-fluid m-auto"
        src={require("../img/logo.png")}
        alt="logo"
      />
      <ul className=" mt-5 list-unstyled d-flex flex-column text-center">
        {utilities.map((util,index) => (
          <li key={index} className="my-2">
            <span
              className="text-white
                sidebar-li-hover
                cursor-pointer
                d-flex 
                justify-content-evenly
                
                align-items-center"
            >
              <i className={`fas ${util.icon}`}></i>
              <p className="pt-2">{util.text}</p>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
