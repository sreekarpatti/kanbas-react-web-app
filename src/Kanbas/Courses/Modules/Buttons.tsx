function ModuleButtons() {
    return (
        <div className="d-flex justify-content-end align-items-center mb-3">
            <button className="btn btn-secondary me-2">Collapse All</button>
            <button className="btn btn-secondary me-2">View Progress</button>
            <select className="me-2">
                <option>Publish All</option>
                <option>Publish All Modules and Items</option>
                <option>Publish Modules only</option>
                <option>UnPublish All Modules</option>
            </select>
            <button className="btn btn-danger">+ Module</button>
        </div>
    );
}

export default ModuleButtons;