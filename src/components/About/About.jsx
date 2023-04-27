import "./About.css";
const About = () => {
  return (
    <section>
      <h2 className="about-header">About</h2>
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
      <h2>Coding Experience</h2>
      <article className='card-container about-container'>
        <p className='paragraph-text'>
          Here is my coding experience
        </p>
      </article>
      <h2 className='about-header'>Life Before Coding</h2>
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
      </article>
    </section>
  );
};

export default About;
