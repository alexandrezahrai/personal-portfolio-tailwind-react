/* eslint-disable react/no-unescaped-entities */
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="container mx-auto">
      <h1 className="heading-2 max-w-[350px] lg:max-w-[500px] text-left">
        Some projects I've worked on...
      </h1>

      <hr className='mt-4 mb-12 border-t-[0.5px] border-primary-black' />

      <ProjectCard />
    </div>
  );
};

export default Projects;
