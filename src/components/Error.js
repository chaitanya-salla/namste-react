import { useRouteError } from "react-router-dom";

const Error = () => {
  const arr = useRouteError();
  console.log(arr);
  return <h1>Opps... !</h1>;
};

export default Error;
