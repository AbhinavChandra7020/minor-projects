import { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      addTask();
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="bg-gradient-to-b from-green-400 to-green-300 min-h-screen pt-[100px]">
      <div className="text-center">
        <div className="text-6xl font-semibold">To-Do List</div>
        <div>
          <div className="flex items-center justify-center gap-2 mt-8 mb-8">
            <input
              type="text"
              className="bg-white/50 border border-gray-300 text-gray-900 font-semibold rounded-lg px-4 py-2 focus:border-transparent focus:ring-0 dark:bg-gray-800 dark:text-white placeholder-gray-400"
              placeholder="Enter a task..."
              value={newTask}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <button
              type="button"
              className="text-black bg-yellow-400 hover:bg-yellow-500 font-semibold rounded-lg px-4 py-2 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-600 focus:outline-none"
              onClick={addTask}
            >
              Add Task
            </button>
          </div>

          <ol>
            {tasks.map((task, index) => (
              <li key={index} className="flex items-center justify-center gap-2 mt-2">
                <div className="font-semibold">
                  <span className="text">{task}</span>
                </div>
                <button
                  type="button"
                  className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-semibold rounded-lg text-sm px-5 py-2.5 mx-2 my-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="text-black bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-semibold rounded-lg text-sm px-5 py-2.5 mx-2 my-2 border border-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  onClick={() => moveTaskUp(index)}
                >
                  Move Up
                </button>
                <button
                  type="button"
                  className="text-black bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-semibold rounded-lg text-sm px-5 py-2.5 mx-2 my-2 border border-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  onClick={() => moveTaskDown(index)}
                >
                  Move Down
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
