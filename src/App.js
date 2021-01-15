import React,{useState} from "react";
import "./App.css";
import Todolist from "./components/TodoList";
import Form from "./components/Form";
const App = () => {
  const [inputText,setInputText] = useState("")
  const [todos,setTodos] = useState([])
  return (
    <>
      <div className="App">
        <header>
          <h1>Lucas's Todo List</h1>
        </header>

        <Form setInputText={setInputText} setTodos={setTodos} todos={todos} inputText={inputText} />
        <Todolist />
      </div>
    </>
  );
};

export default App;
