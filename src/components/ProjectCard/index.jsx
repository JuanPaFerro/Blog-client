import React, { useContext } from "react";
import {
  GridItem,
  Card,
  Img,
  CardContent,
  CardHeader,
  CardText,
  CardBtn,
} from "../StandardCard/StandardCard";
import { Context } from "../../Context";
import { BsPencil } from "react-icons/bs";
import DefaultImage from "../../assets/project.png";

const ProjectCard = ({ cardId, cardImage, cardTitle = "", cardText = "" }) => {
  const { isAuth } = useContext(Context);
  const publicFiles = `${process.env.REACT_APP_API_URL}/images/`;

  return (
    <GridItem>
      <Card>
        <Img src={cardImage ? publicFiles + cardImage : DefaultImage} />
        <CardContent>
          <CardHeader>{cardTitle}</CardHeader>
          <CardText>{cardText}</CardText>
          {isAuth && window.sessionStorage.getItem("role") === "1" && (
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
