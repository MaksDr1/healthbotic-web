import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LoginRegister from "./components/login/App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, createStore } from "redux";
import { healthBoticReducer } from "./store/slice";
import { Provider } from "react-redux";
import { Router } from "./components/Router";
import { GET, GetPatient, GetPatients } from "./utils/WebUtils";
import thunk from "redux-thunk";
import Calendar from "./pages/MedicineSchedule/Calendar";
import AllRateChart from "./pages/AllCharts/AllRateChart";

const store = createStore(healthBoticReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    {/*<Provider store={store}>{<Router />}</Provider>*/}
    <Provider store={store}>{<AllRateChart />}</Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
