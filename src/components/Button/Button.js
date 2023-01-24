import classes from "./Button.module.css";
import PropTypes from 'prop-types';
const Button = ({ label, icon, darkMode, onClick }) => {
  return (
    <div className={`${classes.button} ${ darkMode ? classes.secondary : classes.primary}`} onClick={onClick}>
      <label className={classes['content-wrapper']}>{icon}{label}</label>
    </div>
  );
};
Button.propTypes ={
    label: PropTypes.string,
    icon: PropTypes.element,
    darkMode: PropTypes.bool,
    onClick: PropTypes.func,
}
Button.defaultProps = {
    label: '',
    darkMode: false,
}
export default Button;