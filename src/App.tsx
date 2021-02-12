import React from "react";
import "./App.css";
import CreateProjectModal from "./pop-ups/create-project/createProjectModal";
import SelectCardModal from "./pop-ups/select-card/selectCardModal";
import Button from "./shared/button/button";

function App() {
  const [
    toggleCreateProjectModal,
    setToggleCreateProjectModal,
  ] = React.useState(false);
  const [toggleSelectCardModal, setToggleSelectCardModal] = React.useState(
    false
  );
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
          onCloseModal={() => setToggleCreateProjectModal(false)}
          onAddProject={() => {
            setToggleCreateProjectModal(false);
            setToggleSelectCardModal(true);
          }}
        />
      )}
      {toggleSelectCardModal && (
        <SelectCardModal
          onCloseModal={() => setToggleSelectCardModal(false)}
          onPaymentDone={() => {
            setToggleSelectCardModal(false);
          }}
          onGoingBack={() => {
            setToggleSelectCardModal(false);
            setToggleCreateProjectModal(true);
          }}
        />
      )}
    </div>
  );
}

export default App;
