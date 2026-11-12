# TaskFlow: final code (Lesson 16)

The complete TaskFlow code at the end of Lesson 16. The app can add, toggle and delete tasks, and search and filter them.

## How to run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Production build (`dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check the code with ESLint |

Node.js 22.13 or newer is required (20.19+ also works).

## File structure

```
src/
├── main.jsx               # entry: StrictMode, createRoot, imports index.css
├── index.css              # @import "tailwindcss";
├── App.jsx                # <Page title="TaskFlow"><TaskApp /></Page>
├── components/
│   ├── TaskApp.jsx        # state: tasks, searchText, statusFilter
│   ├── SearchBar.jsx
│   ├── FilterTabs.jsx
│   ├── AddTaskForm.jsx
│   ├── TaskList.jsx
│   ├── TaskItem.jsx
│   └── TaskSummary.jsx
├── data/
│   └── tasks.js           # UI kit: the four starting tasks
└── ui/                    # UI kit: Page, Stack, Row, Card, Button, Input, ...
```

`src/ui` and `src/data` are the [UI kit](../ui-kit). The flow of the class and the explanation of the concepts are in the [main README](../README.md). The text shown in the app (labels, placeholders, buttons) is in Bengali, as in the video.
