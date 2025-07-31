
# 🟦 Top Progress Bar

A lightweight, customizable **top-loading progress bar** for React apps. Designed to be globally accessible with the `useTopBar()` hook and no external dependencies. Ideal for showing loading states during async operations like route transitions, API calls, or dynamic UI rendering.

---

## 🚀 Features

- 🔁 Global control with `useTopBar()`
- ⏱ Continuous, step, and manual percentage modes
- 🎨 Customizable color, height, and animation speed
- 💡 Zero dependencies — pure React + CSS
- 🌐 SSR-friendly and easy to integrate into any React project

---

## 📦 Installation

```bash
npm install top-progress-bar
# or
pnpm add top-progress-bar
# or
yarn add top-progress-bar
````

---

## 🛠️ Usage

### 1️⃣ Wrap your app in the `TopProgressBarProvider`

```tsx
// App.jsx or Layout.jsx
import { TopProgressBarProvider } from 'top-progress-bar';

function App() {
  return (
    <TopProgressBarProvider color="#1d4ed8" height="3px" speed={300}>
      <YourApp />
    </TopProgressBarProvider>
  );
}
```

### 2️⃣ Use the `useTopBar` hook anywhere

```tsx
import { useTopBar } from 'top-progress-bar';

function ExampleComponent() {
  const { start, step, set, complete } = useTopBar();

  const handleLoad = async () => {
    start();                  // auto-starts at 5%, increases automatically
    await delay(1000);
    step(20);                 // add 20%
    await delay(500);
    set(80);                  // jump to 80%
    await delay(500);
    complete();               // fill to 100% then hide
  };

  return <button onClick={handleLoad}>Load Something</button>;
}

function delay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}
```

---

## ⚙️ API

### `TopProgressBarProvider` Props

| Prop     | Type     | Default   | Description                                |
| -------- | -------- | --------- | ------------------------------------------ |
| `color`  | `string` | `#2563eb` | The color of the progress bar              |
| `height` | `string` | `4px`     | Height of the bar (e.g., `"3px"`, `"5px"`) |
| `speed`  | `number` | `300`     | Auto-progress speed (ms interval)          |

---

### `useTopBar()` Hook

Provides access to control functions:

| Method       | Description                                          |
| ------------ | ---------------------------------------------------- |
| `start()`    | Starts auto-incrementing progress bar                |
| `step(n)`    | Increases progress by `n` percent (e.g., `step(10)`) |
| `set(n)`     | Sets the exact progress (e.g., `set(80)`)            |
| `complete()` | Finishes the bar at 100%, then hides after a delay   |

> ❗ The bar is automatically hidden when `complete()` is called or `set(100)` is reached.

---

## 🧪 Example

```tsx
const bar = useTopBar();

useEffect(() => {
  bar.start();

  fetchData().then(() => {
    bar.complete();
  });
}, []);
```

---

## 🧱 Built With

* ✅ React 17+ or 18+
* ✅ Pure CSS transitions
* ✅ React Context + `useRef` + `forwardRef`
* ❌ No third-party animation libraries

---

## 📝 License

MIT © [jamalofficial](https://github.com/jamalofficial)

---

## 🧑‍💻 Contributing

Contributions are welcome! Please open an issue or submit a PR.

---

## 🌐 Links

* 🔗 **NPM**: [https://github.com/jamalofficial/top-progress-bar](https://github.com/jamalofficial/top-progress-bar)
* 🐙 **GitHub**: [https://www.npmjs.com/package/@jamalofficial/top-progress-bar](https://www.npmjs.com/package/@jamalofficial/top-progress-bar)

---
