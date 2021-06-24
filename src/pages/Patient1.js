import React, { Component } from "react";
import "./Patient1.css";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import Chart from "react-apexcharts";
import Overview2 from "./Overview2";
import Overview1 from "./Overview1";
import { useSelector } from "react-redux";
import { loggedInUserPatientsSelector } from "../store/slice";

class MaximChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="600"
              height="326"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default function Patient1() {
  const patient = useSelector(loggedInUserPatientsSelector)[0];
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Patient 1</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">
                {patient?.name} {patient?.lastName}
              </span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+1 123 456 67</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>

          <div className="main__cards">
            <div className="card">
              <i className="fa fa-user-o fa-2x text-lightblue"></i>
              <div className="card_inner">
                <p className="text_primary-p">OXYGEN%</p>
                <span className="font-bold text text-title">20</span>
              </div>
            </div>

            <div className="card">
              <i className="fa fa-calendar fa-2x text-red"></i>
              <div className="card_inner">
                <p className="text_primary-p">BPM</p>
                <span className="font-bold text text-title">70</span>
              </div>
            </div>
          </div>

          <div
            className="chartContainer"
            style={{
              width: "4000px",
              height: "4000px",
            }}
          >
            <Overview1 />
          </div>
        </div>
      </div>
    </div>
  );
}
