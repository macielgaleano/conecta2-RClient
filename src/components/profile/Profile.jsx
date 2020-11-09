import React, { useState } from "react";
import UseFetchProfile from "../../hooks/useFetchProfile";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./profile.css";

const Profile = () => {
  const { username } = useParams();
  const profileData = UseFetchProfile(username);
  console.log(profileData);
  console.log(username);

  return (
    <div>
      <div className="profile-box">
        <div className="container">
          <div className="row d-flex justify-content-center ">
            <div className="col-3 col-md-2 col-sm-3">
              <img className="img-fluid" src={profileData[1].avatar} alt="" />
            </div>
            <div className="col-md-7 col-sm-9 col-9">
              <h1 className="username-head">{profileData[1].username}</h1>
              <div className="user-name">
                {profileData[1].name}+ ' ' + {profileData[1].lastname}
                {/*  if (req.user){
             if (req.user.username !== user.username){
               if (follow_question.length == 0)
                <a name="" id="" className="ml-3 btn btn-secondary" href="/usuario/<%-user.username%>/seguir" role="button">Seguir</a>
            } 
               if (follow_question.length > 0){
                <a name="" id="" className="ml-3 btn btn-warning" href="/usuario/<%-user.username%>/dejarseguir" role="button">Dejar de seguir</a>
               } 
            } 
          } */}
              </div>
              <p className="user-description">"{profileData.description} "</p>
              {/*  <div className="account-info">
          <small className="followers"><i className="fas fa-users"></i> Seguidores: <spam className="followers-count"> <%-  user.list_users_followers.length
            </spam></small>
          <small className="following">Seguidos: <spam className="followings-count"> <%-  user.list_users_following.length
           </spam></small>
          <small className='email' ><i className=""></i><a className='email' href=""><i className="far fa-envelope"></i> <%-  user.email %></a> </small>
        </div> */}
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
    </div>
  );
};
export default Profile;
