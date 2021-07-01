import React from "react";
import More from "../../assets/Vector.png";
import Edit from "../../assets/edit-solid-24.png";
import Trash from "../../assets/trash-alt-regular-24.png";
import { Link } from "react-router-dom";

const Projects = ({ project, deleteProject, editRow }) => {
  const mostrarAlerta = () => {
    alert(`Do you want to delete the Project "${project.projectInfo}"`);
  };
  
  return (
    <>
    
      <td className="projectInfo">
        <p>{project.projectInfo}</p>
        <span className="createdAt">{project.createdAt}</span>
      </td>
      <td className="ProjectManager">{project.ProjectManager}</td>
      <td className="Assignedto">{project.Assignedto}</td>
      <td className="Status">
        <button className="Status">{project.Status}</button>
      </td>
      <td>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img src={More} alt="" />
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to={`/edit/${project.id}`}>
              <button onClick={() => editRow(project)}>
                <img src={Edit} alt="" />
                Edit
              </button>
            </Link>
            <button onClick={() => mostrarAlerta(deleteProject(project.id))}>
              <img src={Trash} alt="" />
              Delete
            </button>
          </div>
        </div>
      </td>
    </>
  );
};

export default Projects;
