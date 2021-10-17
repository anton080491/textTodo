import React, { FC, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import Context
import Context from './Context';

// import components
import AppHeader from './components/AppHeader';
import AddTodos from './components/AddTodos';
import TodoSearching from './components/TodoSearching';
import TodoList from './components/TodoList';
import Modal from './components/Modal';
import TodoPageItem from './components/pages/TodoPageItem';

import MyForm from './components/form';

// import types
import { ITodo } from './components/types/types';

// import styles
import './App.scss';

const App: FC = () => {

  // Create states

  const [todos, setTodos] = useState<ITodo[]>([
    { id: 1, todo: true, doing: false, done: false, name: "To wash a car", description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." },
    { id: 2, deadLineDate: '21.01.2012', deadLineTime: '9:30', todo: true, doing: false, done: false, name: "Prepare food", description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." },
    { id: 3, deadLineDate: '21.01.2012', deadLineTime: '9:30', todo: true, doing: false, done: false, name: "Prepare food", description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." },
    { id: 4, todo: true, doing: false, done: false, name: "Go to the shop ", description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." }
  ])

  const [taskID, setTaskID] = useState<number>(5);

  const [searchTodo, setSearchTodo] = useState<string>('');

  const [showModal, setShowModal] = useState<boolean>(false);

  const [taskId, setTaskId] = useState<number>();

  //Filter of tasks

  const getTodoSearch = (name: string) => {
    setSearchTodo(name)
  }

  //Change todo, doing,done

  const changeTodo = (id: number) => {
    // const index = todos.findIndex(todo => todo.id === id);
    // const old = todos[index]
    // const newItem = { ...old, todo: !old.todo, done: false, doing: false };
    // const newArr = [...todos.slice(0, index), newItem, ...todos.slice(index + 1)];
    // setTodos(newArr);
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        todo.todo = true;
        todo.doing = false;
        todo.done = false;
      }
      return todo
    }))
  }

  const changeDoing = (id: number) => {
    const index = todos.findIndex(todo => todo.id === id);
    const old = todos[index];
    const newItem = { ...old, doing: !old.doing, done: false, todo: false };
    const newArr = [...todos.slice(0, index), newItem, ...todos.slice(index + 1)];
    setTodos(newArr);
  }

  const changeDone = (id: number) => {
    const index = todos.findIndex(todo => todo.id === id);
    const old = todos[index];
    const newItem = { ...old, done: !old.done, todo: false, doing: false };
    const newArr = [...todos.slice(0, index), newItem, ...todos.slice(index + 1)];
    setTodos(newArr);
  }

  //Add new task

  const addNewTask = (name: string, description: string, deadLineTime: string, deadLineDate: string, typeSelect: string) => {
    setTaskID(prev => ++prev);
    const newTask: ITodo = { id: taskID, todo: true, doing: false, done: false, name: name, description: description };
    if (deadLineTime) {
      newTask.deadLineTime = deadLineTime;
    }
    if (deadLineDate) {
      newTask.deadLineDate = deadLineDate
    }
    if (typeSelect) {
      newTask.typeSelect = typeSelect
    }
    setTodos(prev => [...prev, newTask])
  }

  //remove task

  const deleteTodo = (id: number) => {
    const shoudRemove = window.confirm('Are you sure you want to delete this task?')
    if (shoudRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }

  // We get the id of the task where we want to change the date and time 

  const getTaskId = (id: number) => {
    setTaskId(id);
    setShowModal(true);
  }

  //change the date and time of certain task

  const newDateAndTime = (time: string, date: string) => {
    const shoudChange = window.confirm('Are you sure you want to change Time and Date of this task?');
    if (shoudChange) {
      setTodos(prev => prev.map(todo => {
        if (todo.id === taskId) {
          todo.deadLineTime = time;
          todo.deadLineDate = date;
        }
        return todo
      }))
    }
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <Context value={{ changeTodo: changeTodo, changeDoing: changeDoing, changeDone: changeDone, deleteTodo: deleteTodo, getTaskId: getTaskId }}>
          <AppHeader
            Todo={todos.filter(todo => todo.todo).length}
            Doing={todos.filter(todo => todo.doing).length}
            Done={todos.filter(todo => todo.done).length}
          />
          <AddTodos
            AddNewTask={addNewTask}
          />
          <TodoSearching
            GetTodoSearch={getTodoSearch}
          />
          <Switch>
            <Route path='/' exact>
              <TodoList
                Todos={todos}
                SearchTodo={searchTodo}
              />
            </Route>
            <Route path='/:id'
              render={({ match }) => <TodoPageItem
                todo={todos.find(item => item.id === (+match.params.id))}
                setShowModal={() => setShowModal(true)}
              />} />
          </Switch>
          <MyForm />
          <Modal
            ShowModal={showModal}
            SetShowModal={() => setShowModal(false)}
            NewDateAndTime={newDateAndTime}
          >
            <h2>hello</h2>
          </Modal>
        </Context>
      </BrowserRouter>
    </div >
  )
}

export default App;
