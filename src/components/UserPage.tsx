import { useSelector } from "react-redux";
import { loggedInUserSelector } from "../store/slice";

export const UserPage = () => {
  const user = useSelector(loggedInUserSelector);

  return (
    <>
      <h1>Name: {user?.name}</h1>
      <h2>Email: {user?.email}</h2>
      <h2>User id: {user?.id}</h2>
    </>
  );
};
