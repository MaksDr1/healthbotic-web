import { useSelector } from "react-redux";
import { loggedInUserIdSelector } from "../store/slice";
import { UserPage } from "./UserPage";
import LoginRegister from "./login/App";

export const Router = () => {
  const id = useSelector(loggedInUserIdSelector);

  return id != null ? <UserPage /> : <LoginRegister />;
};
