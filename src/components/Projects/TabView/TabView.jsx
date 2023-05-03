import "./TabView.css";
import {
  HauntedMansion,
  GraceShopper,
  StudentGroupGenerator,
} from "../../index";
import { useState } from "react";
const TabView = () => {
  const [activeTab, setActiveTab] = useState("hauntedMansion");

  function handleChangeTab(tabViewName) {
    setActiveTab(tabViewName);
  }

  return (
    <div>
      {/* <div id="projects-header-container">
      <h2 id="projects-header">Projects</h2>
      </div> */}

      <div className="tabs">
        <ul className="tab-selectors">
        <li
            onClick={() => {
              handleChangeTab("hauntedMansion");
            }}
            className={activeTab === "hauntedMansion" ? "active" : ""}
          >
            Haunted Mansion
          </li>
          <li
            onClick={() => {
              handleChangeTab("graceShopper");
            }}
            className={activeTab === "graceShopper" ? "active" : ""}
          >
            Grace Shopper
          </li>
        
        </ul>

        <section className="outlet">
          {activeTab === "hauntedMansion" ? (
            <div>
              <h2 className="card-header">Haunted Mansion</h2>
              <HauntedMansion />
            </div>
          ) : (
            <div>
              <h2 className="card-header">Grace Shopper</h2>
              <GraceShopper />
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default TabView;
