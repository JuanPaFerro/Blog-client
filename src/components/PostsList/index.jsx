import React from "react";
import { Link } from "react-router-dom";
import { useGetAllPosts } from "../../hooks/useGetAllPosts";

const PostsList = () => {
  const { posts } = useGetAllPosts();
  return (
    <div>
      {posts.map((post) => (
        <li key={post._id}>
          <Link to={`/post/${post._id}`}>{post.title}</Link>
        </li>
      ))}
    </div>
  );
};

export default PostsList;
