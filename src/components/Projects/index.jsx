import React from 'react'
import { Grid } from './Projects'
import ProjectCard from '../ProjectCard'

const Projects = () => {
  return (
    <Grid>
        {[1,2,3,4,5].map(card=> <ProjectCard/>)}
    </Grid>
  )
}

export default Projects