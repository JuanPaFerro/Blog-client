import React from "react";
import { useParams } from "react-router-dom";
import { useGetOnePostById } from "../../hooks/useGetOnePostById";

const PostDetail = () => {
  const { id } = useParams();
  const { post } = useGetOnePostById(id);

  return (
    <div>
      <h1>{post[0] && post[0].title}</h1>
      <span>{post[0] && post[0].user[0].username}</span>
      <p>{post[0] && post[0].desc}</p>
    </div>
  );
};

export default PostDetail;
