import Box from "../components/partials/Box";
import flowerImg from "../assets/images/flowers/flower-4.png";

const Footer = () => {
    return (
      <footer>
        <div className="container">
        <Box
          title="Thanks for stopping by!"
          subtitle="I’d love to chat with you about how I can help. Get in touch!"
          flowerImg={flowerImg}
          bgColor="rgba(255, 157, 101, 1)"
        >
          hello
        </Box>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  