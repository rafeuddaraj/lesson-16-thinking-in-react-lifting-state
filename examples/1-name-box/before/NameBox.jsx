import { useState } from "react";
import { Input } from "../ui";

export default function NameBox({ label }) {
  const [name, setName] = useState("");

  return (
    <div>
      <p>{label}</p>
      <Input value={name} onChange={(e) => setName(e.target.value)} />
      <p>নাম: {name}</p>
    </div>
  );
}
