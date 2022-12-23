import './App.css';
import {useState} from 'react'
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {

  const[todos,setTodos]=useState([]);

  

  const addTodo=(text)=>{
    let id=1;

    if(todos.length>0){
        id= todos[0].id+1;
      }

    const newTodo={
      text:text,
      id:id,
      key:id,
    }

    setTodos(()=>[newTodo, ...todos])
  }

  const handleDelete=(id)=>{
    const newTodos= todos.filter((e1)=> e1.id != id)
    setTodos(newTodos,...todos)
  }

  const elements= todos.map((e1)=>(
    <TodoItem
    text={e1.text}
    id={e1.id}
    key={e1.key}
    handleDelete={handleDelete}
    />
    
  ))

  console.log(todos)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo Form</h1>
        <TodoForm addTodo={addTodo}/>
        {elements}
      </header>
    </div>
  );
}

export default App;