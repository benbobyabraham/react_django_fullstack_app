import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../assets/img/loading.gif";
import PostForm from "../components/Posts/PostForm";
import Post from "../components/Posts/Post";
import { fetchPosts } from "../reducks/posts/operations";
import { getPosts } from "../reducks/posts/selectors";

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const posts = getPosts(selector);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <section class="content">
      <PostForm />
      <section class="posts">
        {posts.length > 0 ? (
          <ul>
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </ul>
        ) : (
          <div class="loading">
            <img src={Loading} class="" />
          </div>
        )}
      </section>
    </section>
  );
};

export default Home;
