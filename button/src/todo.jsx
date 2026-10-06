import  { useState } from "react"

export default function  app(){
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState("all")
  const [error, setError] = useState("")
  //add todo
  function addTodo(){
    if(input.trim() === ""){
      setError("Todo cannot be empty")
      return;
    }

    const newTodo = {
      id: Date.now(),
      title:input.trim(),
      completed: false
    };

    setTodos([...todos, newTodo]);
    setInput("")
    setError("")
  }

  //delete todo
  function deleteTodo(id){
    setTodos(todos.filter(todo => todo.id != id))
  }

  //toggle completed
  function toggleTodo(id){
    setTodos(todos.map(todo => (todo.id === id ? {...todo, completed: !todo.completed}:todo)
    ))
  }

  const filteredTodos = todos.filter(todo => {
    if(filter === "completed"){
      return todo.completed;
    }
    if(filter === "pending"){
      return !todo.completed
    }

    return true;
  })

  return (
    <div>
      <h1>Todo Application</h1>
      <input
        type = "text"
        placeholder="enter todo"
        value = {input}
        onChange={e => {
          setInput(e.target.value)
          setError("")
         }}
        />

        <button onClick = {addTodo}>Add</button>
        {error && <p>{error}</p>}

        <div>
          <button onClick = {() => setFilter("all")}>all</button>
          <button onClick={() => setFilter("completed")}>completed</button>
          
        </div>
    </div>
  )
}