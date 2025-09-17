import React from 'react'
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


export default function Home() {
  const location = useLocation();
  const { user_name,user_password,stateName } = location.state || {};

  if (user_name && user_password && stateName) {
  const user = {
    userName: user_name,
    password: user_password,
    state_name: stateName
  };
  localStorage.setItem("user", JSON.stringify(user));
}

  if(!user_name || !user_password || !stateName){
    return <Navigate to="/signup" replace />;
  }
  else{
    return <Navigate to="/home/Content" replace />;
  }
}
 