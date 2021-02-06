export default function Form() {
    return(
        <form className="addTaskForm">
            <span className="btn-status">&nbsp;</span>
            <label htmlFor="todoItem">
                <input type="text" autoComplete="off"
                       id="todoItem" placeholder="Create a new todo..." required />
            </label>
        </form>
    );
}