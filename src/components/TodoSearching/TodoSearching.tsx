import React, { FC, useState } from "react";

// import styles
import './TodoSearching.scss';

interface TodoSearchingProps {
    GetTodoSearch: (name: string) => void
}

const TodoSearching: FC<TodoSearchingProps> = ({ GetTodoSearch }) => {

    const [todoSearch, SettodoSearch] = useState<string>('');

    const upDateTodoSearch = (e: any) => {
        SettodoSearch(e.target.value);
        GetTodoSearch(todoSearch);
    }

    return (
        <div className="TodoSearching">
            <div className="block">
                <label className='block__label'>
                    Search:&emsp;
                    <input
                        type='text'
                        value={todoSearch}
                        onChange={upDateTodoSearch}
                        className='block__list'
                    />
                </label>
            </div>
        </div>
    )
}

export default TodoSearching;