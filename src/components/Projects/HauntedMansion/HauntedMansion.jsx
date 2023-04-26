import "./HauntedMansion.css";

const HauntedMansion = () => {
  return (
    <article className="card-container" id="haunted-mansion-container">
      <div id="haunted-mansion-header">
        <h3>Haunted Mansion</h3>
        <div id="haunted-mansion-project-links" className="project-links">
          <a
            className="haunted-mansion-project-link"
            href="https://haunted.gq/"
          >
            Try it out
          </a>
          <a
            className="haunted-mansion-project-link"
            href="https://github.com/Team-Grape/CapstoneProject"
          >
            Github
          </a>
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
      <h4>Overview</h4>
      <div className="paragraph-text card-description">
        <p>
          <span style={{ fontWeight: "bold" }}>Haunted Mansion</span> was my
          capstone project during the Grace Hopper Program. I collaborated with{" "}
          <a href="https://linkedin.com/in/qina-zeng/">Qina Zeng</a>,{" "}
          <a href="https://linkedin.com/in/chen-ying-xin">Chen Ying Xin</a>, and{" "}
          <a href="https://github.com/mai-gh">Mai Atwell</a> to build this fully
          playable 2-D point and click adventure game. Players can explore
          different rooms, interact with and pick up different items, and solve
          puzzles. The game is built using Kaboom JS as it's main library.
          However, once we began to scale the game it became clear that Kaboom
          was not sufficient and is deployed on Github pages
        </p>
      </div>
      <div>
        <h4>Features</h4>
        <div className="paragraph-text card-description">
          <p>
            A lot of time and attention was paid to give the game features that
            improve a users experience:
          </p>
          <ul>
            <li>
              Sound effects and pop up messages that give a user feedback on
              their in-game actions
            </li>
            <p>A message log to help a player keep track of previous clues</p>
            <li>
              An options menu to adjust the volume of both music and sound
              effects separately
            </li>
            <li>
              Save functionality that allows a user to continue their game from
              any computer
            </li>
            <li>
              A toolbar at the bottom of the screen with item icons for easy
              reference
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h4>Technical Challenges</h4>
        <div className="tech-stack-logo-container">
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
          ></img>
        </div>
        <div className="card-description">
          <h5>Kaboom JS and Javascript</h5>
          <p className="paragraph-text">
            Haunted Mansion is built using Kaboom JS as it's main library.
            However, once we began to scale the game it became clear that Kaboom
            was not sufficient so we wrote a small library of helper functions
            around Kaboom to help us manage state with local storage.
          </p>
          <img
            id="haunted-mansion-mermaid-chart"
            src="https://i.imgur.com/9rjPAwN.png"
          ></img>
          <h5>Mermaid JS and Game Logic</h5>
          <p>
            Another challenge was keeping track of the game logic. Building a
            puzzle based adventure game required us to pay special attention to
            where clues and items were located. We experimented with Mermaid.js
            as a way of charting potential game paths a player might encounter.
          </p>
        </div>
      </div>
      <div id="haunted-mansion-layout-image-container"></div>
      <img
        id="haunted-mansion-layout-image"
        className="test"
        src="https://user-images.githubusercontent.com/96203831/161591984-e2110053-b8c2-4f67-b163-d3a77a76888b.png"
        alt="A map of the different room connections inside the haunted mansion"
      ></img>
    </article>
  );
};

export default HauntedMansion;
