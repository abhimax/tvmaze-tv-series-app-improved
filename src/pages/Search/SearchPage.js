import classes from "./SearchPage.module.css";
import { Col, Container, Row } from "react-grid-system";
import AppHeader from "../../layouts/common/AppHeader/AppHeader";
import { ShowList } from "../../layouts/showList";
import { useSelector } from "react-redux";

function SearchPage() {
  const searchedShows = useSelector((state) => state.shows.searchedShows);
  return (
    <div className={classes["search-container"]}>
      <Container>
        <Row justify="center" align="center">
          <Col sm={10} md={10} xxl={8} align="center">
            <AppHeader />
          </Col>
          <Col
            sm={10}
            md={10}
            xxl={8}
            align="center"
            className={classes["search-list-column"]}
          >
            <ShowList list={searchedShows} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default SearchPage;
