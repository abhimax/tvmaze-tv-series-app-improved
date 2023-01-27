import { Col, Container, Row } from "react-grid-system";
import CastView from "./CastView/CastView";
import { DescriptionView } from "./DescriptionView";
import classes from "./DetailedMainView.module.css";
const DetailedMainView = ({ name, rating, genres, summary, imagePath, actorList }) => {
  
  return (
    <div className={classes["detailed-layout"]}>
        <Row >
          <Col  xs={3} className={classes["col-image"]}>
          <img src={imagePath} className="App-logo" alt="logo" />
          </Col>
          <Col xs={9}   align="center" className={classes["col-content"]}>
          <Row justify="center" align="center" >
             <Col md={12}  align="center">
                <DescriptionView name={name} rating={rating} genres={genres} summary={summary}/>
             </Col>
             <Col md={12}  align="center">
                <CastView actorList={actorList}/>
            </Col>
          </Row>
            
          </Col>
        </Row>
    </div>
  );
};
export default DetailedMainView;
