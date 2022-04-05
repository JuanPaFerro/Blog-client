import React from "react";
import {
  Card,
  Img,
  CardContent,
  CardHeader,
  CardText,
  GridItemLink,
} from "../StandardCard/StandardCard";
import DefaultImage from "../../assets/post.jpg";


const PostCard = ({ cardId, cardImage, cardTitle = "", cardText = "" }) => {
  const publicFiles = "http://192.168.1.103:5000/images/";

  return (
    <GridItemLink to={`/post/${cardId}`} style={{ textDecoration: "none" }}>
      <Card >
        <Img src={cardImage ? publicFiles+cardImage : DefaultImage} />
        <CardContent>
          <CardHeader>{cardTitle}</CardHeader>
          <CardText>{cardText}</CardText>
          
        </CardContent>
      </Card>
    </GridItemLink>
  );
};

export default PostCard;
