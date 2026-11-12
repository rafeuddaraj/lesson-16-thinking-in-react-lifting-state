# Small examples (Part 5 and Part 6)

Before moving on to TaskFlow, we use two small examples to see why state has to be lifted up. Each example has two versions:

- **`before`**: the state lives inside each component. The problem shows up here.
- **`after`**: the state is lifted into the common parent. The problem is gone.

| Example | before | after |
|---|---|---|
| 1. The same name in two places | [`1-name-box/before`](1-name-box/before) | [`1-name-box/after`](1-name-box/after) |
| 2. Accordion, only one open at a time | [`2-accordion/before`](2-accordion/before) | [`2-accordion/after`](2-accordion/after) |

## How to run them

The [UI kit](../ui-kit) must already be in your project. Then, for the version you want to see:

1. Copy `NameBox.jsx`, `Panel.jsx` and `Accordion.jsx` (whichever are present) into `src/examples/` (create the folder if it does not exist).
2. Replace your project's `src/App.jsx` with the `App.jsx` of that version.
3. Run `npm run dev` and look at it in the browser.

## 1. The same name in two places

**before:** two `NameBox` components each keep their own `name` state. Typing in one does not change the name in the other.

**after:** the `name` state lives in `App`. Both `NameBox` components receive `name` and `onNameChange` as props, so typing in one updates both.

## 2. Accordion

**before:** each `Panel` keeps its own `isOpen`, so all three panels open independently.

**after:** `Accordion` keeps one `activeIndex`, and each `Panel` receives `isActive` and `onShow`. Opening one panel closes the others.

> These files are the finished state of the examples as built step by step in the class. At the end of the class we delete the `examples` folder, so they are not part of [`final-code`](../final-code). The labels and texts inside the examples are in Bengali, as in the video.
