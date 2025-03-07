import "./App.css"
import AddTodo from "./features/oldSchemeTodos/AddTodo"
import TodoItemList from "./features/oldSchemeTodos/TodoItemList"
import logo from "./logo.svg"


const App = () => {
  return (
    <div className="mx-auto mt-5 max-w-xl space-y-10">
      <h1 className="text-center text-5xl">TODOアプリ</h1>
      <AddTodo />
      <TodoItemList />
    </div>
  )
}

export default App
