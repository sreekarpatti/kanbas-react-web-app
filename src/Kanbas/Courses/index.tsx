import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import './index.css';


function Courses() {
  const params = useParams();
  console.log(params);
  const { courseId } = params;
  const course = courses.find((course) => course._id === courseId);
  return (
    <div>
      <h6><HiMiniBars3 /> {Object.values(params).join(' > ')}</h6>
      <hr />
      <div className='container-home'>
        <CourseNavigation />
        <div
          className="overflow-y-scroll bottom-0 end-0"
          style={{ left: "320px", top: "50px", flexGrow: 1}} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="/Piazza" element={<h1>Piazza</h1>} />
            <Route path="/Assignments" element={<Assignments />} />
            <Route path="/Assignments/:assignmentId" element={<AssignmentEditor />} />
            <Route path="/Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
