import { StarRating } from "../../../components/StarRating";
import classes from "./DescriptionView.module.css";
const DescriptionView = ({name, rating, genres, summary}) => {
    console.log('>>>>>>',genres);

    return(
        <div className={classes["description-wrapper"]}>
                <h1>{name}</h1>
                <StarRating rating={rating}/>
                <h4>Genres:{genres && genres.map((item,index) =>{ return <span>{`${item} ${ (index < (genres.length -1)) ? '| ' : ""}`}</span>})}</h4>
                <div className={classes['summary-wrapper']} dangerouslySetInnerHTML={{__html: summary}} />

        </div>
    );
}
export default DescriptionView;