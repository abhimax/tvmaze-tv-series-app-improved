import { Button } from "../Button";
import classes from "./SearchInput.module.css";
const SearchInput = ({id, label, ...props}) => {
  return (
    <div className={classes.input}>
      <input {...props} />
      <Button label="Search"/>
    </div>
  );
};
export default SearchInput;