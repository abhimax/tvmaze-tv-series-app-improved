import { Col, Row } from "react-grid-system";
import classes from "./ActorCard.module.css";
const ActorCard = ({ name, character, imagePath }) => {
  return (
    <div className={classes["detailed-description-wrapper"]}>
      <Row>
        <Col md={3} align="left">
          <img src={imagePath} alt={name} />
        </Col>
        <Col md={9} align="left">
          <h3>{name}</h3>
          <h4>as {character}</h4>
        </Col>
      </Row>
    </div>
  );
};
export default ActorCard;
