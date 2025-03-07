import React, {useRef} from "react"
import { connect } from 'react-redux';
import { addTodo } from '../../actions/oldSchemeTodoAction';

interface Props {
    addTodo: (text: string) => void
}

const AddTodo: React.FC<Props> = ({addTodo}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const addTodoButtonClick = () => {
        const value = inputRef.current?.value || ""
        if (value === "") {
            alert("未入力では登録できません")
            return;
        }
        addTodo(value);
    }

    return(
        <div className="text-center">
            <input 
              type="text" 
              id="addTodo"
              className="rounded border-2"
              ref={inputRef}
            ></input>
            <button 
              id="adoTodoButton"
              className="size-10 bg-gray-400 rounded-2xl text-white hover:cursor-pointer"
              onClick={() => addTodoButtonClick()}
            >
                登録
            </button>
        </div>
    );
}

const mapDispatchToProps = ({ addTodo });

export default connect(null, mapDispatchToProps)(AddTodo);