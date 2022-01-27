import logo from "./logo.svg";
import styles from "./App.module.css";
import { createSignal, createEffect, createMemo } from "solid-js";

function App() {
  const [first, setFirst] = createSignal("JSON");
  const [last, setLast] = createSignal("Bourne");

  const capitalName = (name) => name.toUpperCase();

  const nameValue = (name) => {
    console.log("Calculating value of", first());
    return name.split("").reduce((total, letter) => {
      return total + letter.charCodeAt(0);
    }, 0);
  };

  const nameValueMemoized = createMemo(() => {
    // return the value of the character codes of the name added up
    return nameValue(capitalName(first()));
  });

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
          {capitalName(first())} is worth {nameValueMemoized(first())}{" "}
          {nameValueMemoized(first())} {nameValueMemoized(first())}
        </p>
      </header>
    </div>
  );
}

export default App;
