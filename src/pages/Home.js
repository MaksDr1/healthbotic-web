import React, { Component, Fragment, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import hello from "../components/assets/hello.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Home.css";
import "font-awesome/css/font-awesome.min.css";

// Home page
function Home() {
  // Render
  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <img src={hello} alt={"hello"} />
          <div className="main__greeting">
            <h1>Hello Eline</h1>
            <p>Welcome to your admin dashboard</p>
          </div>
        </div>
      </div>
      <div className="main__cards">
        <div className="card">
          <i className="fa fa-user-o fa-2x text-lightblue"></i>
          <div className="card_inner">
            <p className="text_primary-p">Number of Patients</p>
            <span className="font-bold text text-title">20</span>
          </div>
        </div>

        <div className="card">
          <i className="fa fa-calendar fa-2x text-red"></i>
          <div className="card_inner">
            <p className="text_primary-p">Cured Patients</p>
            <span className="font-bold text text-title">70</span>
          </div>
        </div>

        <div className="card">
          <i className="fa fa-video-camera fa-2x text-yellow"></i>
          <div className="card_inner">
            <p className="text_primary-p">Almost registered patients</p>
            <span className="font-bold text text-title">2</span>
          </div>
        </div>

        <div className="card">
          <i className="fa fa-thumbs-up fa-2x text-green"></i>
          <div className="card_inner">
            <p className="text_primary-p">Patients without smart watches</p>
            <span className="font-bold text text-title">2</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
