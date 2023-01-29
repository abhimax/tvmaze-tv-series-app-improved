import { Col, Row } from "react-grid-system";
import ActorCard from "./ActorCard/ActorCard";
import classes from "./CastView.module.css";
import avatarMaleImg from "../../../assets/images/male-avatar.png";
import avatarFemaleImg from "../../../assets/images/female-avatar.png";

const CastView = ({ actorList }) => {
  const getAvatar = gender => {
    if(gender === 'Female'){
      return avatarFemaleImg;
    }
    else{
      return avatarMaleImg;
    }
    
  }
  return (
    <div className={classes["cast-wrapper"]}>
      <h2>Cast</h2>
      <Row>
        {(actorList.length > 0) ?
          actorList.map((actor, index) => {
            return (

              <Col md={(actorList.length === 1) ? 12 : 6} xs={6} align="center" key={index}>
                <ActorCard
                  key={actor.person.id}
                  name={actor.person.name}
                  character={actor.character.name}
                  imagePath={actor.person.image ? actor.person.image.medium : getAvatar(actor.person.gender)}
                />
              </Col>
            );
          }): <Col md={12} ><p>No available cast</p></Col>}
      </Row>
    </div>
  );
};
export default CastView;
