import { Button } from "../Button";
import classes from "./SearchInput.module.css";
const SearchInput = ({id, label, onSearchClick, inputRef, ...props}) => {
  return (
    <div className={classes.input}>
      <input {...props} ref={inputRef}/>
      <Button label="Search" onClick={onSearchClick}/>
    </div>
  );
};
export default SearchInput;