import React, { FC, useContext, useState } from "react";
import { MyContext } from "../../Context";
import { useHistory } from "react-router-dom";

//import components
import NewComponent from "../newComponent";

// import styles
import './todoPageItem.scss'

// import types
import { ITodo } from "../types/types";

interface TodoPageItemProps {
    todo: ITodo | undefined;
    setShowModal: () => void;

}

const TodoPageItem: FC<TodoPageItemProps> = ({ todo }) => {

    const { changeTodo, changeDoing, changeDone, getTaskId, deleteTodo } = useContext(MyContext);
    const [openComponent, setOpenComponent] = useState<boolean>(false);
    const history = useHistory();

    if (todo == null) {
        return <div style={{ textAlign: "center" }}>Add some tasks</div>
    }

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

    //set new Date and Time

    const setNewDate = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
        event.preventDefault();
        getTaskId(id)
    }

    //remove task

    const removeTask = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
        deleteTodo(id);
        const returned = () => {
            history.push('/')
        }
        returned()
    }

    return (
        <div className="TodoPageItem">
            <h2>{todo.name}</h2>
            <div className="TodoPageItem__description">{todo.description}</div>
            <div className="TodoPageItem__btns">
                <button style={{ backgroundColor: todo.todo ? 'red' : '#fff' }}
                    onClick={(event) => todoChange(event, todo?.id)}
                >Todo</button>
                <button style={{ backgroundColor: todo?.doing ? 'red' : '#fff' }}
                    onClick={(event) => doingChange(event, todo.id)}
                >Doing</button>
                <button style={{ backgroundColor: todo?.done ? 'red' : '#fff' }}
                    onClick={(event) => doneChange(event, todo?.id)}
                >Done</button>
                {todo?.deadLineTime ? <button style={{ backgroundColor: '#fff' }}
                    onClick={(event) => setNewDate(event, todo?.id)}
                >{todo?.deadLineTime}</button> : null}
                {todo?.deadLineDate ? <button style={{ backgroundColor: '#fff' }}
                    onClick={(event) => setNewDate(event, todo?.id)}
                >{todo?.deadLineDate}</button> : null}
                <button onClick={() => history.push('/')}>Back</button>
                <button onClick={() => setOpenComponent(!openComponent)}>
                    Open new component
                </button>
                <button onClick={(event) => removeTask(event, todo.id)}>Delete</button>
                {todo.typeSelect ? <button>{todo.typeSelect}</button> : null}
            </div>
            {openComponent ? <NewComponent /> : null}
        </div>
    )
}

export default TodoPageItem;