import { useState, useEffect} from 'react'
import './App.css'

function App() {

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [
      {text: 'Написать Project on React ',
        id: 14,
        completed: true
      },
      {
        text: 'Нажми меня',
        id: 13,
        completed: false
      }
    ]
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  const [inputValue, setInputValue] = useState('')

  const addTodo = () => {
    if (inputValue.trim()) {

      setTodos([...todos, {
        text: inputValue,
        id: Date.now(),
        completed: false
        }
      ]) 
    }
    setInputValue('')
  }

  const clearCompleted = () => {
    setTodos(
      todos.filter(todo => todo.completed === false)
    )
  }

  const toggleAll = () => {
    setTodos(
      todos.map(todo => 
        ({...todo, completed: true})
      )
    )
  }

  const removeTodo = (id) => {
    setTodos(
      todos.filter(todo => todo.id !== id)
    )
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    )
  }


  
  return (

    <div className='todo-area'>

      <h1>Список задач ({todos.length})</h1>

      <input 
        type="text" className="todo-input" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Напиши новую задачу...'
        onKeyDown={(e) => e.key === 'Enter' && addTodo()}
      />

      <div className="btns-area">
        <button className="confirm-input" onClick={() => addTodo()}>Подтвердить</button>
        <button className="clear-completed" onClick={() => clearCompleted()}>Очистить выполненные</button>
        <button className="toggle-all" onClick={() => toggleAll()}>Отметить все</button>

      </div>

      <ul>
        {todos.map(todo =>
          <li 
            key={todo.id} 
            className={`todo-item ${todo.completed ? 'completed' : 'notCompleted'}`}
          >
            <div className="todo-text-area">
              <p className='todo-text' onClick={() => toggleTodo(todo.id)}>
                {todo.text}
              </p>
            </div>
            <button className="removeTodo" onClick={() => removeTodo(todo.id)}>Delete</button>
          </li>
        )}
      </ul>


    </div>
    
  );
}

export default App
