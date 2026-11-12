import { Row, Checkbox, Button } from "../ui";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <Row>
      <Checkbox
        label={task.title}
        checked={task.done}
        onChange={() => onToggle(task.id)}
      />
      <Button variant="danger" onClick={() => onDelete(task.id)}>
        মুছুন
      </Button>
    </Row>
  );
}
