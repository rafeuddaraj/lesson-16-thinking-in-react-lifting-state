import { Input } from "../ui";

export default function SearchBar({ searchText, onSearchChange }) {
  return (
    <Input
      value={searchText}
      onChange={(e) => onSearchChange(e.target.value)}
      placeholder="কাজ খুঁজুন"
    />
  );
}
