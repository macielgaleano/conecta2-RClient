import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import actions from "../../redux/actions/actionTweet";

const CreateTweet = (author) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const tweets = useSelector((state) => state.tweets);
  const [content, setContent] = useState("");

  function handleCreateTweet(e) {
    const url = "https://conecta2-server.vercel.app/" + "tweets/";
    e.prevent.default();
    const tweet = { content: content, author: author };

    axios
      .post(url, tweet, {
        headers: { Authorization: "Bearer" + { token } },
      })
      .then((res) => {
        dispatch(actions.addTweet(res.data));
      });
  }
  return (
    <div class="col-12">
      <form class="" method="POST" onSubmit={(e) => handleCreateTweet(e)}>
        <label for=""></label>
        <textarea class="text-area" name="content_text" rows="3"></textarea>
        <button
          name=""
          id=""
          type="submit"
          class="btn mt-2 btn-send btn-danger"
          href="#"
          role="button"
        >
          Publicar
        </button>
      </form>
    </div>
  );
};

export default CreateTweet;
