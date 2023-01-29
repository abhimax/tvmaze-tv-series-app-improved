import { Col, Hidden, Row, Visible } from "react-grid-system";
import CastView from "./CastView/CastView";
import { DescriptionView } from "./DescriptionView";
import classes from "./DetailedMainView.module.css";
import nullTreatmentImg from "../../../src/assets/images/null-treatment-img.png";

const DetailedMainView = ({ name, rating, genres, summary, imagePath, actorList }) => {
  return (
    
    <div className={classes["detailed-layout"]}>
        <Row >
          <Col  xs={3} order={{xs: 2, s: 2, md: 2}}>
          {imagePath ? <img src={imagePath} className="App-logo" alt="logo" />: <img src={nullTreatmentImg} alt="logo"/>}
          </Col>
          <Col xs={9}   align="center" order={{lg: 2, xl: 2, xxl: 2, xxxl: 2}}>
          <Row justify="center" align="center" >
             <Col md={12}  align="center">
                <DescriptionView name={name} rating={rating} genres={genres} summary={summary}/>
             </Col>
             <Hidden xs sm md>
              <Col md={12}  align="center">
                  <CastView actorList={actorList}/>
              </Col>
             </Hidden>
          </Row>
          </Col>
          <Visible xs sm md>
            <Col md={12}  align="center" order={{xs: 2, s: 2, md: 2}}>
              <CastView actorList={actorList}/>
            </Col>
          </Visible>
        </Row>
    </div>
  );
};
export default DetailedMainView;
