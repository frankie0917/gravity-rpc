import { Component, createSignal } from 'solid-js';
import { api } from './api';
import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  const [text, setText] = createSignal('');
  return (
    <div class={styles.App}>
      <div>text: {text}</div>
      <button
        onClick={() => {
          api.foo.greetings().then((res) => {
            setText(res.data || 'failed');
          });
        }}
      >
        click
      </button>
    </div>
  );
};

export default App;
