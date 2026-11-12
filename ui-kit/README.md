# UI kit

This course focuses on React, not on design. So small UI components such as Button, Input and Card are prebuilt for TaskFlow. All of them are styled with Tailwind.

## How to add it

This folder contains two folders: **`ui`** and **`data`**. Copy both into the `src/` folder of your project.

```
taskflow/
└── src/
    ├── ui/        ← copy from here
    ├── data/      ← copy from here
    ├── App.jsx
    ├── index.css
    └── main.jsx
```

Tailwind must already be set up: `tailwindcss` and `@tailwindcss/vite` installed, the plugin added in `vite.config.js`, and `@import "tailwindcss";` in `src/index.css`. The steps are in the [main README](../README.md#2-set-up-tailwind-css-part-3).

## Usage

Every component can be imported from one place:

```jsx
import { Page, Stack, Row, Card, Button, Input, Checkbox } from "./ui";
import { initialTasks } from "./data/tasks";

export default function App() {
  return (
    <Page title="TaskFlow">
      <Stack>
        <Row>
          <Input placeholder="New task" />
          <Button>Add</Button>
        </Row>
        <Card>
          <Checkbox label="A task" />
        </Card>
      </Stack>
    </Page>
  );
}
```

## What is included

| Component | Purpose | Main props |
|---|---|---|
| `Page` | Wrapper for the whole page, with a title | `title`, `theme` (`"light"` or `"dark"`, default `"light"`) |
| `Stack` | Lays out its children top to bottom | `children` |
| `Row` | Lays out its children side by side | `children` |
| `Card` | A box with a border and a shadow | `children` |
| `Button` | A button | `variant` (`"primary"`, `"secondary"`, `"danger"`), plus any normal `button` prop |
| `Input` | A text input | any normal `input` prop (`value`, `onChange`, `placeholder`, ...) |
| `Checkbox` | A checkbox with a label | `label`, plus any normal `input` prop (`checked`, `onChange`, ...) |
| `Badge` | A small tag | `tone` (`"gray"`, `"green"`, `"red"`) |
| `Spinner` | A loading spinner | none |
| `Select` | A dropdown | any normal `select` prop |
| `navLinkClass` | Class helper for React Router's `NavLink` in later classes | none |

`Spinner`, `Select`, `Badge` and `navLinkClass` are not needed in this class. They are in the kit now because later classes use them.

## Why `...props`

`Button`, `Input`, `Checkbox`, `Select`, `Stack`, `Row` and `Card` all forward the rest of their props to the real HTML element with `...props`. So any normal prop such as `onClick`, `value`, `onChange` or `type="submit"` can be passed directly, with no extra code.

```jsx
export default function Button({ variant = 'primary', children, ...props }) {
  return (
    <button className={`... ${variants[variant]}`} {...props}>
      {children}
    </button>
  )
}
```

## Data

[`data/tasks.js`](data/tasks.js) holds the four starting tasks for TaskFlow. The task titles are written in Bengali, as in the video. The shape of each task is:

```js
export const initialTasks = [
  { id: 1, title: '...', done: true },
  { id: 2, title: '...', done: true },
  { id: 3, title: '...', done: false },
  { id: 4, title: '...', done: false },
]
```

The first two tasks start as done, and the last two as not done.
