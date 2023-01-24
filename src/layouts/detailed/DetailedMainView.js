import { Col, Container, Row } from "react-grid-system";
import CastView from "./CastView/CastView";
import { DescriptionView } from "./DescriptionView";
import classes from "./DetailedMainView.module.css";
const DetailedMainView = ({ name, rating, genres, summary, imagePath, actorList }) => {
  
  return (
    <div className={classes["detailed-layout"]}>
        <Row >
          <Col  md={3}   debug >
          <img src={imagePath} className="App-logo" alt="logo" />
          </Col>
          <Col md={9}  align="center" debug>
          <Row justify="center" align="center" >
             <Col md={12}  align="center" debug>
                <DescriptionView name={name} rating={rating} genres={genres} summary={summary}/>
             </Col>
             <Col md={12}  align="center" debug>
                <CastView actorList={actorList}/>
            </Col>
          </Row>
            
          </Col>
        </Row>
    </div>
  );
};
export default DetailedMainView;
