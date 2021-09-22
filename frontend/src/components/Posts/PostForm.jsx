import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { addPost } from "../../reducks/posts/operations";

const PostForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState(""),
    [body, setBody] = useState(""),
    [image, setImage] = useState([]);

  const inputName = (event) => {
    setName(event.target.value);
  };

  const inputBody = (event) => {
    setBody(event.target.value);
  };

  const inputImage = (event) => {
    setImage(event.target.files[0]);
  };

  const addPostButton = () => {
    dispatch(addPost(name, body, image));
    setName("");
    setImage([]);
    setBody("");
  };

  return (
    <section class="post_form">
      <input type="text" name="name" placeholder="Name" onChange={inputName} required />
      <textarea name="body" placeholder="Tell us anything" onChange={inputBody} required></textarea>
      <input name="image" type="file" onChange={inputImage} />
      <input type="submit" value="Post" onClick={addPostButton} />
    </section>
  );
};

export default PostForm;
