import React from "react";
import classes from './Header.css'

const MyHeader = (props) => {
    // 动态添加类名
    let assignedClasses = [];
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div>
          <h1>{props.appTitle}</h1>
          <p className={assignedClasses.join(" ")}>Hi, React App</p>
        </div>
      )
}
export default MyHeader;