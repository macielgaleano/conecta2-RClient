import React, { useState, useEffect } from "react";
import "./profile.css";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../navbar/Navbar";
import useFetchProfile from "../../hooks/useFetchProfile";

const Profile = () => {
  const { username } = useParams();
  let user = useFetchProfile(username);

  return (
    <div className="profile-box">
      <Navbar></Navbar>
      <div className="container">
        <div className="row d-flex justify-content-center ">
          <div className="col-3 col-md-4 col-sm-4">
            <img className="img-fluid" src={user && user[1].avatar} alt="" />
          </div>
          <div className="col-md-8 col-sm-8 col-8">
            <h1 className="username-head">{user && user[1].username}</h1>
            <div className="user-name">
              {user && user[1].name} {user && user[1].lastname}
            </div>
            <p className="user-description">"{user && user[1].description} "</p>
          </div>
        </div>
      </div>
      <div className="svg-border-rounded text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg "
          viewBox="0 0 144.54 17.34 "
          preserveAspectRatio="none "
          fill="currentColor "
        >
          <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0 " />
        </svg>
      </div>
    </div>
  );
};
export default Profile;
