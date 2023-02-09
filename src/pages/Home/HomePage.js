import { SearchInput } from "../../components/SearchInput";
import logo from "../../assets/images/tvmaze-logo.svg";
import classes from "./HomePage.module.css";
import { Col, Container, Row } from "react-grid-system";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { showAction } from "../../store/showSlice";
import { Alert } from "../../components/Alert";
import useHttp from "../../hooks/use-http";
import { LoadingSpinner } from "../../components/LoadingSpinner";

function HomePage() {
  const dispatch = useDispatch();
  const SearchInputRef = useRef();
  const navigate = useNavigate();

  const transformShows = (shows) => {
    dispatch(showAction.fetchShows({ searchedShows: shows }));
    navigate("/search");
  };

  const { isLoading, error: httpError, sendRequest: getShowsData } = useHttp();
  const handleSearch = () => {
    if(SearchInputRef.current.value === ''){
      return;
    }
    getShowsData(
      {
        url: `https://api.tvmaze.com/search/shows?q=${SearchInputRef.current.value}`,
      },
      transformShows
    );
  };

  const handleKeyDown = (event) => {
    
    if (event.key === 'Enter') {
      if (event.target.value === "") {
        return;
      }
      getShowsData(
        {
          url: `https://api.tvmaze.com/search/shows?q=${event.target.value}`,
        },
        transformShows
      );
    }
  };

  const errorContent = (
    <Row justify="center" align="center">
      <Col
        justify="center"
        align="center"
        className={classes["alert-wrapper"]}
        sm={12}
        md={10}
        lg={8}
        xl={6}
      >
        <Alert message={httpError} type="error" />
      </Col>
    </Row>
  );

  const loadingContent = (
    <Row>
      <Col md={12} align="center" className={classes["loader-wrapper"]}>
        <LoadingSpinner />
      </Col>
    </Row>
  );

  const searchContent = (
    <Row justify="center">
      <Col
        sm={12}
        md={10}
        lg={8}
        xl={6}
        style={{ marginTop: "20%" }}
        align="center"
      >
        <div className={classes.home}>
          <img src={logo} className="App-logo" alt="logo" />
          <SearchInput
            onSearchClick={handleSearch}
            inputRef={SearchInputRef}
            placeholder="Search for TV shows"
            onKeyDown={handleKeyDown}
          />
        </div>
      </Col>
    </Row>
  );
  return (
    <div className={classes["home-container"]}>
      <Container>
        {httpError && errorContent}
        {isLoading && loadingContent}
        {!isLoading && searchContent}
      </Container>
    </div>
  );
}
export default HomePage;
