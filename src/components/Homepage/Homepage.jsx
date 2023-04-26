import "./Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div id="homepage">
      <div id="homepage-header">
        <h2>welcome to violet.dev</h2>
        <Link id="click-to-enter" to="/about">ENTER</Link>
      </div>
      <div id="homepage-background"></div>
    </div>
  );
};

export default Homepage;
