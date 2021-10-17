import React, { FC, useState } from 'react';

// import styles
import './Modal.scss';

interface ModalProps {
    ShowModal: boolean,
    SetShowModal: () => void,
    NewDateAndTime: (time: string, date: string) => void
}

const Modal: FC<ModalProps> = ({ ShowModal, SetShowModal, NewDateAndTime, children }) => {

    const [changeTime, setChangeTime] = useState<string>('');
    const [changeDate, setChangeDate] = useState<string>('');

    const changeTimeAndDate = (event: React.MouseEvent<HTMLButtonElement>) => {
        NewDateAndTime(changeTime, changeDate);
        SetShowModal()
    }


    return (
        <div className={ShowModal ? 'Modal Modal__active' : 'Modal'}>
            <div className="Modal__content">
                <div>
                    <label htmlFor='time'>
                        New Time: &emsp;
                        <input
                            type="time"
                            name="time"
                            onChange={(event) => setChangeTime(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor='date'>
                        New Time: &emsp;
                        <input
                            type="date"
                            name='date'
                            onChange={(event) => setChangeDate(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <button
                        onClick={changeTimeAndDate}
                    >Save</button>
                    <button
                        onClick={SetShowModal}
                    >Cancel</button>
                </div>
                {children}
            </div>
        </div >
    )
}

export default Modal;