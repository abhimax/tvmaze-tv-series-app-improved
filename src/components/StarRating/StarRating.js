import StarEmpty from "../Icon/StarEmpty";
import StarFilled from "../Icon/StarFilled";
import classes from "./StarRating.module.css";
const StarRating = ({rating}) => {
    return (
      <div className={classes["star-rating"]}>
        {[...Array(10)].map((star, index) => {
          index += 1;
          return (
               (index > rating) ?  <StarEmpty key={index} size={12}/> : <StarFilled key={index} size={12}/> 
          );
        })}
      </div>
    );
  };

  export default StarRating;