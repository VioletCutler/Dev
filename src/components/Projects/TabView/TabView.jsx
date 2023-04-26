import "./TabView.css";
import { HauntedMansion, StudentGroupGenerator } from "../../index";
import { useState } from "react";
const TabView = () => {
  const [activeTab, setActiveTab] = useState("studentGroupGenerator");

  function handleChangeTab(tabViewName) {
    setActiveTab(tabViewName);
  }

  return (
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
          <StudentGroupGenerator />
        ) : (
          <HauntedMansion />
        )}
      </section>
    </div>
  );
};

export default TabView;
