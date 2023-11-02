import React, { Fragment } from "react";
import { GetAuthSelector } from "../redux/selectors";
import authServices from "../services/authServices";
import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({ isAdmin, element: Component, ...rest }) => {
  const auth = GetAuthSelector();
  const { isLogin } = auth;
  return (
    <Fragment>
      <Route
        {...rest}
        render={(props) => {
          if (isLogin === false) {
            return <Navigate to="/" />;
          }
          return <Component {...props} />;
        }}
      />
    </Fragment>
  );
};

export default PrivateRoute;
