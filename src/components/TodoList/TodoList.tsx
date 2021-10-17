import React, { FC } from "react";

//import styles
import './TodoList.scss';

// import types
import { ITodo } from '../../components/types/types';

// import components
import TodoItem from '../TodoItem';

interface TodoListProps {
    Todos: ITodo[],
    SearchTodo: string
}

const TodoList: FC<TodoListProps> = ({ Todos, SearchTodo }) => {

    if (Todos.length === 0) {
        return <div style={{ textAlign: 'center' }}>Add tasks please</div>
    }

    let Content = Todos.map(todo =>
        <li key={todo.id}>
            <TodoItem
                Todo={todo}
            />
        </li>
    )

    if (SearchTodo.length > 1) {
        const SearchTodos = Todos.filter((todo) => todo.name.toLowerCase().indexOf(SearchTodo.toLowerCase()) > -1);
        Content = SearchTodos.map(todo =>
            <TodoItem
                key={todo.id}
                Todo={todo}
            />
        )
    }

    return (
        <React.Fragment>
            <ul>
                {Content}
            </ul>
        </React.Fragment>
    )
}

export default TodoList;