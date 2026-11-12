import { Card, Button } from "../ui";

export default function Panel({ title, isActive, onShow, children }) {
  return (
    <Card>
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <Button onClick={onShow}>দেখান</Button>}
    </Card>
  );
}
