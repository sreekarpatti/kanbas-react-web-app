import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "../Nav";
import { db } from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  };
  const deleteCourse = (courseId: any) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
      <div>
        <Nav />
        <div className="d-flex">
          <KanbasNavigation />
          <div style={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="/Account" element={<h1>Account</h1>} />
              <Route path="/Dashboard" element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse} />
              } />
              <Route path="/Courses" element={<Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse} />} />
              <Route path="/Courses/:courseId/*" element={<Courses courses={courses} />} />
              <Route path="/Calendar" element={<h1>Calendar</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default Kanbas;