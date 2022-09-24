import { useDispatch, useSelector } from "react-redux";
import { clearTodo } from "./todoSlicer";

export default function Footer(){

    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo.todos);

 const onClear = () => {
    dispatch(clearTodo())
 }

    return (
        <div>
            <span>{todos.filter(todo => todo.done === true).length}/{todos.length} Completed</span>
            <button onClick={onClear}>Clear Completed</button>
        </div>
    )
}
