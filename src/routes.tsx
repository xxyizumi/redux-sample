import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import App from "./App";
import AddTodo from "./features/oldSchemeTodos/AddTodo";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<App />}></Route>
              <Route path="/addTodo" element={<AddTodo />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;