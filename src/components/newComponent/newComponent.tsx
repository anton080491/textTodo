import React, { FC } from "react";

//import styles
import './newComponent.scss';

const NewComponent: FC = () => {


    return (
        <div>
            <label htmlFor='input'>
                enter text:
                <input
                    name='input'
                    type='text' />

            </label>
        </div>
    )
}

export default NewComponent;