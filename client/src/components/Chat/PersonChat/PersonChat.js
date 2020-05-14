import React from 'react';
import './PersonChat.css'
const Person = () => {
    return(
        <div className="person">
            <div className="picture"></div>
            <div className="name">Name Surname</div>
            <div className="isOnline"></div>
        </div>
    )
}

export default Person;