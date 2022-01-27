import logo from "./logo.svg";
import styles from "./App.module.css";
import { createSignal, createEffect } from "solid-js";

function App() {
  const [first, setFirst] = createSignal("JSON");
  const [last, setLast] = createSignal("Bourne");

  const capitalName = (name) => name.toUpperCase();

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <div>
          <input
            name="first_name"
            value={first()}
            onInput={(e) => {
              setFirst(e.target.value);
            }}
          />
        </div>
        <p>
          Hello, {capitalName(first())} {capitalName(last())}
        </p>
      </header>
    </div>
  );
}

export default App;
