import React, { useCallback } from "react";
import loginImg from "../../components/login/login.svg";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/slice";

export const Register = (props: any) => {
  const dispatch = useDispatch();
  const handleRegister = useCallback(() => {
    const name = (document.getElementById("username") as any)?.value;
    const email = (document.getElementById("email") as any)?.value;
    const password = (document.getElementById("password") as any)?.value;
    const user = { name, email, password };
    dispatch(addUser(user));
  }, [dispatch]);

  // Render
  return (
    <div className="base-container" ref={props.containerRef}>
      <div className="header">Register</div>
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
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" placeholder="email" />
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
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
};
