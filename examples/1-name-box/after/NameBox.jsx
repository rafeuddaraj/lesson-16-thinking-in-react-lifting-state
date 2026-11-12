import { Input } from "../ui";

export default function NameBox({ label, name, onNameChange }) {
  return (
    <div>
      <p>{label}</p>
      <Input value={name} onChange={(e) => onNameChange(e.target.value)} />
      <p>নাম: {name}</p>
    </div>
  );
}
