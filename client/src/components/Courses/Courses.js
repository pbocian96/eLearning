import React from 'react';
import Course from './Course/Course';
import './Courses.css';
const Courses = () => {
    return(
        <div>
            <h1>My Courses</h1>
            <div className="courses-grid">
                <Course/>
                <Course/>
                <Course/>
                <Course/>
                <Course/>
                <Course/>
                <Course/>
                <Course/>
                <Course/>
                <Course/>
                <Course/>
                <Course/>
                <Course/>
            </div>
        </div>
    )
}

export default Courses;