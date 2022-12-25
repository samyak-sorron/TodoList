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
      complete: false,
    }

    setTodos(()=>[newTodo, ...todos])
  }

  const handleDelete=(id)=>{
    const newTodos= todos.filter((e1)=> e1.id !== id)
    setTodos(newTodos,...todos)
  }

  const handleComplete=(id)=>{
    const updatedTodos=todos.map((e1)=>{
      if(e1.id === id){
        e1.complete = true
      }
      return e1;
    })

    setTodos(updatedTodos)
  }

  const elements= todos.map((e1)=>(
    <TodoItem
    text={e1.text}
    id={e1.id}
    key={e1.key}
    todo={e1}
    complete={e1.complete}
    handleDelete={handleDelete}
    handleComplete={handleComplete}
    />
    
  ))

  console.log(todos)
  return (
    
    <div className="App">
      <header className="App-header">
        <i>made by Samyak</i>
        <h1>Todo Form</h1>
        <TodoForm addTodo={addTodo}/>
        {elements}
      </header>
    </div>
    
  );
}

export default App;