import React, { FC, useState } from "react";
import { TextField } from "@mui/material";

// import styles
import './AddTodos.scss';
import useStyles from '../Theme';


interface AddTodosProps {
    AddNewTask: (name: string, description: string, deadLineTime: string, deadLineDate: string, typeSelect: string) => void
}

const AddTodos: FC<AddTodosProps> = ({ AddNewTask }) => {

    const [newTodoName, setNewTodoName] = useState<string>('');
    const [newTodoDescription, setNewTodoDescription] = useState<string>('');
    const [newTodoTime, setNewTodoTime] = useState<string>('');
    const [newTodoDate, setNewTodoDate] = useState<string>('');

    const [todoSelect, SettodoSelect] = useState<string>('');
    const [todoCheckbox, SettodoCheckbox] = useState<boolean>(true);

    const [todoInput, setTodoInput] = useState<string>('');
    console.log(todoInput);

    const classes = useStyles();

    const addNewTask = () => {
        if (newTodoName.length < 50 && newTodoName !== '') {
            AddNewTask(newTodoName, newTodoDescription, newTodoTime, newTodoDate, todoSelect);
            setNewTodoName('');
            setNewTodoDescription('');
            setNewTodoTime('');
            setNewTodoDate('');
            setNewTodoDate('');
        } else {
            alert('You must fill in the field "To do". Remember - no more than 50 characters! Date, Time and description are optional');
        }
    }
    return (
        <div className='AddTodo'>
            <div className="AddTodo__firstLine">
                <label htmlFor='name'>
                    Name:&emsp;
                    <input
                        name='name'
                        type='text'
                        placeholder='Enter name of todo please...'
                        onChange={(event) => setNewTodoName(event.target.value)}
                        value={newTodoName}
                    />
                </label>
                <label htmlFor='description'>
                    Description:&emsp;
                    <input
                        name='description'
                        type='text'
                        placeholder='Enter description of todo please...'
                        onChange={(event) => setNewTodoDescription(event.target.value)}
                        value={newTodoDescription}
                    />
                </label>
            </div>
            <div className="AddTodo__secondLine">
                <label htmlFor='time'>
                    Time:&emsp;
                    <input
                        name='time'
                        type='time'
                        onChange={(event) => setNewTodoTime(event.target.value)}
                    />
                </label>
                <label htmlFor='date'>
                    Date:&emsp;
                    <input
                        name='date'
                        type='date'
                        onChange={(event) => setNewTodoDate(event.target.value)}
                    />
                </label>
                <button
                    onClick={addNewTask}
                >Add task</button>
            </div>
            <div className="block">
                <label className='block__label'>
                    Type of Todo:
                    <select
                        value={todoSelect}
                        onChange={(event) => SettodoSelect(event.target.value)}
                        className='block__list'>
                        <option >urgently</option>
                        <option >normally</option>
                        <option >do not rush </option>
                    </select>
                </label>
                <label className='block__label'>
                    Type of Todo:
                    <input
                        type='checkbox'
                        className='block__list'
                        checked={todoCheckbox ? true : false}
                        onChange={() => SettodoCheckbox(!todoCheckbox)}
                    />
                </label>
            </div>
            <TextField
                onChange={(event) => setTodoInput(event.target.value)}
                id="standard-basic" label="standard" variant="standard" value={todoInput} className={classes.root} color='warning' />
        </div>
    )
}

export default AddTodos;