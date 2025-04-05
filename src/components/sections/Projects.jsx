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
          categories: ["Web Design", "Copywriting", "D2C", "Food", "Sustainability"],
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
          <div className="hero-box">
             <div className="hero-text">
                <h2>Design is in the details.</h2>
                <p>My work is based on timeless design principles, clear copywriting, and <br/> well-established UX patterns. Each design is carefully crafted to meet <br/> your goals.</p>
             </div>
            <img src={flowerImg} alt="Flower" className="flower-1" />
          </div>

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
                <Button text='Load More' />
            </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  