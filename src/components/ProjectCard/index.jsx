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
          {isAuth && (window.sessionStorage.getItem("role") && <CardBtn>Editar</CardBtn> ) }
        </CardContent>
      </Card>
    </GridItem>
  );
};

export default ProjectCard;
