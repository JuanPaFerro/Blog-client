import React from "react";
import { Grid } from "./Projects";
import ProjectCard from "../ProjectCard";
import { useProjects } from "../../hooks/useProjects";

const Projects = () => {
  const { projects } = useProjects();
  return (
    <Grid>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          cardImage={project.image}
          cardTitle={project.title}
          cardText={project.content}
        />
      ))}
    </Grid>
  );
};

export default Projects;
