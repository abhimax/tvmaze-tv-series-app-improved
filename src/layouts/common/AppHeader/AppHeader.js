import { Col, Row } from "react-grid-system";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/tvmaze-logo.svg";
import { SearchInput } from "../../../components/SearchInput";
import classes from "./AppHeader.module.css";
const AppHeader = () => {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/search");
  };
  return (
    <div className={classes["header-wrapper"]}>
      <Row>
        <Col
          md={12}
          lg={4}
          xlg={3}
          align="left"
          className={classes["image-holder"]}
        >
          <img src={logo} className="App-logo" alt="logo" />
        </Col>
        <Col md={12} lg={8} xlg={9}>
          <SearchInput
            placeholder="Search for TV shows"
            onSearchClick={handleSearch}
          />
        </Col>
      </Row>
    </div>
  );
};
export default AppHeader;
