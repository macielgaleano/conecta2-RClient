import React from "react";
import Navbar from "../navbar/Navbar";
import ListTweets from "../ListTweets/ListTweets";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <ListTweets></ListTweets>
    </div>
  );
}
