import React from "react";
import {
  GridItem,
  Card,
  Img,
  CardContent,
  CardHeader,
  CardText,
  CardBtn,
} from "./ProjectCard";
import Image from "../../assets/tv.jpg";

const ProjectCard = ({ cardImage, cardTitle = "", cardText = "" }) => {
  return (
    <GridItem>
      <Card>
        <Img src={cardImage || Image} />
        <CardContent>
          <CardHeader>{cardTitle}</CardHeader>
          <CardText>{cardText}</CardText>
        </CardContent>
      </Card>
    </GridItem>
  );
};

export default ProjectCard;
