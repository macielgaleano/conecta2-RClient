import React from "react";
import UseFetchUserData from "../../hooks/useFetchUserData";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Profile() {
  const profileData = UseFetchUserData("gallardo");
  console.log(profileData);

  return (
    <div className="">
      {profileData && (
        <div className="profileAvatar profile">
          <img src={profileData.avatar} alt="" />
          <Link to={"/users/" + profileData.username} className="profileUsername">
            {" "}
            @{profileData.username}{" "}
          </Link>{" "}
        </div>
      )}
    </div>
  );
}
