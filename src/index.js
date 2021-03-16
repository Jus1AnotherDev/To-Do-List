document.getElementById("showNewProjectForm").onclick = function() {
  document.getElementById("addNewProjectOverlay").style.display = "flex";
}

document.getElementById("showNewTaskForm").onclick = function() {
  document.getElementById("addNewTaskOverlay").style.display = "flex";
}

class project {
  constructor(id) {
    this.id = id;
    if(document.getElementById(id) == null) {
      let projectList = document.getElementById("projectList");
      let projectListItemList = document.createElement("ul");
      projectListItemList.style.display = "flex";
      projectList.appendChild(projectListItemList);
      let projectListItem = document.createElement("li");
      projectListItem.onclick = function() {
        selectCurrentProject(id);
      }
      projectListItem.id = id;
      projectListItem.innerHTML = this.id;
      projectListItemList.appendChild(projectListItem);
      let projectDeleteButtonListElement = document.createElement("li");
      projectListItemList.appendChild(projectDeleteButtonListElement);
      let projectDeleteButton = document.createElement("button");
      projectDeleteButton.innerHTML = "Delete";
      projectDeleteButton.onclick = function() {
        projectList.removeChild(projectListItemList);
      }
      projectDeleteButtonListElement.appendChild(projectDeleteButton);
      let taskList = document.createElement("div");
      taskList.id = id + "TaskList";
      let taskListDiv = document.getElementById("taskListDiv");
      taskListDiv.appendChild(taskList);
    }
  }
}

function createNewProject() {
  let newProjectTitle = document.getElementById("newProjectTitle").value;
  if (newProjectTitle != "" && newProjectTitle.length < 16) {
    let newProject = new project(newProjectTitle);
    document.getElementById("addNewProjectOverlay").style.display = "none";
    document.getElementById("newProjectTitle").value = "";
  } else {
    alert("Please enter a title which is less than 16 characters in length.")
  }
}

document.getElementById("createNewProjectSubmit").onclick = function() {
  createNewProject();
}

let defaultProject = new project("Default Project");

let currentProject = document.getElementById("Default Project");

let currentProjectTaskList = document.getElementById(currentProject.id + "TaskList");

function selectCurrentProject(id) {
  currentProjectTaskList.style.display = "none";
  currentProject = document.getElementById(id);
  currentProjectTaskList = document.getElementById(id + "TaskList");
  currentProjectTaskList.style.display = "initial";
}

class task {
  constructor(id) {
    this.id = id;
    let currentProjectTaskList = document.getElementById(currentProject.id + "TaskList");
    let newTaskList = document.createElement("ul");
    newTaskList.style.display = "flex";
    currentProjectTaskList.appendChild(newTaskList);
    let newTaskTitle = document.createElement("li");
    newTaskTitle.innerHTML = id;
    newTaskTitle.style.width = "15vw";
    newTaskList.appendChild(newTaskTitle);
    let newTaskDescription = document.createElement("li");
    newTaskDescription.style.width = "35vw";
    let newTaskDescriptionContent = document.createElement("p");
    newTaskDescriptionContent.innerHTML = document.getElementById("newTaskDescription").value;
    newTaskDescription.appendChild(newTaskDescriptionContent);
    newTaskList.appendChild(newTaskDescription);
    let newTaskDate = document.createElement("li");
    newTaskDate.innerHTML = document.getElementById("newTaskDate").value;
    newTaskList.appendChild(newTaskDate);
    let newTaskPriority = document.createElement("li");
    newTaskPriority.innerHTML = document.getElementById("newTaskPriority").value;
    newTaskList.appendChild(newTaskPriority);
    let deleteButtonListElement = document.createElement("li");
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = function() {
      currentProjectTaskList.removeChild(newTaskList);
    }
    deleteButtonListElement.appendChild(deleteButton);
    newTaskList.appendChild(deleteButtonListElement);
  }
}

function createNewTask() {
  if (document.getElementById("newTaskTitle").value != "" && document.getElementById("newTaskDescription").value != "" && document.getElementById("newTaskDate").value != "") {
    let newTaskId = document.getElementById("newTaskTitle").value;
    let newTask = new task(newTaskId);
    document.getElementById("addNewTaskOverlay").style.display = "none";
  } else {
    alert("Please enter all the details.")
  }
}

document.getElementById("createNewTaskSubmit").onclick = function() {
  createNewTask();
}