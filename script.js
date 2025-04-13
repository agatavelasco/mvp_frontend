const API_URL = "http://localhost:5000/tasks";

const taskList = document.getElementById("task-list");
const addTaskBtn = document.getElementById("add-task");

function loadTasks() {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      taskList.innerHTML = "";
      data.forEach((task) => {
        const li = document.createElement("li");

        const iconWrapper = document.createElement("div");
        iconWrapper.className = "task-icon-wrapper";

        const icon = document.createElement("div");
        icon.className = "task-icon";
        icon.textContent = task.done ? "🎉" : "⏳";

        iconWrapper.appendChild(icon);

        const taskText = document.createElement("div");
        taskText.className = "task-text";

        const title = document.createElement("div");
        title.className = "task-title";
        title.textContent = task.title;

        const status = document.createElement("label");
        status.className = "task-status";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.done;

        checkbox.addEventListener("change", () => {
          fetch(`${API_URL}/${task.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ done: checkbox.checked }),
          }).then(loadTasks);
        });

        const statusText = document.createElement("span");
        statusText.textContent = task.done ? "Concluída" : "Concluir";

        status.appendChild(checkbox);
        status.appendChild(statusText);

        taskText.appendChild(title);
        taskText.appendChild(status);

        const content = document.createElement("div");
        content.className = "task-content";
        content.appendChild(iconWrapper);
        content.appendChild(taskText);

        const actions = document.createElement("div");
        actions.className = "task-actions";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "✖";
        deleteBtn.onclick = () => openModal(task.id);

        actions.appendChild(deleteBtn);

        li.appendChild(content);
        li.appendChild(actions);
        taskList.appendChild(li);
      });
    });
}
function addTask() {
  const title = document.getElementById("task-title").value;
  if (!title.trim()) return alert("Digite um título para a tarefa.");

  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  }).then(() => {
    document.getElementById("task-title").value = "";
    loadTasks();
  });
}
function deleteTask(id) {
  fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  }).then(loadTasks);
}

let taskIdToDelete = null;

function openModal(id) {
  taskIdToDelete = id;
  document.getElementById("confirm-modal").style.display = "flex";
}

function closeModal() {
  taskIdToDelete = null;
  document.getElementById("confirm-modal").style.display = "none";
}

document.getElementById("cancel-delete").addEventListener("click", closeModal);

document.getElementById("confirm-modal").addEventListener("click", (e) => {
  if (e.target.id === "confirm-modal") {
    closeModal();
  }
});

document.getElementById("confirm-delete").addEventListener("click", () => {
  if (taskIdToDelete !== null) {
    deleteTask(taskIdToDelete);
    closeModal();
  }
});

addTaskBtn.addEventListener("click", addTask);
window.onload = loadTasks;
