import "./Projects.css";

const Projects = () => {
  return (
    <section>
      <h2 id="project-header">Project Portfolio</h2>

      <article className="project-container" id="student-group-generator-container">
        <h3>Student Group Generator</h3>
        <div className="project-description">
          <h4>Overview</h4>
          <p className="paragraph-text">
            Student Group Generator is a personal project I built to solve a
            recurring problem while working as a mentor at Fullstack Academy. I
            frequently needed to generate pairs or groups of students for
            morning Javascript practice problems and had no way of doing so
            easily. Student Group Generator began as a set of algorithms and
            evolved into a complete Fullstack application
          </p>
        </div>
        <div className="project-description">
          <h4>Project Goals</h4>
          <p className="paragraph-text">
            Student Group Generator allows a user to create a list of students
            grouped as a class and to create pairs or groups of those students
            with various parameters. Groups are created randomly
          </p>
        </div>
      </article>
      <article className="project-container" id="haunted-mansion-container">
        <h3>Haunted Mansion</h3>
        <div className="haunted-mansion-div">
          <div className="project-links">
            <ul>
              <li>
                <a href="https://haunted.gq/">Try it out</a>
              </li>
              <li>
                <a href="https://github.com/Team-Grape/CapstoneProject">
                  Github
                </a>
              </li>
            </ul>
          </div>
          <div id="haunted-mansion-image-container"><img
            id="haunted-mansion-image"
            src="https://user-images.githubusercontent.com/96203831/161592220-83f84c1c-9618-402b-8c6f-94c4e2d01088.jpg"
            alt="An old victorian mansion with a gloomy sky"
          ></img></div>
          
          <h4>Overview</h4>
          <p className="paragraph-text project-description">
            Haunted Mansion was my capstone project during the Grace Hopper
            Program. I collaborated with Qina Zeng, Chen Ying Xin, and Mai
            Atwell to build this fully playable 2-D point and click adventure
            game. Haunted Mansion is built using Kaboom JS as it's main library.
            However, once we began to scale the game it became clear that Kaboom
            was not sufficie and is deployed on Github pages
          </p>
        </div>
        <div>
          
          <img
            id="haunted-mansion-layout-image"
            src="https://user-images.githubusercontent.com/96203831/161591984-e2110053-b8c2-4f67-b163-d3a77a76888b.png"
            alt="A map of the different room connections inside the haunted mansion"
          ></img>
          <h4>Technical Challenges</h4><div className='tech-stack-logo-container'>
          <img
            className="tech-stack-logo"
            src="https://raw.githubusercontent.com/replit/kaboom/HEAD/kaboom.png"
            alt="Kaboom JS Logo"
          ></img>
          <img
            className="tech-stack-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
            alt="Yellow square with a dark grey J S"
          ></img>
          <img
            className="tech-stack-logo"
            src="https://avatars.githubusercontent.com/u/57169982?s=200&v=4"
            alt="White mermaid tail on red background"
          ></img></div>
          <div className="project-description">
            <h5>Kaboom JS and Javascript</h5>
            <p className="paragraph-text">
              Haunted Mansion is built using Kaboom JS as it's main library.
              However, once we began to scale the game it became clear that
              Kaboom was not sufficient so we wrote a small library of helper
              functions around Kaboom to help us manage state with local
              storage.
            </p>
            <img
              id="haunted-mansion-mermaid-chart"
              src="https://i.imgur.com/9rjPAwN.png"
            ></img>
            <h5>Mermaid JS and Game Logic</h5>
            <p>
              Another challenge was keeping track of the game logic. Building a
              puzzle based adventure game required us to pay special attention
              to where clues and items were located. We experimented with
              Mermaid.js as a way of charting potential game paths a player
              might encounter .
            </p>
          </div>
        </div>

        <iframe
          id="haunted-mansion-video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/JvRc0QAXa0Q"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
        ></iframe>
      </article>
    </section>
  );
};

export default Projects;
