import "./TabView.css";
import { HauntedMansion, StudentGroupGenerator } from "../../index";
import { useState } from "react";
const TabView = () => {
  const [activeTab, setActiveTab] = useState("studentGroupGenerator");

  function handleChangeTab(tabViewName) {
    setActiveTab(tabViewName);
  }

  return (
    <div>
       <h2 id="project-header">Projects</h2>
    <div className="tabs">
     
      <ul className="tab-selectors">
        <li
          onClick={() => {
            handleChangeTab("studentGroupGenerator");
          }}
          className={activeTab === "studentGroupGenerator" ? "active" : ""}
        >
        Group Generator
        </li>
        <li
          onClick={() => {
            handleChangeTab("hauntedMansion");
          }}
          className={activeTab === "hauntedMansion" ? "active" : ""}
        >
          Haunted Mansion
        </li>
      </ul>
      
      <section className="outlet">
        {activeTab === "studentGroupGenerator" ? (
          <div>
            <h2 className="card-header">Student Group Generator</h2>
               <StudentGroupGenerator />
          </div>
       
        ) : (
          <div>
            <h2 className="card-header">Haunted Mansion</h2>
          <HauntedMansion />
          </div>
        )}
      </section>
    </div></div>
  );
};

export default TabView;
