const API_URL = "http://localhost:5000/tasks";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("taskForm");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  const loadTasks = async () => {
    const res = await fetch(API_URL);
    const tasks = await res.json();

    taskList.innerHTML = "";
    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.innerHTML = `${task.title} <button onclick="deleteTask(${task.id})">🗑</button>`;
      taskList.appendChild(li);
    });
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = taskInput.value;

    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    taskInput.value = "";
    loadTasks();
  });

  window.deleteTask = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    loadTasks();
  };

  loadTasks();
});
