import React from "react";

type Init = {
    changeTodo: (id: number) => void,
    changeDoing: (id: number) => void,
    changeDone: (id: number) => void,
    deleteTodo: (id: number) => void,
    getTaskId: (id: number) => void
}

export const MyContext = React.createContext<Init>({
    changeTodo: () => { },
    changeDoing: () => { },
    changeDone: () => { },
    deleteTodo: () => { },
    getTaskId: () => { }
})

function Context({ value, children }) {
    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    )
}

export default Context;