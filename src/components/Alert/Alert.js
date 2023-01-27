import classes from "./Alert.module.css";
import css from "classnames";
import React from "react";
import { useState } from "react";

const Alert = ({ children, type, message }) => {
  const [isShow, setIsShow] = useState(true);

  const renderElAlert = function () {
    return React.cloneElement(children);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setIsShow(false);
  };

  return (
    <div className={css(classes.alert, classes[type], !isShow && classes.hide)}>
      <span className={classes.closebtn} onClick={handleClose}>
        &times;
      </span>
      {children ? renderElAlert() : message}
    </div>
  );
}
export default Alert;