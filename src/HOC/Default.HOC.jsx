import { Route, Routes } from "react-router-dom";



const DefaultHOC = ({ component: Component, ...rest }) => {
  return (
    <>
      <Routes>
        <Route
          {...rest}
          component={(props) => (
            <DefaultHOC>
              <Component {...props} />
            </DefaultHOC>
          )}
        />
      </Routes>
    </>
  );
};

export default DefaultHOC;
