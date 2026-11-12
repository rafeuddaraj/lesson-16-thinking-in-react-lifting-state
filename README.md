# TaskFlow: Tailwind Setup, Thinking in React and Lifting State Up

**Lesson 16 · IC MERN Stack Career Path · Batch 6 · Instructor: Sumit Saha**

Up to this lesson we learned one concept at a time: props, state, lists and events. From here on we put them together and build one **complete app**, called **TaskFlow** (a task manager). The goal is not only to build the app, but to learn how to *think* about an app in React.

This repository has everything you need for the lesson: the final code, the UI kit, the small examples and a summary of the class.

---

## Table of contents

1. [What is in this repository](#what-is-in-this-repository)
2. [Quick start: run the final code](#quick-start-run-the-final-code)
3. [Following along with the class](#following-along-with-the-class)
4. [What the class covers](#what-the-class-covers)
5. [Thinking in React: the five steps](#thinking-in-react-the-five-steps)
6. [TaskFlow structure](#taskflow-structure)
7. [Two common mistakes](#two-common-mistakes)
8. [Versions used](#versions-used)
9. [Troubleshooting](#troubleshooting)
10. [Documentation and references](#documentation-and-references)
11. [Next class](#next-class)

---

## What is in this repository

| Folder | What it contains | When you need it |
|---|---|---|
| [`final-code/`](final-code) | The **complete final code** of TaskFlow at the end of the class (Vite + React + Tailwind) | If you missed the class or want to compare your code |
| [`ui-kit/`](ui-kit) | The prebuilt UI kit: the `ui/` and `data/` folders | If you code along with the class (Part 4) |
| [`examples/`](examples) | The small examples from Part 5 and Part 6, each with a `before` (state kept inside) and an `after` (state lifted up) version | If you want to understand lifting state up in depth |

> The text shown inside the app itself (labels, placeholders, buttons) is in Bengali, exactly as in the video. The code, file names and this documentation are in English.

---

## Quick start: run the final code

Node.js must be installed first (see [versions](#versions-used)).

```bash
git clone https://github.com/rafeuddaraj/lesson-16-thinking-in-react-lifting-state.git
cd lesson-16-thinking-in-react-lifting-state/final-code
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser. You can add tasks, toggle them, delete them, search and filter.

If you do not have `git`, use **Code → Download ZIP** on GitHub, open the `final-code` folder, and run `npm install` and `npm run dev` there.

Other commands:

```bash
npm run build     # production build
npm run lint      # check the code with ESLint
npm run preview   # preview the production build locally
```

---

## Following along with the class

In the class we start from scratch. You can follow the same steps.

### 1. Create a new Vite project (Part 2)

```bash
npm create vite@latest taskflow -- --template react
```

The prompts and the answers used in the class:

- **Which linter to use?** → ESLint
- **Install with npm and start now?** → **No** (we run the commands ourselves)

```bash
cd taskflow
npm install
npm run dev
```

When you see the Vite demo page, the project is working. Then we clean it up:

- Remove everything in `src/App.jsx` and keep a tiny `App` component that only renders `<h1>TaskFlow</h1>`
- Delete `src/App.css`, the `src/assets` folder and `public/icons.svg` (the demo page's styles, images and icons)
- Empty `src/index.css` completely (so the old styles do not clash with Tailwind's base styles)

### 2. Set up Tailwind CSS (Part 3)

Open a new terminal (leave the dev server running in the first one):

```bash
npm install tailwindcss @tailwindcss/vite
```

Why two packages: `tailwindcss` is Tailwind itself, and `@tailwindcss/vite` is the plugin that connects it to Vite.

Add the plugin in `vite.config.js`:

```js
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

Put a single line in `src/index.css`:

```css
@import "tailwindcss";
```

`src/main.jsx` already has `import './index.css'`. Vite restarts the dev server by itself when `vite.config.js` changes.

When the heading in the browser turns small and plain, Tailwind has loaded (this is Tailwind resetting the browser's default styles). Then verify with classes in `App.jsx`:

```jsx
<h1 className="text-3xl font-bold text-blue-600">TaskFlow</h1>
```

If the text is large, bold and blue, Tailwind is fully working.

### 3. Add the UI kit (Part 4)

This course focuses on React, not on design. So small UI components such as Button, Input and Card are prebuilt, all styled with Tailwind.

Inside the [`ui-kit/`](ui-kit) folder there are two folders: `ui` and `data`. Copy both into the `src/` folder of your project:

```
taskflow/
└── src/
    ├── ui/      ← ui-kit/ui
    ├── data/    ← ui-kit/data
    ├── App.jsx
    └── main.jsx
```

More details: [`ui-kit/README.md`](ui-kit/README.md).

### 4. The rest of the code

The code for Part 5 to Part 12 is built step by step in the video. If you get stuck anywhere, compare with [`final-code/src`](final-code/src).

---

## What the class covers

| Part | Topic | Key idea |
|---|---|---|
| 1 | From today, one complete app: TaskFlow | We learned things separately so far; now we combine them into one app |
| 2 | New project | `npm create vite@latest`, cleaning up the demo |
| 3 | Tailwind CSS setup | `tailwindcss` + `@tailwindcss/vite`, `@import "tailwindcss"` |
| 4 | UI built in advance | Adding the UI kit; why `Button.jsx` uses `...props` |
| 5 | Example 1: the same name in two places | Two components with separate state do not stay in sync, so lift the state up |
| 6 | Example 2: Accordion | Only one panel open at a time, so the parent keeps `activeIndex` |
| 7 | Thinking in React: from mockup to components | Breaking the UI into a component hierarchy |
| 8 | Step 2: a static version | Only props, no state |
| 9 | Step 3: which values are state | Finding the minimal state; anything you can calculate is not state |
| 10 | Step 4: where state lives | In the closest common parent |
| 11 | Step 5: data flows back up | `onAddTask`, `onToggleTask`, `onDeleteTask` |
| 12 | Deliberate mistakes | What happens when state lives in the wrong place |
| 13 | Summary and next class | A recap of the key rules |

### Lifting state up: the core rule

> **Data flows down (props), events go up (functions).**
> **When several components need the same data, the state lives in their closest common parent, and every piece of state has exactly one owner.**

#### Example 1: the same name in two places ([`examples/1-name-box`](examples/1-name-box))

If two `NameBox` components each keep their own state, typing in one does not change the other. The fix: move the state into `App` and pass `name` and `onNameChange` down as props.

```jsx
// App.jsx (after)
const [name, setName] = useState("");

<NameBox label="Profile" name={name} onNameChange={setName} />
<NameBox label="Header"  name={name} onNameChange={setName} />
```

(In the actual example files the two labels are written in Bengali, as in the video.)

#### Example 2: Accordion ([`examples/2-accordion`](examples/2-accordion))

If every `Panel` keeps its own `isOpen`, all panels open independently. If the parent `Accordion` keeps an `activeIndex`, opening one closes the others. In other words, lifting state up gives the parent *control*.

```jsx
// Accordion.jsx (after)
const [activeIndex, setActiveIndex] = useState(0);

<Panel isActive={activeIndex === index} onShow={() => setActiveIndex(index)} />
```

---

## Thinking in React: the five steps

The five steps from React's [official guide](https://react.dev/learn/thinking-in-react), applied to TaskFlow:

1. **Break the mockup into components.** `TaskApp` → `SearchBar`, `FilterTabs`, `AddTaskForm`, `TaskList` → `TaskItem`, and `TaskSummary`.
2. **Build a static version first.** No state, only props flowing down. It looks right, but nothing works yet.
3. **Find the minimal state.** State: `tasks`, `searchText`, `statusFilter`. **Not** state: the filtered list (`visibleTasks`) and the number of finished tasks (`doneCount`), because both can be calculated from `tasks`.
4. **Decide where the state lives.** In `TaskApp`, because the search box, the filter and the list all need this data.
5. **Add inverse data flow.** Pass `onAddTask`, `onToggleTask` and `onDeleteTask` down as functions; when a child calls one, the parent's state changes.

---

## TaskFlow structure

```
App
└── Page (UI kit)
    └── TaskApp                ← state lives here: tasks, searchText, statusFilter
        ├── SearchBar          ← searchText, onSearchChange
        ├── FilterTabs         ← statusFilter, onFilterChange
        ├── AddTaskForm        ← onAddTask (keeps its own small state: title)
        ├── TaskList           ← tasks (visibleTasks), onToggleTask, onDeleteTask
        │   └── TaskItem       ← task, onToggle, onDelete
        └── TaskSummary        ← total, done
```

The core of `TaskApp`:

```jsx
const [tasks, setTasks] = useState(initialTasks);
const [searchText, setSearchText] = useState("");
const [statusFilter, setStatusFilter] = useState("all");

// not state: calculated on every render
const visibleTasks = tasks.filter(/* matches the search text and the filter */);
const doneCount = tasks.filter((task) => task.done).length;
```

Full code: [`final-code/src/components/TaskApp.jsx`](final-code/src/components/TaskApp.jsx).

---

## Two common mistakes

In Part 12 we make two mistakes on purpose, the kind beginners often make.

**Mistake 1: keeping `done` in the state of each `TaskItem`.**
Result: the checkbox ticks, but the "done" count and the filter do not change, because the `tasks` array in `TaskApp` never learns that something changed. When the same information lives in two places, the copies drift apart.
Fix: `done` lives only in the `tasks` array, and `TaskItem` just calls `onToggle(task.id)`.

**Mistake 2: keeping the filtered list (`visibleTasks`) in state.**
Result: adding a new task increases the total, but the list does not show it, because the state took its initial value from `tasks` only once, on the first render.
Fix: anything that can be calculated from other state is not state. Make it a normal variable and run `tasks.filter(...)` on every render.

---

## Versions used

| Package | Version |
|---|---|
| React / React DOM | 19.3.1 |
| Vite | 8.3.7 |
| `@vitejs/plugin-react` | 6.3.0 |
| Tailwind CSS / `@tailwindcss/vite` | 4.3.5 |
| ESLint | 10.14.0 |
| Node.js | 22.13 or newer (20.19+ also works) |

The final code includes a `package-lock.json`, so `npm install` gives you exactly these versions.

---

## Troubleshooting

- **Node version error during `npm install` or `npm run dev`:** run `node -v`. Vite 8 needs Node 20.19+ or 22.13+.
- **Tailwind styles are not applied:** check that `vite.config.js` includes the `tailwindcss()` plugin, that `src/index.css` contains `@import "tailwindcss";`, and that `main.jsx` has `import './index.css'`.
- **`Failed to resolve import "./ui"`:** make sure the `ui-kit/ui` folder was placed as `src/ui`.
- **Port 5173 is busy:** stop the previous dev server (`Ctrl + C`), or use the new port Vite prints.
- **React warning about the `checked` prop:** when you pass `checked` you must also pass `onChange`, otherwise the field becomes read-only.

---

## Documentation and references

- [Thinking in React](https://react.dev/learn/thinking-in-react)
- [Sharing State Between Components](https://react.dev/learn/sharing-state-between-components)
- [Choosing the State Structure (Avoid redundant state)](https://react.dev/learn/choosing-the-state-structure#avoid-redundant-state)
- [State: A Component's Memory](https://react.dev/learn/state-a-components-memory)
- [`useState` reference](https://react.dev/reference/react/useState)
- [Tailwind CSS: install with Vite](https://tailwindcss.com/docs/installation/using-vite)
- [Vite guide](https://vite.dev/guide/)

---

## Next class

When `AddTaskForm` sends data to a server, it will need states such as "sending", "success" and "error". How do we organize all that state as it keeps growing? We will see that in **Lesson 17: form status and structuring state**.
