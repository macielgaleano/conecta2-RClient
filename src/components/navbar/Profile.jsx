import React from "react";
import { useSelector } from "react-redux";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Profile() {
  const profileData = useSelector((state) => state.user.user[1]);

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
