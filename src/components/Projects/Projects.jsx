import "./Projects.css";
import { HauntedMansion, StudentGroupGenerator } from '../index'

const Projects = () => {
  return (
    <section>
      <h2 id="project-header">Project Portfolio</h2>
    <button>Student Group Generator</button>
    <button>Haunted Mansion</button>
    
     <StudentGroupGenerator/>
      <HauntedMansion/>
    </section>
  );
};

export default Projects;
