import React from 'react';

const AuthLayout = ({children}) => {
  return <div className= "flex justify-center pt-40 ">{children}</div>; //wraps signin,signup and provied center padding and proper layout
};

export default AuthLayout;