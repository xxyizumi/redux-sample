export const ADD_TODO = "ADD_TODO"
export const REMOVE_TODO = "REMOVE_TODO"

export interface AddTodoAction {
    type: typeof ADD_TODO;
    payload: string;
}

export interface RemoveTodoAction  {
    type: typeof REMOVE_TODO;
    payload: number;
}

export type TodoActionTypes = AddTodoAction | RemoveTodoAction 

export const addTodo = (text: string): AddTodoAction => ({
    type: ADD_TODO,
    payload: text
});

export const removeTodo = (id: number): RemoveTodoAction => ({
    type: REMOVE_TODO,
    payload: id
})