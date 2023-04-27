import "./About.css";
const About = () => {
  return (
    <div>
    <h2 className="card-header">About</h2>
  
      <article className="card-container about-container">
        <p className="paragraph-text">
          <img
            id="violet-main-photo"
            className="left-about-photo"
            src="https://i.imgur.com/rp8I9BQ.jpg"
          />
         My name is <br/><span id='name-and-pronouns'>Violet (they/she)</span> and I'm a programmer, artist and organizer living in Philadelphia. I graduated from the Grace Hopper Program at Fullstack Academy in April, 2022. I build fullstack web applications using the PERN stack and 
        </p>
      </article>
      <h2 className="card-header">Coding Proficiencies</h2>
      <article className='card-container about-container'>
        <ul>
          <li className="coding-proficiency-list-item"><img className="coding-proficiency-icon" src="https://www.javascripttutorial.net/wp-content/uploads/2021/04/JavaScript-Tutorial.svg"/>Javascript</li>
          <li className="coding-proficiency-list-item"><img className="coding-proficiency-icon" src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"/>Node</li>
          <li className="coding-proficiency-list-item"><img className="coding-proficiency-icon" src="https://w7.pngwing.com/pngs/545/451/png-transparent-node-js-express-js-javascript-solution-stack-web-application-others-angle-text-rectangle-thumbnail.png"/>Express</li>
          <li className="coding-proficiency-list-item"><img className="coding-proficiency-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"/>React</li>
          <li className="coding-proficiency-list-item"><img className="coding-proficiency-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png"/>PostgreSQL</li>
          <li className="coding-proficiency-list-item"><img className="coding-proficiency-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png"/>Git & Github</li>
        </ul>
      </article>
      <h2 className='card-header'>Life Before Coding</h2>
      <article className="card-container about-container">
      
        <p className="paragraph-text">
          <img
            id="vhs-selfie"
            className="right-about-photo"
            src="https://i.imgur.com/58kTIAK.jpg"
          />
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
          Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet,
          wisi.
        </p>
        <p>
          <img
            id="video-teacher-photo"
            className="left-about-photo"
            src="https://i.imgur.com/plp7le2.png"
          />
          Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum
          orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis
          pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus
          faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.
          Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
          facilisis luctus, metus
        </p>
      </article></div>
  );
};

export default About;
