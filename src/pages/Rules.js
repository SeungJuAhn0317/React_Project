import React from "react";
import "../News.css";
import Header from "../components/Header";
import img1 from "../img/rules1.png"
import img2 from "../img/rules4.png"
import img3 from "../img/rules2.png"
import img4 from "../img/rules3.png"

const Rules = () => {
  return (
    <div className="Rules">
      <Header />
      <img src={img1} className="img" />
      <img src={img2} className="img" />
      <img src={img3} className="img" />
      <img src={img4} className="img" />
    </div>
  );
};

export default Rules;
