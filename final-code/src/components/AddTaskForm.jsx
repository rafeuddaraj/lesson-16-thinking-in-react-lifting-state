import { useState } from "react";
import { Row, Input, Button } from "../ui";

export default function AddTaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = title.trim();
    if (trimmed === "") return;
    onAddTask(trimmed);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="নতুন কাজ"
        />
        <Button type="submit">যোগ করুন</Button>
      </Row>
    </form>
  );
}
