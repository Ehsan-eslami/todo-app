"use client"
import ThemeSwitcher from './components/ThemeSwitcher'
import Thumbnail from "./components/Thumbnail";
import styles from "./global.css";
import { useState, useEffect } from 'react';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [todosVal, setTodosVal] = useState('');
  const [left, setLeft] = useState(0);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setLeft(todos.filter((todo) => todo.status === 'pending').length);
  }, [todos]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
        // console.log(window.innerWidth);
    }
  }, []);

  const handleChange = (e) => {
    setTodosVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(todosVal.trim() !== '') {
      const newTodo = {
        id: Date.now().toString(36) + Math.random().toString(36).substr(2, 9),
        text: todosVal.trim(),
        status: 'pending'
      };
      setTodos([...todos, newTodo]);
      setTodosVal('');
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id) => {
    setTodos(todos.map((todo) => 
      todo.id === id ? { ...todo, status: 'done' } : todo
    ));
  };

  const handleDeleteAll = () => {
    setTodos(todos.filter((todo) => todo.status !== 'done'));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return todo.status === 'pending';
    if (filter === 'completed') return todo.status === 'done';
    return true;
  });

  return (
    <div className="h-screen w-screen bg-white dark:bg-[#161722]">
      <Thumbnail/>
      <section className="absolute flex flex-col gap-7 top-[50%] w-[80%] md:w-[60%] lg:w-[40%] h-[85%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex justify-between">
          <h1 className="font-bold text-4xl tracking-widest text-white">
            TODO
          </h1>
          <div className="my-auto">
            <ThemeSwitcher />
          </div>
        </div>
        <form
          className='flex justify-between w-full px-4 py-2 bg-white dark:bg-[#393A4C] shadow-xl rounded-md'
          onSubmit={handleSubmit}
        >
          <div className='w-[26px] h-6 my-auto rounded-full border border-slate-500 dark:border-slate-200'></div>
          <input
            type="text"
            className='w-full ml-2 p-2 text-xl dark:bg-[#393A4C] dark:text-white'
            placeholder='Create a new Todo...'
            onChange={handleChange}
            value={todosVal}
          />
        </form>
        <ul className='bg-white dark:bg-[#393A4C] w-full h-full shadow-xl rounded-md overflow-hidden'>
          <div className='h-[87%] overflow-y-scroll'>
            <div className='overflow-hidden'>
              {filteredTodos.map((todo) => (
                <li
                  key={todo.id}
                  className='flex justify-between gap-2 w-full px-4 py-2 dark:bg-[#393A4C] border-b-[1px] border-slate-300 dark:text-white hover:opacity-80'
                >
                  {todo.status === 'pending' ? (
                    <div
                      className='w-[28px] h-6 my-auto rounded-full border border-slate-500 dark:border-slate-200'
                      onClick={() => handleDone(todo.id)}
                    ></div>
                  ) : (
                    <div
                      className='w-[28px] h-6 bg-blue-500 flex justify-center items-center my-auto rounded-full border border-slate-500 dark:border-slate-200'
                    >
                      <img src="/assets/images/icon-check.svg" alt="" />
                    </div>
                  )}
                  <p className={`dark:text-white w-full text-xl p-2 ${todo.status === 'done' ? "line-through" : ''}`}>
                    {todo.text}
                  </p>
                  <button onClick={() => handleDelete(todo.id)}>
                    <img src="/assets/images/icon-cross.svg" alt="" />
                  </button>
                </li>
              ))}
            </div>
          </div>
          <div className='flex justify-between px-4 w-full h-16 py-2 text-slate-700 dark:text-slate-400'>
            <div className='flex flex-row justify-center'>
              <p className='my-auto text-[12px]'>{left} items left</p>
            </div>
            <div className='flex flex-row justify-center'>
              <button onClick={() => setFilter('all')} className={filter === 'all' ? 'font-bold text-[#3A7BFD]' : ''}>All</button>
              <button onClick={() => setFilter('active')} className={filter === 'active' ? 'font-bold text-[#3A7BFD]' : ''}>Active</button>
              <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'font-bold text-[#3A7BFD]' : ''}>Completed</button>
            </div>
            <div className='flex flex-row justify-center'>
              <button onClick={handleDeleteAll}>Clear Completed</button>
            </div>
          </div>
        </ul>
      </section>
      <div class="attribution dark:text-white absolute bottom-0 left-[50%] translate-x-[-50%]">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/Ehsan-eslami">Ehsan Eslami</a>.
      </div>
    </div>
  );
}
