import "./Projects.css";
import { HauntedMansion, StudentGroupGenerator } from '../index'

const Projects = () => {
  return (
<div>
 
    <button>Student Group Generator</button>
    <button>Haunted Mansion</button>

     <StudentGroupGenerator/>
      <HauntedMansion/>
      <h2 id="project-header">Project Portfolio</h2>
</div>
  );
};

export default Projects;
