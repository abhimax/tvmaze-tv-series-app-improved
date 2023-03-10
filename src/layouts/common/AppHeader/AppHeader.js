import { Col, Row } from "react-grid-system";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/tvmaze-logo.svg";
import { SearchInput } from "../../../components/SearchInput";
import classes from "./AppHeader.module.css";
import useHttp from "../../../hooks/use-http";
import { showAction } from "../../../store/showSlice";
import { useRef } from "react";
import { Alert } from "../../../components/Alert";
import { LoadingSpinner } from "../../../components/LoadingSpinner";

const AppHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const SearchInputRef = useRef();
  const transformShows = (shows) => {
    dispatch(showAction.fetchShows({ searchedShows: shows }));
    navigate("/search");
  };

  const { isLoading, error: httpError, sendRequest: getShowsData } = useHttp();

  const handleSearch = () => {
    if (SearchInputRef.current.value === "") {
      return;
    }
    getShowsData(
      {
        url: `https://api.tvmaze.com/search/shows?q=${SearchInputRef.current.value}`,
      },
      transformShows
    );
    navigate("/search");
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
      navigate("/search");
    }
  };

  const handleLogoClick = () => {
    navigate("/tvmaze-tv-series-app-improved");
  };

  const loadingContent = (
    <Col md={12} align="center" className={classes["loader-wrapper"]}>
      <LoadingSpinner />
    </Col>
  );

  const errorContent = (
    <Row>
      <Col md={12} align="center" className={classes["loader-wrapper"]}>
        <Alert message={httpError} type="error" />
      </Col>
    </Row>
  );

  return (
    <div className={classes["header-wrapper"]}>
      {httpError && errorContent}
      <Row>
        <Col
          md={12}
          lg={4}
          xlg={3}
          align="left"
          className={classes["image-holder"]}
        >
          <img src={logo} alt="logo" onClick={handleLogoClick} />
        </Col>
        <Col md={12} lg={8} xlg={9} className={classes["input-holder"]}>
          <SearchInput
            placeholder="Search for TV shows"
            onSearchClick={handleSearch}
            inputRef={SearchInputRef}
            onKeyDown={handleKeyDown}
          />
        </Col>
        {isLoading && loadingContent}
      </Row>
    </div>
  );
};
export default AppHeader;
