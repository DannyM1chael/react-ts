import React, { useState, useEffect } from 'react';
import { TodoForm } from '../../TodoForm/TodoForm';
import { TodoList } from '../../TodoList/TodoList';
import { ITodo } from '../../../interfaces/interface';

declare var confirm: (question: string) => boolean;

export const TodoPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
      const saved =JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
      setTodos(saved);
    }, []);
  
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);
  
    const addHandler = (title: string) => {
      const newTodo: ITodo = {
        title: title,
        id: Date.now(),
        completed: false
      };
      setTodos(prev => [newTodo, ...prev]);
    }
  
    const toggleHandler = (id: number) => {
      setTodos(prev =>
        prev.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      }))
    };
  
    const removeHandler = (id:number) => {
      const shouldRemove = confirm('Уверен, что хочешь удалить?');
      if(shouldRemove){
        setTodos(prev => prev.filter(todo => todo.id !== id))
      }
    };
  
    return (
        <>
            <TodoForm onAdd={addHandler} />
            <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
        </>
    )
}