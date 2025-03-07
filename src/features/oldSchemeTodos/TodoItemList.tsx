
import { TodoState } from "../../reducers/oldSchemeTodoReducer"
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { removeTodo } from "../../actions/oldSchemeTodoAction";

interface Props {
    todos: TodoState;
    removeTodo: (id: number) => void
}

const TodoItemlist: React.FC<Props> = ({todos, removeTodo}) => {
    const removeTodoButtonClick = (id: number) => {
        removeTodo(id);
    }
    return (
        <div className="todo-item-area rounded bg-slate-200 p-5">
            <ul className="todo-item">
                {todos.todos.map((todo) => {
                return <li className="todo-item-detail" key={todo.id}>
                    <label className="flex items-center gap-4 text-gray-500">
                      {todo.text}
                    <button 
                        type="button"
                        className="removeTodoButton rounded bg-white text-gray-300 p-2 hover:cursor-pointer"
                        id="removeTodoButton" 
                        onClick={() => removeTodoButtonClick(todo.id)}>削除</button>
                    </label>
                  </li>
                })}
            </ul>
        </div>
    );
}
const mapStateToProps = (state: RootState) => ({
    todos: state.todos
})
const mapDispatchToProps = ({ removeTodo });

export default connect(mapStateToProps, mapDispatchToProps)(TodoItemlist)