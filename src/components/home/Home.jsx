import React from "react";
import Navbar from "../navbar/Navbar";
import ListTweets from "../ListTweets/ListTweets";
import CreateTWeet from "../createTweet/CreateTweet";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <ListTweets></ListTweets>
      <CreateTWeet></CreateTWeet>
    </div>
  );
}
