import React, { useState,useEffect } from "react";
import "./App.css";
import Todolist from "./components/TodoList";
import Form from "./components/Form";
const App = () => {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtered,setFiltered] = useState([])
  useEffect(()=>{
    getLocalTodos()
  },[])
  
  useEffect(()=>{
    filterHandler()
    saveLocalTodos()
},[todos,status])
  const filterHandler = () =>{
    switch(status){
      case 'completed' : setFiltered(todos.filter(todo =>todo.completed === true)) 
      break
      case 'uncompleted' : setFiltered(todos.filter(todo =>todo.completed === false))
      break
      default:
        setFiltered(todos)
        break
    }
  }
  const getLocalTodos = () =>{
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos',JSON.stringify([]))
    }else {
      let localTodo = JSON.parse(localStorage.getItem('todos'))
      setTodos(localTodo)
    }
  }
  const saveLocalTodos = () =>{
      localStorage.setItem('todos',JSON.stringify(todos))
    }
  
  return (
    <>
      <div className="App">
        <header>
          <h1>Lucas's Todo List</h1>
        </header>

        <Form
          setInputText={setInputText}
          setTodos={setTodos}
          todos={todos}
          inputText={inputText}
          setStatus={setStatus}
          filtered={filtered}
        />
        <Todolist setTodos={setTodos} todos={todos} filtered={filtered} />
      </div>
    </>
  );
};

export default App;
