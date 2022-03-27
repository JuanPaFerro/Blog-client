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
import Image from "../../assets/tv.jpg";

const PostCard = ({ cardId, cardImage, cardTitle = "", cardText = "" }) => {
  const { isAuth } = useContext(Context);

  return (
    <GridItemLink to={`/post/${cardId}`}>
      <Card>
        <Img src={cardImage || Image} />
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
