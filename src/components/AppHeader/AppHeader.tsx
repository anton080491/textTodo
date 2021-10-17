import React, { FC } from "react";
import { Link } from "react-router-dom";

// import styles
import './AppHeader.scss';

interface AppHeaderProps {
    Todo: number,
    Doing: number,
    Done: number
}

const AppHeader: FC<AppHeaderProps> = ({ Todo, Doing, Done }) => {
    return (
        <div className="AppHeader">
            <Link to='/'>
                <h2 className='AppHeader__title'>Task List</h2>
            </Link>
            <div className="AppHeader__count">
                <div>Todo:&emsp;{Todo}</div>
                <div>Doing:&emsp;{Doing}</div>
                <div>done:&emsp;{Done}</div>
            </div>
        </div>
    )
}

export default AppHeader;