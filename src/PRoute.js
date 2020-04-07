import React from 'react';  
import { Redirect, Route } from 'react-router-dom';


const auth = () => {
    var dat= localStorage.getItem('SID');
    if(dat=='1')
      return null;
};

const PrivateRoute = ({ component: Component, ...rest }) => (  
  <Route {...rest} render={props => (
    auth() == null ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login"
      />
    )
  )} />
);

export default PrivateRoute;  