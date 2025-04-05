import {useEffect } from "react";
import Category from "../partials/Category";
import myImg from "../../assets/images/daniela.png";
import flowerImg from "../../assets/images/flowers/flower-3.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useEffect(() => {
        // Immediately set the elements off-screen (before the animation starts)
        gsap.set(".about-three .category", {
          y: -1080,
          opacity: 0, // Hide them initially
          visibility: "visible", // Ensure they are visible from the start
        });
      
        gsap.fromTo(
          ".about-three .category",
          {
            y: -1080,
            opacity: 0, // Hide them off-screen initially
          },
          {
            y: 0, // Final position
            opacity: 1, // Ensure opacity reaches 1
            duration: 1.2,
            ease: "bounce.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: ".about",
              start: "top 70%",  // Start the animation when the section is 70% from the top of the viewport
              toggleActions: "play none none none",
            },
          }
        );
      }, []);
      
      
    return (
      <section className="about">
        <div className="container">
            <div className="about-img">
                <img src={myImg} alt="Ciubari Daniela" />
            </div>
            <div className="about-box about-one">
                <div className="about-text">
                    <h2>Nice to meet you!</h2>
                    <h4>I'm Ciubari Daniela, a Full Satck Developer!</h4>
                </div>
                <p>My mission is to help companies like yours achieve their goals through modern and efficient web development solutions. I'm here to turn your ideas into digital reality, delivering engaging and intuitive experiences for your users. Let's bring your vision to life together!</p>
                <img src={flowerImg} alt="Flower" className="flower-1" />
            </div>
            <div className="about-box about-two">
                <h3>The perfect blend of visual design and UX.</h3>
                <p>With a multidisciplinary background in design, I seamlessly blend stunning visuals with intuitive user experiences, all in one cohesive approach.</p>
            </div>
            <div className="about-box about-three">
                <h3>What you can count on from me.</h3>
                <div className="categories">
                    <Category bgColor="orange">Curiosity</Category>
                    <Category bgColor="lightYellow">Responsability</Category>
                    <Category bgColor="lightOrange">Adaptability</Category>
                    <Category bgColor="peach">Empathy</Category>
                    <Category bgColor="purple">Creativity</Category>
                    <Category bgColor="yellow">Health</Category>
                    <Category bgColor="purple">Dedication</Category>
                    <Category bgColor="orange">Perseverance</Category>
                </div>
            </div>
        </div>
      </section>
    );
  };
  
  export default About;
  