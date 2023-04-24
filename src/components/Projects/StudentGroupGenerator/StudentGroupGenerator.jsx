import './StudentGroupGenerator.css'

const StudentGroupGenerator = () => {
    return (
        <article
        className="project-container"
        id="student-group-generator-container"
      >
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
    )
}

export default StudentGroupGenerator