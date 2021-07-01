import React, { useState } from "react";
import Projects from "./Projects";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";

const ProjectsLists = ({ sortedProjects, deleteProject, editRow }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [ProjectsForPage] = useState(2);

  const indexOfLastProject = currentPage * ProjectsForPage;
  const indexOfFirstProject = indexOfLastProject - ProjectsForPage;
  const currentProjects = sortedProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPagesNum = Math.ceil(sortedProjects.length / ProjectsForPage);

  return (
    <>
      <div className="subheader">
        <h1 className="title-subheader">Mi projects</h1>
        <Link className="btn" to="/add-project">
          + Add Project
        </Link>
      </div>

      <div className="list">
        <input
          type="text"
          className="search"
          placeholder="Search..."
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Project info</th>
              <th scope="col">Project Manager</th>
              <th scope="col">Assigned to</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedProjects.length > 0 ? (
              currentProjects
                .filter((project) => {
                  if (searchTerm === "") {
                    return project;
                  } else if (
                    project.projectInfo
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return project;
                  }
                  return false;
                })
                .map((project) => (
                  <tr key={project.id}>
                    <Projects
                      project={project}
                      deleteProject={deleteProject}
                      editRow={editRow}
                    />
                  </tr>
                ))
            ) : (
              <tr>
                <td>No Users</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <Pagination pages={totalPagesNum} setCurrentPage={setCurrentPage} />
      </div>
    </>
  );
};

export default ProjectsLists;
