import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import actions from "../../redux/actions/actionTweet";

const CreateTweet = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  // const tweets = useSelector((state) => state.tweets);
  const [content, setContent] = useState("");
  const author = useSelector((state) => state.user.user[1]._id);
  function handleCreateTweet(e) {
    const url = "https://conecta2-server.vercel.app/tweets/";

    const tweet = {
      content: content,
      author: author,
    };

    axios
      .post(url, tweet, {
        headers: { Authorization: "Bearer" + { token } },
      })
      .then((res) => {
        dispatch(actions.addTweet(res.data));
      });
  }
  return (
    <div className="col-6 mx-auto">
      <h2 className="display-5 mt-2 mb-4">En que estas pensando?</h2>
      <form className="" onSubmit={(e) => handleCreateTweet(e)}>
        <label></label>
        <textarea
          className="text-area"
          name="content_text"
          rows="3"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
        <button type="submit" className="btn mt-2 btn-send btn-danger">
          Publicar
        </button>
      </form>
    </div>
  );
};

export default CreateTweet;
