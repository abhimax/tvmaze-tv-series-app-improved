import classes from "./Button.module.css";
import PropTypes from "prop-types";
const Button = ({ label, icon, darkMode, onClick, fitContent, ...props }) => {
  return (
    <div
      onClick={onClick}
      className={`${classes.button} ${
        darkMode ? classes.secondary : classes.primary
      } ${fitContent ? classes.full : null}`}
    >
      <label className={classes["content-wrapper"]}>
        {icon}
        {label}
      </label>
    </div>
  );
};
Button.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.element,
  darkMode: PropTypes.bool,
  fitContent: PropTypes.bool,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  label: "",
  darkMode: false,
  fitContent: false,
};
export default Button;
