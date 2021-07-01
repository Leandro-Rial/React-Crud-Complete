import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import ProjectsLists from "./Projects/ProjectsLists";
import AddProject from "./Projects/AddProject";
import EditProject from "./Projects/EditProject";
import { v4 as uuidv4 } from "uuid";

const Pages = () => {
  const projectsState = [
    {
      id: uuidv4(),
      projectInfo: "Landing page",
      createdAt: "Creation date:  09/09/2020 10:30 am",
      description: "Some Description",
      ProjectManager: "Walt Cosani",
      Assignedto: "Ignacio Truffa",
      Status: "Enabled",
    },
    {
      id: uuidv4(),
      projectInfo: "E-Commerce Shop",
      createdAt: "Creation date:  09/09/2020 10:30 am",
      description: "Some Description",
      ProjectManager: "Walt Cosani",
      Assignedto: "Ignacio Truffa",
      Status: "Enabled",
    },
    {
      id: uuidv4(),
      projectInfo: "CRM Linkroom",
      createdAt: "Creation date:  09/09/2020 10:30 am",
      description: "Some Description",
      ProjectManager: "Walt Cosani",
      Assignedto: "Ignacio Truffa",
      Status: "Enabled",
    },
  ];

  const [projects, setProjects] = useState(projectsState);

  const createProject = (project) => {
    project.id = uuidv4();
    setProjects([...projects, project]);
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const projectState = {
    id: null,
    projectInfo: "",
    createdAt: "Creation date:  09/09/2020 10:30 am",
    description: "",
    ProjectManager: "",
    Assignedto: "",
    Status: "",
  };

  const [editing, setEditing] = useState(false);
  const [currentProject, setCurrentProject] = useState(projectState);

  const editRow = (project) => {
    setEditing(true);

    setCurrentProject({
      id: project.id,
      projectInfo: project.projectInfo,
      createdAt: project.createdAt,
      description: project.description,
      ProjectManager: project.ProjectManager,
      Assignedto: project.Assignedto,
      Status: project.Status,
    });
  };

  const updateProject = (id, updateProject) => {
    setEditing(false);

    setProjects(
      projects.map((project) => (project.id === id ? updateProject : project))
    );
  };

  const sortedProjects = projects.sort((a, b) => (a.projectInfo < b.projectInfo ? -1 : 1))

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <ProjectsLists sortedProjects={sortedProjects} deleteProject={deleteProject} editRow={editRow} />
        )}
      />
      <Route
        path="/add-project"
        render={() => <AddProject createProject={createProject} />}
      />
      <Route
        path="/edit/:id"
        render={() => (
          <EditProject
            currentProject={currentProject}
            updateProject={updateProject}
          />
        )}
      />
    </Switch>
  );
};

export default Pages;
