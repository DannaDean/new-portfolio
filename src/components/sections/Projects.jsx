import Box from "../partials/Box";
import Project from "../partials/Project";
import Button from "../partials/Button";
import flowerImg from "../../assets/images/flowers/flower-2.png";

const Projects = () => {
  const projectData = [
    {
      srcOne: "src/assets/images/projects/project1-1.png",
      srcTwo: "src/assets/images/projects/project1-2.png",
      link: "#",
      title: "Parenting App Website",
      categories: [
        "Web Design",
        "Copywriting",
        "D2C",
        "Food",
        "Sustainability",
      ],
    },
    {
      srcOne: "src/assets/images/projects/project2-1.png",
      srcTwo: "src/assets/images/projects/project2-2.png",
      link: "#",
      title: "Plant-forward Meal Delivery Website",
      categories: ["Web Design", "AI", "Parenthood"],
    },
  ];

  return (
    <section className="hero projects" id="projects">
      <div className="container">
        <Box
          title="Design is in the details."
          text="My work is based on timeless design principles, clear copywriting, and well-established UX patterns. Each design is carefully crafted to meet your goals."
          flowerImg={flowerImg}
          bgColor="#FAEBC5"
        />

        <div className="projects-container">
          {projectData.map((project, index) => (
            <Project
              key={index}
              srcOne={project.srcOne}
              srcTwo={project.srcTwo}
              link={project.link}
              title={project.title}
              categories={project.categories}
            />
          ))}
        </div>
        <div className="projects-btn">
          <Button text="Load More" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
