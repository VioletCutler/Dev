import "./GraceShopper.css";

const GraceShopper = () => {
  return (
    <div>
      <article
        className="card-container"
        id="student-group-generator-container"
      >
        <div>
          <div></div>
          <h4>Overview</h4>
          <img
            id="grace-shopper-image"
            className="image-border"
            src="https://i.imgur.com/V6vkb3X.png"
            alt="A map of the different room connections inside the haunted mansion"
          ></img>
          <p className="paragraph-text">
            <a href="https://github.com/Team-Grape/CapstoneProject">
              Grace Shopper
            </a>{" "}
            is a fully functional fullstack e-commerce application built during
            my time at the Grace Hopper program at Fullstack Academy. I
            collaborated with{" "}
            <a href="https://www.linkedin.com/in/mica-oz/">
              Mica Osczczakiewicz 
            </a>, <a href="https://github.com/choi2010">Linda Choi</a>, and{" "}
            <a href="https://www.linkedin.com/in/diana-viglucci/">
              Diana Viglucci 
            </a>{" "}
             to build and deploy this project.
          </p>
        </div>
      </article>
      <h2 className="card-header">Project Goals</h2>
      <article className="card-container">
        <p className="paragraph-text">
        <span style={{ fontWeight: "bold" }}>Grace Shopper</span> is intended to simulate a fully deployed and functional
          e-commerce application where a user can:
          </p>
          <ul className="project-ul">
            <li>Register and Login with the correct credentials</li>
            <li>Browse a list of products and add them to a cart</li>
            <li>
              Be able to 'Checkout' their purchase as both a 'logged in' user or
              as a guest
            </li>
          </ul>
          <br />
 
          <p className="paragraph-text">
            It also includes a dedicated administrator dashboard that allows any administrator
            account to edit or delete products.
          </p>

      </article>
      <h2 className="card-header">Technical Challenges</h2>
      <article className="card-container">
        <p className="paragraph-text">
          {" "}
          <span style={{ fontWeight: "bold" }}>Grace Shopper</span> came with a long list of technical challenges.
        </p>
        <div className="tech-stack-logo-container grace-shopper-tech-stack-container">
          <img
            className="tech-stack-logo"
            src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
            alt="Redux logo. Three swirling purple lines that form a symmetrical, abstract shape."
          ></img>
          <img
            className="tech-stack-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            alt="React logo. An abstraction of an atom with a blue nucleus and blue electron rings."
          ></img>
          <img
            className="tech-stack-logo"
            src="https://cdn.worldvectorlogo.com/logos/jwt-3.svg"
            alt="JWT logo. Arrows in a circle that form a star in the negative space. Arrows alternate between teal, aquamarine, magenta, red, and white."
          ></img>
        </div>
        <p>
        To keep track of state within the application, we made use of <span style={{ fontWeight: "bold" }}>React
        Redux.</span> We used thunks to make our axios requests to the API we built on
        the backend and <span style={{ fontWeight: "bold" }}>Sequelize</span> to manage our data in our <span style={{ fontWeight: "bold" }}>PostgreSQL</span> database.</p>
        {/* <br /> */}
        <br />
        Authorization was one of the the big challenges of this project. We used
        <span style={{ fontWeight: "bold" }}> JWT</span> to generate authorization tokens that we then stored on the front
        end in local storage. Various components were then kept behind condtions
        that read the token and indicated someone was either 'loggedIn' or not.
      </article>
    </div>
  );
};

export default GraceShopper;
