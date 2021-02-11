import React from "react";
import "./App.css";
import CreateProjectModal from "./pop-ups/create-project/createProjectModal";

function App() {
  const [
    toggleCreateProjectModal,
    setToggleCreateProjectModal,
  ] = React.useState(false);
  return (
    <div className="wrapper">
      <div className="playground">
        <button className="button" onClick={() => setToggleCreateProjectModal(true)}>
          <p className="button_text">Create Project</p>
        </button>
      </div>
      {toggleCreateProjectModal && <CreateProjectModal />}
    </div>
  );
}

export default App;
