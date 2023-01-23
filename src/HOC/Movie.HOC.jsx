import Movielayout from "../layouts/movie.layout.js";
import React from "react";
import { Route, Routes } from "react-router-dom";

const MoiveHOC = ({ component: Component, ...rest }) => {
  return (
    <>
      <Routes>
        <Route
          {...rest}
          component={(props) => (
            <Movielayout>
              <Component {...props} />
            </Movielayout>
          )}
        />
      </Routes>
    </>
  );
};

export default MoiveHOC;
