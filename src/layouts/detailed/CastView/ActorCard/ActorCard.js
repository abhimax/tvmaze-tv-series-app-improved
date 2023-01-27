import { Col, Row } from "react-grid-system";
import classes from "./ActorCard.module.css";
const ActorCard = ({ name, character, imagePath }) => {
  return (
    <div className={classes["actor-card-wrapper"]}>
      <Row>
        <Col md={3} align="left">
          <img src={imagePath} alt={name} />
        </Col>
        <Col md={9} align="left">
          <h4>{name}</h4>
          <label>as {character}</label>
        </Col>
      </Row>
    </div>
  );
};
export default ActorCard;
