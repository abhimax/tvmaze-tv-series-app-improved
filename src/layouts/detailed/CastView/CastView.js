import { Col, Row } from "react-grid-system";
import ActorCard from "./ActorCard/ActorCard";
import classes from "./CastView.module.css";
const CastView = ({ actorList }) => {
  return (
    <div className={classes["cast-wrapper"]}>
      <h2>Cast</h2>
      <Row>
        {actorList &&
          actorList.map((actor, index) => {
            return (
              <Col md={6} xs={6} align="center" debug>
                <ActorCard
                  key={actor.index}
                  name={actor.name}
                  character={actor.character}
                  imagePath={actor.image}
                />
              </Col>
            );
          })}
      </Row>
    </div>
  );
};
export default CastView;
