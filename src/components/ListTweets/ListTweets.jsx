import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import useFetchAllTweets from "../../hooks/useFetchAllTweets";

export default function ListTweets() {
  let tweets = useFetchAllTweets();
  console.log(tweets);

  return (
    <div>
      <div className="comtainer mt-5">
        <div className="row"></div>
      </div>
    </div>
  );
}
