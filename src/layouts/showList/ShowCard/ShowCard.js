import { StarRating } from "../../../components/StarRating";
import classes from "./ShowCard.module.css";
import nullTreatmentImg from "../../../../src/assets/images/null-treatment-img.png";
const ShowCard = ({ name, rating, imagePath, onCardClick, id }) => {
  return (
    <div className={classes["show-card-wrapper"]} id={id} onClick={onCardClick}>
      <div
        className={classes["show-card-image"]}
        style={{ backgroundImage: `url(${imagePath ? imagePath: nullTreatmentImg })` }}
      >
      </div>
      <div className={classes["show-card-footer"]}>
        <h4>{name}</h4>
        <StarRating rating={rating.average} />
      </div>
    </div>
  );
};
export default ShowCard;
