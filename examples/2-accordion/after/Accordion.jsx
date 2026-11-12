import { useState } from "react";
import { Stack } from "../ui";
import Panel from "./Panel";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { title: "state কী", body: "কোনো component যা মনে রাখে।" },
    { title: "props কী", body: "parent থেকে child-এ পাঠানো ডেটা।" },
    { title: "event কী", body: "ক্লিক বা টাইপের মতো ঘটনা।" },
  ];

  return (
    <Stack>
      {items.map((item, index) => (
        <Panel
          key={item.title}
          title={item.title}
          isActive={activeIndex === index}
          onShow={() => setActiveIndex(index)}
        >
          {item.body}
        </Panel>
      ))}
    </Stack>
  );
}
