export default function FilterButton() {
    return(
        <>
        <div className="actions-list">
            <ul>
                <li className="actions">
                    <p className="remainingTasks">4 items left</p>
                    <div>
                        <button className="btn btn-action active" data-action="All" aria-pressed="true">
                            <span className="visually-hidden">Show </span>
                            <span>All</span>
                            <span className="visually-hidden"> tasks</span>

                        </button>
                        <button className="btn btn-action" data-action="Active" aria-pressed="false">
                            <span className="visually-hidden">Show </span>
                            <span>Active</span>
                            <span className="visually-hidden"> tasks</span>
                        </button>
                        <button className="btn btn-action" data-action="Completed" aria-pressed="false">
                            <span className="visually-hidden">Show </span>
                            <span>Completed</span>
                            <span className="visually-hidden"> tasks</span>
                        </button>
                    </div>
                    <button className="btn btn-action" data-action="Clear">
                        Clear Completed
                    </button>
                </li>
            </ul>
        </div>

        <div className="mobile-actions">
            <button className="btn btn-action active" data-action="All" aria-pressed="true">
                <span className="visually-hidden">Show </span>
                <span>All</span>
                <span className="visually-hidden"> tasks</span>

            </button>
            <button className="btn btn-action" data-action="Active" aria-pressed="false">
                <span className="visually-hidden">Show </span>
                <span>Active</span>
                <span className="visually-hidden"> tasks</span>
            </button>
            <button className="btn btn-action" data-action="Completed" aria-pressed="false">
                <span className="visually-hidden">Show </span>
                <span>Completed</span>
                <span className="visually-hidden"> tasks</span>
            </button>
        </div>

        <small className="info">
            Drag and drop to reorder list
        </small>

        </>
    )
}