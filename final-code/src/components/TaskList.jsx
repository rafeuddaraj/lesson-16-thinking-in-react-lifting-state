import { Stack } from "../ui";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <Stack>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggleTask}
          onDelete={onDeleteTask}
        />
      ))}
    </Stack>
  );
}
