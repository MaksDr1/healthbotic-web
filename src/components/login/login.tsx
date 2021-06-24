import React, { useCallback, useEffect } from "react";
import loginImg from "../../components/login/login.svg";
import { useDispatch, useSelector } from "react-redux";
import { addUser, tryLogin, usersSelector } from "../../store/slice";
import {
  getPatientsThunk,
  initializeData,
  loginThunk,
} from "../../store/thunks";
import ReduxThunk from "redux-thunk";
import { Register } from "../../utils/WebUtils"; // no changes here 😀
import { Login as APILogin } from "../../utils/WebUtils"; // no changes here 😀

export const Login = (props: any) => {
  const dispatch = useDispatch();
  const handleLogin = useCallback(() => {
    const name = (document.getElementById("username") as any)?.value;
    const password = (document.getElementById("password") as any)?.value;
    dispatch(loginThunk({ email: name, password }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(initializeData());
  }, [dispatch]);

  return (
    <div className="base-container" ref={props.containerRef}>
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Id</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="password"
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};
