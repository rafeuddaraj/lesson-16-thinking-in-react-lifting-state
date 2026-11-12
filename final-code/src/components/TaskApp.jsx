import { useState } from "react";
import { Stack } from "../ui";
import { initialTasks } from "../data/tasks";
import SearchBar from "./SearchBar";
import FilterTabs from "./FilterTabs";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import TaskSummary from "./TaskSummary";

export default function TaskApp() {
  const [tasks, setTasks] = useState(initialTasks);
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const visibleTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "done" ? task.done : !task.done);
    return matchesSearch && matchesStatus;
  });
  const doneCount = tasks.filter((task) => task.done).length;

  function handleAddTask(title) {
    setTasks([...tasks, { id: Date.now(), title, done: false }]);
  }

  function handleToggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <Stack>
      <SearchBar searchText={searchText} onSearchChange={setSearchText} />
      <FilterTabs statusFilter={statusFilter} onFilterChange={setStatusFilter} />
      <AddTaskForm onAddTask={handleAddTask} />
      <TaskList
        tasks={visibleTasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
      <TaskSummary total={tasks.length} done={doneCount} />
    </Stack>
  );
}
