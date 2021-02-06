import cross from '../../images/icon-cross.svg';

export default function TodoList() {
    return(
        <ul className="todo-list">
            <li className="todo-item done">
                <button className="btn btn-status">
                    <span className="visually-hidden">Task Status</span>
                    &nbsp;
                </button>
                <p>task#1</p>
                <button className="btn btn-remove">
                    <span className="visually-hidden">Remove task</span>
                    <img src={cross} alt=""/>
                </button>
            </li>

            <li className="todo-item">
                <button className="btn btn-status">
                    <span className="visually-hidden">Task Status</span>
                    &nbsp;
                </button>
                <p>task#2</p>
                <button className="btn btn-remove">
                    <span className="visually-hidden">Remove task</span>
                    <img src={cross} alt=""/>
                </button>
            </li>


            <li className="todo-item">
                <button className="btn btn-status">
                    <span className="visually-hidden">Task Status</span>
                    &nbsp;
                </button>
                <p>task#3</p>
                <button className="btn btn-remove">
                    <span className="visually-hidden">Remove task</span>
                    <img src={cross} alt=""/>
                </button>
            </li>
        </ul>
    )
}