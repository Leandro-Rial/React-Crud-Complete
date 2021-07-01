import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Flecha from "../../assets/flecha.png";

const AddProject = ({ createProject }) => {
  const projectState = {
    id: null,
    projectInfo: "",
    createdAt: "Creation date:  09/09/2020 10:30 am",
    description: "",
    ProjectManager: "Walt Cosani",
    Assignedto: "Ignacio Truffa",
    Status: "Enabled",
  };

  const [project, setProject] = useState(projectState);
  const history = useHistory();

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setProject({ ...project, [name]: value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (
      project.projectInfo === "" ||
      project.description === "" ||
      project.ProjectManager === "" ||
      project.Assignedto === "" ||
      project.Status === ""
    ) {
      alert("All the fields are mandatory!");
      return;
    }

    createProject(project);
    setProject(projectState);
    history.push("/");
  };

  return (
    <>
      <div className="subheader-back">
        <Link className="btn-back" to="/">
          <img src={Flecha} alt="" />
          <p>Back</p>
        </Link>
        <h1 className="title-subheader">Add project</h1>
      </div>
      <div className="form">
        <form onSubmit={onSubmitForm}>
          <div className="rows">
            <label htmlFor="ProjectName">Project Name</label>
            <input
              type="text"
              name="projectInfo"
              value={project.projectInfo}
              onChange={handleInputChange}
            />
          </div>

          <div className="rows">
            <label htmlFor="Description">Description</label>
            <input
              type="text"
              name="description"
              value={project.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="rows">
            <label htmlFor="ProjectManager">Project Manager</label>
            <select name="ProjectManager">
              <option value="">Please select a person</option>
              <option value={project.ProjectManager}>Walt Cosani</option>
            </select>
          </div>

          <div className="rows">
            <label htmlFor="Assignedto">Assigned to</label>
            <select name="Assignedto">
              <option value="">Please select a person</option>
              <option value={project.Assignedto}>Ignacio Truffa</option>
            </select>
          </div>

          <div className="rows">
            <label htmlFor="Status">Status</label>
            <select name="Status">
              <option value={project.Status}>Enabled</option>
            </select>
          </div>

          <button type="submit">Create Project</button>
        </form>
      </div>
    </>
  );
};

export default AddProject;
