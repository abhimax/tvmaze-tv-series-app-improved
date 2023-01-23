import classes from "./Button.module.css";
const Button = ({ label, icon, onClick }) => {
  return (
    <div class={classes.button} onClick={onClick}>
      <label>{icon}{label}</label>
    </div>
  );
};

export default Button;