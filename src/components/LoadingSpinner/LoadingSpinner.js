import classes from "./LoadingSpinner.module.css";
import css from "classnames";
import PropTypes from "prop-types";
var LoadingSpinner = ({size}) => {
    console.log(size);
  return (
      <div className={css(classes['loading-spinner'], classes[size])}/>
  );
}
LoadingSpinner.propTypes = {
    size: PropTypes.string,
  };
  LoadingSpinner.defaultProps = {
    size: "medium",
  };
export default LoadingSpinner;