import { Page, Stack } from "./ui";
import NameBox from "./examples/NameBox";

export default function App() {
  return (
    <Page title="TaskFlow">
      <Stack>
        <NameBox label="প্রোফাইল" />
        <NameBox label="হেডার" />
      </Stack>
    </Page>
  );
}
