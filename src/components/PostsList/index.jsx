import React, { useContext } from "react";
import { useGetAllPosts } from "../../hooks/useGetAllPosts";
import PostCard from "../PostCard";
import { Grid } from "../StandardCard/StandardCard";
import { Context } from "../../Context";
import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const PostsList = () => {
  const { posts } = useGetAllPosts();
  const { isAuth } = useContext(Context);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 50,
      }}
    >
      {isAuth && window.sessionStorage.getItem("role") === "1" && (
        <Link to="/admin/post/new">
          <BsPlusCircle size={50} color="#1573b6" />
        </Link>
      )}
      <Grid>
        {posts.map((post) => (
          <PostCard
            key={post._id}
            cardId={post._id}
            cardImage={post.photo}
            cardTitle={post.title}
            cardText={post.desc}
          >
            {post.title}
          </PostCard>
        ))}
      </Grid>
    </div>
  );
};

export default PostsList;
