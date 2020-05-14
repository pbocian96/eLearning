import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';
const Nav = () => {
    return(
        <div className="nav">
          <ul>
              <li><Link to='/home/courses'>My Courses</Link></li>
              <li><Link to='/home/assignments'>Assignments</Link></li>
              <li><Link to='/home/inbox'>Inbox</Link></li>
              <li><Link to='/home/profile'>Profile</Link></li>
          </ul>
          <ul>
              <li className="logout"><Link to='/login'>Logout</Link></li>
          </ul>
        </div>
    )
}

export default Nav;