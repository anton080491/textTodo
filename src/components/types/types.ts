export interface ITodo {
    id: number,
    todo: boolean,
    doing: boolean,
    done: boolean,
    name: string,
    description?: string,
    deadLineDate?: string,
    deadLineTime?: string,
    typeSelect?: string
}