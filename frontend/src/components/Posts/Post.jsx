import React from "react";
import IconUser from "../../assets/img/user-icon.jpg";
import IconSmallMenu from "../../assets/img/icon-small-menu.svg";
import { deletePost } from "../../reducks/posts/operations";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <li>
      <img class="menu_icon" onClick={() => setMenuToggle(!menuToggle)} src={IconSmallMenu} />
      {menuToggle && (
        <div class="menu">
          <span onClick={() => dispatch(deletePost(post.id))}>Delete</span>
        </div>
      )}
      <div class="logo">
        <img src={IconUser} />
      </div>
      <div class="name_body">
        <div class="name">{post.name}</div>
        <div class="datetime">{post.created_at}</div>
        <p>{post.body}</p>
        {post.image && (
          <a href={post.image} target="_blank">
            <img class="post-image" src={post.image} />
          </a>
        )}
      </div>
    </li>
  );
};

export default Post;
