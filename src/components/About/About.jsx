import "./About.css";
const About = () => {
  return (
    <div>
    <h2 className="card-header">About</h2>
  
      <article className="card-container about-container">
      <img
            id="violet-main-photo"
            className="left-about-photo"
            src="https://i.imgur.com/rp8I9BQ.jpg"
          />
        <p className="paragraph-text">
      
         <span className="no-wrap">My name is </span><br/><span style={{ fontWeight: "bold" }}>Violet (they/she)</span> and I'm a programmer, artist and organizer living in Philadelphia. I graduated from the Grace Hopper Program at Fullstack Academy in April, 2022. I build fullstack web applications using the PERN stack and have taken a special interest in accessibility on the web. I am currently working through the W3C Introduction to Web Accessibility Course. 
        </p>
      </article>
      <h2 className="card-header">Coding Proficiencies</h2>
      <article className='card-container about-container'>
        <ul id="coding-proficiency-list">
          <span className="no-wrap"><li className="coding-proficiency-list-item"><img className="coding-proficiency-icon" src="https://www.javascripttutorial.net/wp-content/uploads/2021/04/JavaScript-Tutorial.svg"/>Javascript</li></span>
          <span className="no-wrap">
          <li className="coding-proficiency-list-item"><img className="coding-proficiency-icon" src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"/>Node</li></span>
          <span className="no-wrap">
          <li className="coding-proficiency-list-item"><img className="coding-proficiency-icon" src="https://w7.pngwing.com/pngs/545/451/png-transparent-node-js-express-js-javascript-solution-stack-web-application-others-angle-text-rectangle-thumbnail.png"/>Express</li></span>
          <span className="no-wrap">
          <li className="coding-proficiency-list-item"><img className="coding-proficiency-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"/>React</li></span>
          <span className="no-wrap">
          <li className="coding-proficiency-list-item"><img className="coding-proficiency-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png"/>PostgreSQL</li></span>
          <span className="no-wrap">
          <li className="coding-proficiency-list-item"><img className="coding-proficiency-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png"/>Git & Github</li></span>
        </ul>
      </article>
      {/* <h2 className="card-header">Coding Experience</h2>
      <article className="card-container about-container">
      <p className="paragraph-text">
        Grace Hopper 
      </p>
      </article> */}
      <h2 className='card-header'>Life Before Coding</h2>
      <article className="card-container about-container">
      <div className="life-before-coding-section vhs-section">
      <img
            id="vhs-selfie"
            className="right-about-photo"
            src="https://i.imgur.com/58kTIAK.jpg"
          />
        <p className="paragraph-text vhs-text">
          I have been an artist and performer for the last 15 years. I play synthesizer, saxophone, and make videos with vhs and other analog video gear. Transitioning to tech has felt like a natural fit for me because I find coding to be a creative practice and I enjoy the challenge of finding my own way to solve a problem.
        </p>
        </div>
        <div className="life-before-coding-section"
        >
          <img
            id="video-teacher-photo"
            className="left-about-photo"
            src="https://i.imgur.com/plp7le2.png"
          /><p id="education=text"
          className="paragraph-text">
        I'm passionate about organizing and educating. I have organized many events and workshops relating to my artistic interests as well as trans identity and community. I'm energized through working with other creatives who are traditionally underserved by mainstream institutions and building our own spaces and support networks.</p> 
        </div>
      </article></div>
  );
};

export default About;
