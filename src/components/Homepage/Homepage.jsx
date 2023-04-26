import "./Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div id="homepage">
      <div id="homepage-header">
        <h2>welcome to violet.dev</h2>
        <Link to="/about">click here to enter</Link>
      </div>
      <div id="homepage-background">Hello</div>
    </div>
  );
};

export default Homepage;
