import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) =>
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) =>
    state.modulesReducer.module);
  const dispatch = useDispatch();

  // const [selectedModule, setSelectedModule] = useState(null);
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);

  return (
    <>
      {/* <!-- Add buttons here --> */}
      <div>
  <input 
    value={module.name}
    onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
  />
</div>
<div>
  <textarea 
    value={module.description}
    onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
  />
</div>
<div>
  <button 
    type="button" 
    className="btn btn-danger" 
    onClick={() => dispatch(addModule({ ...module, course: courseId }))}
  >
    + Add
  </button>
  <button 
    type="button" 
    className="btn btn-primary"
    onClick={() => dispatch(updateModule(module))}
  >
    Update
  </button>
</div>

      <ul className="list-group wd-modules">
        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index}
              className="list-group-item"
              onClick={() => setSelectedModule(module)}>
              <button type="button" className="btn btn-primary"
                onClick={() => dispatch(setModule(module))}>
                Edit
              </button>

              <button type="button" className="btn btn-danger"
                onClick={() => dispatch(deleteModule(module._id))}>
                Delete
              </button>
              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              {selectedModule._id === module._id && (
                <ul className="list-group">
                  {module.lessons?.map((lesson: any) => (
                    <li key={lesson._id} className="list-group-item">
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </>
  );
}
export default ModuleList;