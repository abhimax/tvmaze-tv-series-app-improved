import StarEmpty from "../Icon/StarEmpty";
import StarFilled from "../Icon/StarFilled";

const StarRating = ({rating}) => {
    return (
      <div className="star-rating">
        {[...Array(10)].map((star, index) => {
          index += 1;
          return (
               (index > rating) ?  <StarEmpty key={index}/> : <StarFilled key={index}/> 
          );
        })}
      </div>
    );
  };

  export default StarRating;