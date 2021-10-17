import React, { FC, useContext } from "react";
import { Link } from "react-router-dom";


//import Context
import { MyContext } from "../../Context";

// import styles
import './TodoItem.scss';

// import types
import { ITodo } from '../../components/types/types';

interface TodoItemProps {
    Todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({ Todo }) => {

    const { changeTodo, changeDoing, changeDone, deleteTodo, getTaskId } = useContext(MyContext)


    //Change todo, doing,done

    const todoChange = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
        event.preventDefault();
        changeTodo(id);
    }
    const doingChange = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
        event.preventDefault();
        changeDoing(id);
    }
    const doneChange = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
        event.preventDefault();
        changeDone(id);
    }

    //remove task

    const removeTodo = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
        event.preventDefault();
        deleteTodo(id);
    }

    //set new Date and Time

    const setNewDate = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
        event.preventDefault();
        getTaskId(id)

    }

    return (
        <Link to={'/' + Todo.id}>
            <div className="TodoItem">
                <div>{Todo.name}</div>
                <div className="TodoItem__block">
                    <button style={{ backgroundColor: Todo.todo ? 'red' : '#fff' }}
                        onClick={(event) => todoChange(event, Todo.id)}
                    >Todo</button>
                    <button style={{ backgroundColor: Todo.doing ? 'red' : '#fff' }}
                        onClick={(event) => doingChange(event, Todo.id)}
                    >Doing</button>
                    <button style={{ backgroundColor: Todo.done ? 'red' : '#fff' }}
                        onClick={(event) => doneChange(event, Todo.id)}
                    >Done</button>
                    {Todo.deadLineTime ? <button style={{ backgroundColor: '#fff' }}
                        onClick={(event) => setNewDate(event, Todo.id)}
                        className='deadLine'
                        data-title="click to change time"
                    >{Todo.deadLineTime}</button> : null}
                    {Todo.deadLineDate ? <button style={{ backgroundColor: '#fff' }}
                        onClick={(event) => setNewDate(event, Todo.id)}
                        className='deadLine'
                        data-title="click to change date"
                    >{Todo.deadLineDate}</button> : null}
                    <button
                        onClick={(event) => removeTodo(event, Todo.id)}
                    ><i className="fas fa-trash-alt"></i></button>
                </div>
            </div>
        </Link>
    )
}

export default TodoItem;