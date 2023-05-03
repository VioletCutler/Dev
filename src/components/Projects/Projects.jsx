import "./Projects.css";
import { HauntedMansion, StudentGroupGenerator, GraceShopper } from '../index'

const Projects = () => {
  return (
<div>
 
    <button>Student Group Generator</button>
    <button>Haunted Mansion</button>

   
      <HauntedMansion/>
      <GraceShopper/>
      <h2 id="project-header">Project Portfolio</h2>
</div>
  );
};

export default Projects;
