import "./Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div id="homepage">
      <div id="homepage-header">
        <div id="homepage-header-circle">
        <h2>welcome to violet.dev</h2><Link id="click-to-enter" to="/about">
          Enter
        </Link></div>
        
      </div>
      <div id="homepage-background"></div>
    </div>
  );
};

export default Homepage;
