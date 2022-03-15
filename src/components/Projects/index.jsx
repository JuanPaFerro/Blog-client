import React from "react";
import { Grid } from "./Projects";
import ProjectCard from "../ProjectCard";
import { useGetAllProjects } from "../../hooks/useGetAllProjects";

const Projects = () => {
  const { projects, loading } = useGetAllProjects();

  return (
    <Grid>
      {loading
        ? "loading"
        : projects.map((project) => (
            <ProjectCard
              key={project._id}
              cardId={project._id}
              cardImage={project.image}
              cardTitle={project.title}
              cardText={project.content}
            />
          ))}
    </Grid>
  );
};

export default Projects;
