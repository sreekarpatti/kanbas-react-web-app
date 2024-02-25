import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "../Nav";

function Kanbas() {
  return (

    <div>
      <Nav />
      <div className="d-flex">
        <KanbasNavigation />
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="/Account" element={<h1>Account</h1>} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Courses" element={<Dashboard />} />
            <Route path="/Courses/:courseId/*" element={<Courses />} />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Kanbas;