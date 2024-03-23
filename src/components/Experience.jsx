import ExperienceCard from "./ui/ExperienceCard";
import reg from '../assets/icons/download.png';
import reg1 from '../assets/icons/download (1).jpeg';




const Experience = () => {
  var mozn = [
    "Collaborated with the development team to ensure secure software development practices.",
    "Developed and maintained secure coding standards and guidelines.",
    "Worked on optimization of code efficiency of the automated mailer.",
    "Developed UI of the responsive webpages based on various client requirements.",
    "Manually  Tested the developed webpages  before final deployment . ",
    "Tested the developed email templates for various system congigurations and outlook versions",
  ];

  var mozn1 = [
    "Collaborated with the development team to ensure secure software development practices.",
    "Developed and maintained secure coding standards and guidelines.",
    "Implemented Google Authentication for more precise privacy.",
    "Developed UI of the responsive webpages based on various client requirements.",
    "Manually  Tested the developed webpages  before final deployment . ",
    "Integrated Razor pay payment gateway for payment proceedings.",
  ];
  

  return (
    <div
      id="experience"
      className="mx-auto flex flex-col justify-center gap-8 p-4 text-center md:items-center  md:justify-between lg:max-w-7xl"
    >
      <h1 className="py-6 text-3xl font-bold text-primary md:text-4xl ">
        Experience
      </h1>

      {/* Experience Cards */}
      <ExperienceCard
        logo={reg}
        name="mozn"
        job="SDE-Intern(frontend)"
        duration="May. 2023 - September.2023"
        skills={mozn}
      />
      <ExperienceCard
        logo={reg1}
        name="mozn1"
        job="Front-end Developer Intern"
        duration="June. 2022 - August.2022"
        skills={mozn1}
      />
      
    </div>
  );
};

export default Experience;
