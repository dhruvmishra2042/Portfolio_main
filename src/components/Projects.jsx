
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import { default as blob } from "../assets/blob.svg";
import data from "../data";
import ProjectCard from "./ui/ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="projects mx-auto flex flex-col justify-center gap-12 p-4 text-center md:items-center md:justify-between lg:max-w-7xl"
    >
      <h1 className="py-10 text-3xl font-bold text-primary md:text-4xl ">
        Projects
      </h1>
      {/* RECENT PROJECTS */}
      <ProjectCard
        title="<DMishra/>"
        subtitle="Personal Portfolio"
        description="A responsive personalized port-folio crafted for mastering Front-end tech stacks . This dynamic endeavor seamlessly integrates various technologies"
        picture={p4}
        github=""
        website=""
        tools={data.project3}
      />
      <ProjectCard
        title="FUDO"
        subtitle="Food Delivery web Application"
        description="FUDO  is a food delivery web application. This dynamic endeavor seamlessly integrates various frontend tech stacks."
        picture={p3}
        github="https://github.com/dhruvmishra2042/Fudo"
        website=""
        tools={data.project2}
        isImageOnLeft={true}
      />
      <ProjectCard
        title="Dhruv's IMDb"
        subtitle="Cloned IMDb web application"
        description="Created a responsive clone of IMDb web application using reactjs , using function based react component tried to
        implement the concept of shadowing for realtime loading experience.This dynamic endeavor seamlessly integrates various frontend tech stacks"
        picture={p5}
        github="https://github.com/dhruvmishra2042/imdb"
        website="https://imdb-nine.vercel.app/"
        tools={data.project4}
      />
      <ProjectCard
        title="Trinity-TextUtlis"
        subtitle="Text Convertor Web Application"
        description="A user friendly responsive text convertor application.This dynamic endeavor seamlessly integrates various frontend tech stacks"
        picture={p6}
        website="https://textutil-mod.vercel.app/"
        github="https://github.com/dhruvmishra2042/textutil_mod"
        tools={data.project1}
        isImageOnLeft={true}
      />
      <img className="mx-auto w-1/2 md:w-1/6" src={blob} alt="blob" />
    </div>
  );
};

export default Projects;
