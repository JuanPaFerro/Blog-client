import React from "react";
import { useParams } from "react-router-dom";
import { useGetOnePostById } from "../../hooks/useGetOnePostById";

const PostDetail = () => {
  const { id } = useParams();
  const { post, loading } = useGetOnePostById(id);

  if (loading) {
    return <h1>Loading</h1>;
  }
  if (!loading) {
    return (
      <div>
        <h1>{post.title}</h1>
        <span>{post.username}</span>
        <p>{post.desc}</p>
      </div>
    );
  }
};

export default PostDetail;
