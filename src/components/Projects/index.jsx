import React, { useContext } from "react";
import { Grid } from "./Projects";
import ProjectCard from "../ProjectCard";
import { useGetAllProjects } from "../../hooks/useGetAllProjects";
import { AddButton } from "./Projects";
import { BsPlusCircle } from "react-icons/bs";
import { Context } from "../../Context";

const Projects = () => {
  const { projects, loading } = useGetAllProjects();
  const { isAuth } = useContext(Context);

  return (
    <>
      {isAuth && window.sessionStorage.getItem("role") && (
        <AddButton to="/admin/project/new">
          <BsPlusCircle size={50} color="#1573b6" />
        </AddButton>
      )}
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
    </>
  );
};

export default Projects;
