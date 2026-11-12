import { useState } from "react";
import { Page, Stack } from "./ui";
import NameBox from "./examples/NameBox";

export default function App() {
  const [name, setName] = useState("");

  return (
    <Page title="TaskFlow">
      <Stack>
        <NameBox label="প্রোফাইল" name={name} onNameChange={setName} />
        <NameBox label="হেডার" name={name} onNameChange={setName} />
      </Stack>
    </Page>
  );
}
