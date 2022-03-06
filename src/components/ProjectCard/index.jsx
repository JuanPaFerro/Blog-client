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

const ProjectCard = () => {
  return (
    <GridItem>
      <Card>
        <Img src={Image} />
        <CardContent>
          <CardHeader>Header</CardHeader>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget
            nunc lobortis mattis aliquam faucibus.{" "}
          </CardText>
          <CardBtn>
            Explore <span>&rarr;</span>
          </CardBtn>
        </CardContent>
      </Card>
    </GridItem>
  );
};

export default ProjectCard;
