import { Page, Stack } from "./ui";
import Panel from "./examples/Panel";

export default function App() {
  return (
    <Page title="TaskFlow">
      <Stack>
        <Panel title="state কী">কোনো component যা মনে রাখে।</Panel>
        <Panel title="props কী">parent থেকে child-এ পাঠানো ডেটা।</Panel>
        <Panel title="event কী">ক্লিক বা টাইপের মতো ঘটনা।</Panel>
      </Stack>
    </Page>
  );
}
