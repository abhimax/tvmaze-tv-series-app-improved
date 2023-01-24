import { StarRating } from "../../../components/StarRating";
import classes from "./ShowCard.module.css";
const ShowCard = ({ name, rating, image }) => {
  console.log('>>>>>',rating);
  return (
    <div className={classes["show-card-wrapper"]}>
      <div
        className={classes["show-card-image"]}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={classes["show-card-footer"]}>
        <h3>{name}</h3>
        <StarRating rating={rating.average} />
      </div>
    </div>
  );
};
export default ShowCard;
