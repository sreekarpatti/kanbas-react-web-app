import React, { useState } from 'react';
import ModuleList from '../Modules/List';
import CourseStatus from './Status';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { FaBars, FaChevronDown } from 'react-icons/fa';
import CourseNavigation from '../Navigation';
import KanbasNavigation from '../../Navigation';



function CollapseMenu() {
    const [isKanbasNavVisible, setIsKanbasNavVisible] = useState(false);
    const [isCoursesNavVisible, setIsCoursesNavVisible] = useState(false);
  
    const toggleKanbasNav = () => {
      setIsKanbasNavVisible(!isKanbasNavVisible);
      if (isCoursesNavVisible) setIsCoursesNavVisible(false);
    };
  
    const toggleCoursesNav = () => {
      setIsCoursesNavVisible(!isCoursesNavVisible);
      if (isKanbasNavVisible) setIsKanbasNavVisible(false);
    };
  
    return (
      <div id="wd-header" className="col-12 d-block d-md-none">
        <span style={{ display: "flex", alignItems: "center" }}>
          <button onClick={toggleKanbasNav} style={{ background: 'none', border: 'none', color: '#ffffff' }}>
            <FaBars />
          </button>
          <p style={{ margin: '0 10px', color: '#ffffff' }}>Rocket Science</p>
          <button onClick={toggleCoursesNav} style={{ background: 'none', border: 'none', color: '#ffffff' }}>
            <FaChevronDown />
          </button>
        </span>
        <div className={isKanbasNavVisible ? '' : 'd-none'}>
          <KanbasNavigation />
        </div>
        <div className={isCoursesNavVisible ? '' : 'd-none'}>
          <CourseNavigation />
        </div>
      </div>
    );
  }

function Home() {
    return (
        <>
            <CollapseMenu />
            <div className="d-flex home-container">
                <div className="module-list col-12 col-md-8 col-xl-6">
                    <ModuleList />
                </div>
                <div className="course-status col-md-2 d-none d-xl-block">
                    <CourseStatus />
                </div>
            </div>
        </>
    );
}

export default Home;
