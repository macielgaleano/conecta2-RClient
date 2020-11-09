import React from "react";
import UseFetchUserData from "../../hooks/useFetchUserData";

export default function Profile() {
  const profileData = UseFetchUserData("gallardo");
  console.log(profileData);
  return <div></div>;
}
