import { Col, Row } from "react-grid-system";
import logo from "../../../assets/images/tvmaze-logo.svg";
import { SearchInput } from "../../../components/SearchInput";
import classes from "./AppHeader.module.css";
const AppHeader = () => {
  return (
    <div className={classes["header-wrapper"]}>
      <Row>
        <Col md={12} lg={4} xlg={3}  align="left" className={classes['image-holder']}>
          <img src={logo} className="App-logo" alt="logo" />
        </Col>
        <Col md={12} lg={8} xlg={9} >
          <SearchInput placeholder="Search for TV shows"/>
        </Col>
      </Row>
    </div>
  );
};
export default AppHeader;
