import React, { useEffect } from "react";
import { getProjects } from "../../api/axios";
import Loading from "../../shared/loading/loading";
import "../popUpStyle.css";
import "./projectConfirmationModal.css";
import calenderSvg from "../../assets/images/calender.svg";
import folderSvg from "../../assets/images/folder.svg";
import Button from "../../shared/button/button";

function ProjectConfirmationModal({ onCancel }: any) {
  const [project, setProject] = React.useState({
    name: "",
    summary: "",
    cost: 0,
    date: new Date(),
    total: 0,
  });
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    async function getProject() {
      setLoading(true);
      try {
        const response: any = await getProjects();
        setProject(response);
        const additionalTax = (Number(response.cost) * 20) / 100;
        setProject((project) => ({
          ...project,
          total: additionalTax + Number(response.cost),
        }));
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    }
    getProject();
  }, []);
  function getNumberOfDaysRemaining() {
    const todaysDate = new Date();
    const projectDate = new Date(project?.date);
    return Math.floor(
      (projectDate.getTime() - todaysDate.getTime()) / (1000 * 3600 * 24)
    );
  }
  return (
    <div className="overlay">
      <div className="popUpContent">
        {loading ? (
          <div className="loading_wrapper">
            <Loading loadingColor="#0f63e0" width="10px" height="10px" />
          </div>
        ) : (
          <div>
            <div className="confirmation_modal_header">
              <div className="name_and_cost_wrapper">
                <p className="project_name">{project?.name}</p>
                <p className="project_cost">{`$${project?.cost}`}</p>
              </div>
              <div className="total_cost_wrapper">
                <p className="total_text">{`Total:$${project?.total}`}</p>
              </div>
              <div className="total_cost_wrapper">
                <p className="total_text">(CleverX fee + 20%)</p>
              </div>
            </div>
            <div className="modal_body">
              <p className="project_description">{project?.summary}</p>
              <div className="delivery_and_attachment_wrapper">
                <div className="delivery_wrapper">
                  <div className="svg">
                    <img src={calenderSvg} alt="calender_svg" width="20px" />
                  </div>
                  <p className="option_text">{`${getNumberOfDaysRemaining()} day delivery`}</p>
                </div>
                <div className="attachment_wrapper">
                  <div className="svg">
                    <img src={folderSvg} alt="calender_svg" width="20px" />
                  </div>
                  <p className="option_text">Attachment</p>
                </div>
              </div>
              <div className="confirmation_modal_buttons">
                <div style={{ padding: "0 10px" }}>
                  <Button button_text="Cancel" onClick={() => onCancel()} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectConfirmationModal;
