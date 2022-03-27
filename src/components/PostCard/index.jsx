import React, { useContext } from "react";
import {
  Card,
  Img,
  CardContent,
  CardHeader,
  CardText,
  CardBtn,
  GridItemLink,
} from "../StandardCard/StandardCard";
import { Context } from "../../Context";
import { BsPencil } from "react-icons/bs";
import DefaultImage from "../../assets/post.jpg";


const PostCard = ({ cardId, cardImage, cardTitle = "", cardText = "" }) => {
  const { isAuth } = useContext(Context);
  const publicFiles = "http://localhost:5000/images/";

  return (
    <GridItemLink to={`/post/${cardId}`} style={{ textDecoration: "none" }}>
      <Card >
        <Img src={cardImage ? publicFiles+cardImage : DefaultImage} />
        <CardContent>
          <CardHeader>{cardTitle}</CardHeader>
          <CardText>{cardText}</CardText>
          {isAuth && window.sessionStorage.getItem("role") === "1" && (
            <CardBtn to={`/admin/post/${cardId}`}>
              <BsPencil />
            </CardBtn>
          )}
        </CardContent>
      </Card>
    </GridItemLink>
  );
};

export default PostCard;
