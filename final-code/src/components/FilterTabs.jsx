import { Row, Button } from "../ui";

const options = [
  { value: "all", label: "সব" },
  { value: "active", label: "বাকি" },
  { value: "done", label: "শেষ" },
];

export default function FilterTabs({ statusFilter, onFilterChange }) {
  return (
    <Row>
      {options.map((option) => (
        <Button
          key={option.value}
          variant={option.value === statusFilter ? "primary" : "secondary"}
          onClick={() => onFilterChange(option.value)}
        >
          {option.label}
        </Button>
      ))}
    </Row>
  );
}
