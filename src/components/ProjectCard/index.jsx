import React, { useContext } from "react";
import {
  GridItem,
  Card,
  Img,
  CardContent,
  CardHeader,
  CardText,
  CardBtn,
} from "./ProjectCard";
import { Context } from "../../Context";
import { BsPencil } from "react-icons/bs";

import Image from "../../assets/tv.jpg";

const ProjectCard = ({ cardId, cardImage, cardTitle = "", cardText = "" }) => {
  const { isAuth } = useContext(Context);

  return (
    <GridItem>
      <Card>
        <Img src={cardImage || Image} />
        <CardContent>
          <CardHeader>{cardTitle}</CardHeader>
          <CardText>{cardText}</CardText>
          {isAuth && window.sessionStorage.getItem("role")==="1" && (
            <CardBtn to={`admin/project/${cardId}`}>
              <BsPencil />
            </CardBtn>
          )}
        </CardContent>
      </Card>
    </GridItem>
  );
};

export default ProjectCard;
