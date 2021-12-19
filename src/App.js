import './App.css';
import { useState } from 'react';

function App() {

  const [todo, setTodo] = useState([]);
  const handleAddTodo = () => {
    const listTodo = [...todo, `Task ${todo.length}`];
    setTodo(listTodo);
  }
    const removeItem = (index) => {
      const remove = todo.filter(el => todo.indexOf(el)!==index)
      setTodo(remove)
    }
  return (
    <div className="todo-container">
      <div className="todo-form">
      <br/>
      <h2>Todo List</h2>
      <br/>
      <input className="input" type="text" placeholder="add task" />
      <input type="submit" onClick={handleAddTodo} value="ADD" />
      {
        todo.map(el => <tr style={{ display: "flex" }}><li>{el}</li> <span onClick={()=>removeItem(todo.indexOf(el))} className="close-symbol">X</span> </tr>)
      }
      </div>
    </div>
  );
}

export default App;
