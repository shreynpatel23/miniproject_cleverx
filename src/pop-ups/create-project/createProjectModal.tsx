import React from "react";
import Close from "../../assets/svg/close";
import Button from "../../shared/button/button";
import Input from "../../shared/input/input";
import "../popUpStyle.css";
import "./createProjectModal.css";
import "../../shared/inputStyles.css";
import ErrorMessage from "../../shared/error-message/errorMessage";
import { createProject } from "../../api/axios";

function CreateProjectModal({ onCloseModal, onAddProject }: any) {
  const [newProject, setNewProject] = React.useState({
    name: "",
    summary: "",
    cost: 0,
    date: "",
  });
  const [error, setError] = React.useState({
    nameError: "",
    summaryError: "",
    costError: "",
    dateError: "",
  });
  const [loading, setLoading] = React.useState(false);
  const todaysDate = new Date();
  // minimum date will be set to todays date
  const minDate = `${todaysDate.getFullYear()}-${checkMonth(
    todaysDate.getMonth() + 1
  )}-${todaysDate.getDate()}`;
  //   maximum date will be set to one year from todays date
  const maxDate = `${todaysDate.getFullYear() + 1}-${checkMonth(
    todaysDate.getMonth() + 1
  )}-${todaysDate.getDate()}`;
  //   use this function to append 0 if the month number is less than 9
  function checkMonth(value: number) {
    if (value < 9) {
      return `0${value}`;
    }
    return value;
  }
  // use this function to validate the project name
  function checkProjectName() {
    if (newProject.name === "") {
      setError((error) => ({
        ...error,
        nameError: "Project name cannot be empty",
      }));
      return false;
    }
    if (/[^a-zA-Z0-9 ]/.test(newProject.name)) {
      setError((error) => ({
        ...error,
        nameError: "Special characters are not allowed",
      }));
      return false;
    }
    return true;
  }
  // use this function to validate the project summary
  function checkProjectSummary() {
    if (newProject.summary === "") {
      setError((error) => ({
        ...error,
        summaryError: "Project Summary cannot be empty",
      }));
      return false;
    }
    return true;
  }
  // use this function to validate the project date
  function checkProjectDate() {
    if (newProject.date === "") {
      setError((error) => ({
        ...error,
        dateError: "Date cannot be empty",
      }));
      return false;
    }
    return true;
  }
  // use this function to validate the project cost
  function checkProjectCost() {
    if (newProject.cost === 0) {
      setError((error) => ({
        ...error,
        costError: "Cost cannot be empty",
      }));
      return false;
    }
    if (newProject.cost < 100 || newProject.cost > 100000) {
      setError((error) => ({
        ...error,
        costError: "Cost should be in range of 100 - 100000",
      }));
      return false;
    }
    return true;
  }
  // use this function create a new project
  async function createNewProject() {
    const allChecksPassed = [
      checkProjectName(),
      checkProjectSummary(),
      checkProjectDate(),
      checkProjectCost(),
    ].every(Boolean);
    if (allChecksPassed) {
      setLoading(true);
      try {
        const date = new Date(newProject.date);
        await createProject({ ...newProject, date: date.toISOString() });
        setLoading(false);
        onAddProject();
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    }
  }
  return (
    <div className="overlay">
      <div className="popUpContent">
        <div className="modal_header">
          <p className="modal_header_text">Create Project</p>
          <div className="close_modal">
            <Close
              classes="close_svg"
              width="15"
              height="15"
              onClick={() => onCloseModal()}
            />
          </div>
        </div>
        <div className="modal_body">
          <div
            className={`${
              error.nameError
                ? "form_field_error_wrapper"
                : "form_field_wrapper"
            }`}
          >
            <Input
              type="text"
              placeholder="Title of the Project"
              maxLength={80}
              hasError={error.nameError}
              onChange={(event: any) => {
                setNewProject((newProject) => ({
                  ...newProject,
                  name: event.target.value,
                }));
                setError((error) => ({
                  ...error,
                  nameError: "",
                }));
              }}
              onBlur={checkProjectName}
            />
          </div>
          {error.nameError && <ErrorMessage>{error.nameError}</ErrorMessage>}
          <div
            className={`${
              error.summaryError
                ? "form_field_error_wrapper"
                : "form_field_wrapper"
            }`}
          >
            <textarea
              name="summary"
              id="summary"
              rows={7}
              placeholder="Summary of the Project"
              onChange={(event: any) => {
                setNewProject((newProject) => ({
                  ...newProject,
                  summary: event.target.value,
                }));
                setError((error) => ({
                  ...error,
                  summaryError: "",
                }));
              }}
              className={`commonInputClass ${
                error.summaryError !== "" ? "error" : "formControl"
              }`}
              maxLength={200}
              style={{ resize: "none", fontFamily: "Poppins" }}
              onBlur={checkProjectSummary}
            ></textarea>
          </div>
          {error.summaryError && (
            <ErrorMessage>{error.summaryError}</ErrorMessage>
          )}
          <div
            className={`${
              error.dateError
                ? "form_field_error_wrapper"
                : "form_field_wrapper"
            }`}
          >
            <Input
              type="date"
              min={minDate}
              max={maxDate}
              hasError={error.dateError}
              placeholder="Delivery Date"
              onChange={(event: any) => {
                setNewProject((newProject) => ({
                  ...newProject,
                  date: event.target.value,
                }));
                setError((error) => ({
                  ...error,
                  dateError: "",
                }));
              }}
              onBlur={checkProjectDate}
            />
          </div>
          {error.dateError && <ErrorMessage>{error.dateError}</ErrorMessage>}
          <div
            className={`${
              error.costError
                ? "form_field_error_wrapper"
                : "form_field_wrapper"
            }`}
          >
            <Input
              type="number"
              placeholder="Project Cost"
              hasError={error.costError}
              onChange={(event: any) => {
                setNewProject((newProject) => ({
                  ...newProject,
                  cost: event.target.value,
                }));
                setError((error) => ({
                  ...error,
                  costError: "",
                }));
              }}
              onBlur={checkProjectCost}
            />
          </div>
          {error.costError && <ErrorMessage>{error.costError}</ErrorMessage>}
          <div className="form_field_wrapper" style={{ padding: "10px 5px" }}>
            <p className="informative_text">CleverX transaction fees (20%)</p>
            <p style={{ marginLeft: "auto" }} className="informative_text">
              $0.00
            </p>
          </div>
          <div className="form_field_wrapper" style={{ padding: "10px 5px" }}>
            <p className="informative_text">Total amount in $USD</p>
            <p style={{ marginLeft: "auto" }} className="informative_text">
              $0.00
            </p>
          </div>
          <div className="form_field_wrapper">
            <Button
              button_text="Create Project"
              onClick={createNewProject}
              disabled={loading}
              isLoading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProjectModal;
