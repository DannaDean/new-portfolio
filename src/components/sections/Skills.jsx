import Button from "../partials/Button";
import MarqueeCard from "../partials/MarqueeCard";

const logos = [
  { src: "src/assets/images/skills/html.svg", title: "HTML" },
  { src: "src/assets/images/skills/css.svg", title: "CSS/SCSS" },
  { src: "src/assets/images/skills/js.svg", title: "Java Script" },
  { src: "src/assets/images/skills/react.svg", title: "React" },
  { src: "src/assets/images/skills/mysql.svg" },
  { src: "src/assets/images/skills/php.svg" },
  { src: "src/assets/images/skills/figma.svg", title: "Figma" },
  { src: "src/assets/images/skills/laravel.svg", title: "Laravel" },
  { src: "src/assets/images/skills/photoshop.svg", title: "Photoshop" },
];

const Skills = () => {
  return (
    <section className="skills">
      <div className="container">
        <div className="marquee-container">
          <p>Coding Skills:</p>
          <div className="marquee marquee--reverse">
            <MarqueeCard logos={logos} />
            <MarqueeCard logos={logos} />
          </div>
        </div>
        <div className="conect-box">
          <h3>Ready to get started?</h3>
          <Button href={"#getInTouch"} bgColor="rgba(208, 150, 223, 1)" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
