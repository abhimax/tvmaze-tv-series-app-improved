import { SearchInput } from "../../components/SearchInput";
import logo from "../../assets/images/tvmaze-logo.svg";
import classes from "./HomePage.module.css";
import { Col, Container, Row } from "react-grid-system";
import { useNavigate } from "react-router-dom";
import { useRef} from "react";
import { useDispatch } from "react-redux";
import { showAction } from "../../store/showSlice";
import { Alert } from "../../components/Alert";
import useHttp from "../../hooks/use-http";

function HomePage() {

  const dispatch = useDispatch();
  const SearchInputRef = useRef();
  const navigate = useNavigate();

  const transformShows = (shows) => {
    dispatch(showAction.fetchShows({ searchedShows: shows }));
    navigate("/search");
  };

  const {
    isLoading,
    error: httpError,
    sendRequest: getShowsData,
  } = useHttp();

  const handleSearch = () => {
    getShowsData(
      {
        url: `https://api.tvmaze.com/search/shows?q=${SearchInputRef.current.value}`,
      },
      transformShows
    );
  };

  return (
    <div className={classes["home-container"]}>
      {isLoading && <p>Loading...</p>}
      {httpError && <Alert message={httpError} type="error"/>}
      <Container>
        <Row justify="center" align="center">
          <Col sm={12} md={10} lg={8} xl={6} style={{ marginTop: "20%" }} align="center">
            <div className={classes.home}>
              <img src={logo} className="App-logo" alt="logo" />
              <SearchInput
                onSearchClick={handleSearch}
                inputRef={SearchInputRef}
                placeholder="Search for TV shows"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default HomePage;