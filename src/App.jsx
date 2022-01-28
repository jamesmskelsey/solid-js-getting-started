import logo from "./logo.svg";
import styles from "./App.module.css";
import {
  createSignal,
  createMemo,
  Show,
  Switch,
} from "solid-js";

import NamesByIndex from "./components/NamesByIndex";
// import NamesByFor from "./components/NamesByFor";

function App() {
  const [first, setFirst] = createSignal("JSON");
  const [last, setLast] = createSignal("Bourne");
  const [loggedIn, setLoggedIn] = createSignal(false);
  const [people, setPeople] = createSignal([
    { id: 1, name: "James", age: 38 },
    { id: 2, name: "Ayako", age: 21 },
    { id: 3, name: "Aiden", age: 13 },
    { id: 4, name: "Mei", age: 7 },
  ]);

  const capitalName = (name) => name.toUpperCase();

  const nameValue = (name) => {
    console.log("Calculating value of", first());
    return name.split("").reduce((total, letter) => {
      return total + letter.charCodeAt(0);
    }, 0);
  };

  // testing memoization. took it out of the app to play with something else
  const nameValueMemoized = createMemo(() => {
    // return the value of the character codes of the name added up
    return nameValue(capitalName(first()));
  });

  // Yep. This toggles loggedin. Yep, that Show component only renders a logged in with no
  // way to log out. Point of the app is to play an experiment... not do anything useful.
  const toggle = () => {
    setLoggedIn(!loggedIn());
  };

  const validName = () => {
    return people()
      .reduce((a, b) => {
        return [...a, b.name.toLowerCase()];
      }, [])
      .includes(first().toLowerCase());
  };

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
      </header>
      <main>
        <div>
          <label for="first_name">
            When your entry is of high enough value...
          </label>
          <br></br>
          <input
            name="first_name"
            value={first()}
            onInput={(e) => {
              setFirst(e.target.value);
            }}
          />
          <p>
            {capitalName(first())} is{" "}
            {validName() ? "a valid name" : "an invalid name"}
          </p>
        </div>

        <Switch>
          <Match when={!loggedIn()}>
            <Show when={validName() && !loggedIn()}>
              <button onClick={toggle}>Login</button>
            </Show>
          </Match>
          <Match when={loggedIn()}>
            <NamesByIndex names={people()} />
            <button onClick={toggle}>Logout</button>
          </Match>
        </Switch>
      </main>
    </div>
  );
}

export default App;
