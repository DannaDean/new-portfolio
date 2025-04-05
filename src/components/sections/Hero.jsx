import Button from "../partials/Button";
import flowerImg from "../../assets/images/flowers/flower-1.png";
import myImg from "../../assets/images/daniela.png";
import desktopImg from "../../assets/images/desktop.png";
import mobileImg from "../../assets/images/mobile.png";
import HeroCard from "../partials/HeroCard";

const Hero = () => {
    return (
      <section className="hero">
        <div className="container">
          <h1 className="name">Daniela Ciubari</h1>
          <div className="hero-box">
            <div className="hero-text">
              <h2>Here to make you look <br/>good and win business.</h2>
              <p>Websites that convert and apps that feel effortless. <br/>
              Clean, clear, and thoughtfully designed.</p>
              <Button />
            </div>
            <img src={flowerImg} alt="Flower" className="flower-1" />
          </div>
          <div className="hero-cards">
            <HeroCard src={myImg} title="Home of Ciubari Daniela" text="A independent digital designer set to conquer the world." />
            <HeroCard src={desktopImg} title="Web Design & Dev" text="Cleanly designed, conversion-focused, and built for easy updates." />
            <HeroCard src={mobileImg} title="UI/UX Design" text="Seamless web or mobile app design to wow your users." />
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  