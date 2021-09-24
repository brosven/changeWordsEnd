import React, { useState } from "react";
import "./index.css";
import changeVerbEnd from "./word-functions/changeVerbEnd";

const App = () => {
  const [text, setText] = useState("Тут будет результат");
  const [verb, setVerb] = useState("");
  const [pronoun, setPronoun] = useState("");
  return (
    <div className="container">
      <p className="resultText">{text}</p>
      <div className="buttons-container">
        <input
          value={verb}
          onChange={(evt) => setVerb(evt.target.value)}
          placeholder="Введите глагол"
        />
        <input
          value={pronoun}
          onChange={(evt) => setPronoun(evt.target.value)}
          placeholder="Введите местоимение"
        />
        <button onClick={() => setText(changeVerbEnd(verb, pronoun))}>
          Ввод
        </button>
      </div>
    </div>
  );
};

export default App;
