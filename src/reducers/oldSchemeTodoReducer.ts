import { ADD_TODO, REMOVE_TODO, TodoActionTypes } from "../features/oldSchemeTodos/oldSchemeTodoAction";

export interface todo {
    id: number;
    text: string;
}

interface TodoState {
    todos: todo[]
}

const internalState: TodoState = {
    todos: []
}

export default (state = internalState, action: TodoActionTypes) =>{
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos:[...state.todos, {id:"", text: action.payload}]
            }
        case REMOVE_TODO:
            const id = action.payload;
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id != id)
            }
        default:
            return state;
    }
}