import { useState } from "react";
import { Card, Button } from "../ui";

export default function Panel({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card>
      <h3>{title}</h3>
      {isOpen ? (
        <p>{children}</p>
      ) : (
        <Button onClick={() => setIsOpen(true)}>দেখান</Button>
      )}
    </Card>
  );
}
