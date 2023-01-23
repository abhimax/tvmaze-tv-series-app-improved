import { Button } from "../Button";
import classes from "./SearchInput.module.css";
const SearchInput = ({id, label, ...props}) => {
  return (
    <div className={classes.input}>
      <input {...props} />
      <Button label="search"/>
    </div>
  );
};
export default SearchInput;