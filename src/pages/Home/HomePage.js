import { SearchInput } from "../../components/SearchInput";
import logo from "../../assets/images/tvmaze-logo.svg";
import classes from "./HomePage.module.css";
import { Col, Container, Row } from "react-grid-system";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { showAction } from "../../store/showSlice";
import { Alert } from "../../components/Alert";

function HomePage() {
  const [shows, setShows] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [httpError, setHttpError] = useState();
  const dispatch = useDispatch();
  const SearchInputRef = useRef();

  const navigate = useNavigate();

  const getShowsData = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${SearchInputRef.current.value}`
    );
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const showData = await response.json();
    setShows(showData);
    setLoading(false);
    dispatch(showAction.fetchShows({ searchedShows: showData }));
  };
  const handleSearch = () => {
    if(SearchInputRef.current.value === ''){
      setHttpError('Please Enter value to search shows...');
      //TODO error message component.
      return;
    }
    //TODO search
    getShowsData().catch((error) => {
      setLoading(false);
      setHttpError(error.message);
    });
    navigate("/search");
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
