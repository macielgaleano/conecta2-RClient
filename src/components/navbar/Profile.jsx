import React from "react";
import UseFetchUserData from "../../hooks/useFetchUserData";
import { useSelector } from "react-redux";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Profile() {
  const profileData = UseFetchUserData(useSelector((state) => state.user.user[1].author));

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
