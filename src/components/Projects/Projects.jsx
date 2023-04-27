import "./Projects.css";
import { HauntedMansion, StudentGroupGenerator } from '../index'

const Projects = () => {
  return (
    <section>
 
    <button>Student Group Generator</button>
    <button>Haunted Mansion</button>

     <StudentGroupGenerator/>
      <HauntedMansion/>
      <h2 id="project-header">Project Portfolio</h2>
    </section>
  );
};

export default Projects;
