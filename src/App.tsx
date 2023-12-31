import React, { useState } from 'react';
import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

function App() {

  const [todos, setTodos] = useState<Todo[]>([])
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevState) => {
      return prevState.concat(newTodo)
    } )
  }

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevState) => {
      return prevState.filter(todo => todo.id !== todoId)
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
     <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
