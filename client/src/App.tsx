import React, {useState} from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import SaveButton from "./components/Button";

function App() {
  const [todoText, setTodoText] = useState();
  return (
    <div className="App">
      <NewTodo valueChanged={setTodoText} />
      <SaveButton disabled={!todoText}/>
    </div>
  );
}

export default App;
