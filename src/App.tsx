import React from "react";
import "./App.css";
import CreateProjectModal from "./pop-ups/create-project/createProjectModal";
import Button from "./shared/button/button";

function App() {
  const [
    toggleCreateProjectModal,
    setToggleCreateProjectModal,
  ] = React.useState(false);
  return (
    <div className="wrapper">
      <div className="playground">
        <Button
          button_text="Create Project"
          onClick={() => setToggleCreateProjectModal(true)}
        />
      </div>
      {toggleCreateProjectModal && (
        <CreateProjectModal
          closeModal={() => setToggleCreateProjectModal(false)}
        />
      )}
    </div>
  );
}

export default App;
