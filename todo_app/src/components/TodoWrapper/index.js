import Form from "./Form";
import TodoList from "./TodoList";
import FilterButton from "./FilterButton";
import './style.css';

export default function TodoWrapper() {
    return (
        <main className="container">
            <div className="todoWrapper">
                <Form/>
                <TodoList/>
                <FilterButton/>
            </div>
        </main>
    );
}