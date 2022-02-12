import React from "react";
import { useGetAllPosts } from "../../hooks/useGetAllPosts";

const PostsList = () => {
  const { posts } = useGetAllPosts();
  return (
    <div>
      {posts.map((post) => (
        <li key={post._id}>
          <h3>{post.title}</h3>
        </li>
      ))}
    </div>
  );
};

export default PostsList;
