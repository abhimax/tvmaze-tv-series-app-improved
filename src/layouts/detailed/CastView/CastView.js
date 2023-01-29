import { Col, Row } from "react-grid-system";
import ActorCard from "./ActorCard/ActorCard";
import classes from "./CastView.module.css";
const CastView = ({ actorList }) => {
  console.log('CastView 04 >>', actorList);
  return (
    <div className={classes["cast-wrapper"]}>
      <h2>Cast</h2>
      <Row>
        {(actorList.length > 0) ?
          actorList.map((actor, index) => {
            return (
              <Col md={6} xs={6} align="center" key={index}>
                <ActorCard
                  key={actor.person.id}
                  name={actor.person.name}
                  character={actor.character.name}
                  imagePath={actor.person.image.medium && actor.person.image.medium}
                />
              </Col>
            );
          }): <Col md={12} ><p>No available cast</p></Col>}
      </Row>
    </div>
  );
};
export default CastView;
