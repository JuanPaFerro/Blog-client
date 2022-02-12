import React from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();

  return <div>PostDetail</div>;
};

export default PostDetail;
