import { SearchInput } from "../../components/SearchInput";
import logo from '../../assets/images/tvmaze-logo.svg';
import classes from "./HomePage.module.css";

import { Col, Container, Row } from "react-grid-system";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function HomePage (){
    const [shows, setShows] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [httpError, setHttpError] = useState();

   const navigate = useNavigate();

   const  getShowsData = async () => {
    setLoading(true);
    const response = await fetch('https://api.tvmaze.com/search/shows?q=girls');
    if(!response.ok){
      throw new Error("Something went wrong!");
    }
    const showData = await response.json();
    setShows(showData);
    setLoading(false);
  }
    const handleSearch = () => {
        //TODO search
        getShowsData().catch((error) => {
            setLoading(false);
            setHttpError(error.message);
          });
        }

    return(
        <div className={classes["home-container"]}>
            { isLoading &&  <p>Loading...</p>}
            { httpError && httpError}
        <Container>
            <Row justify="center" align="center">
            <Col sm={6}  style={{ marginTop: '20%'}} align="center">
            <div className={classes.home}>
            <img src={logo} className="App-logo" alt="logo" />
            <SearchInput onSearchClick={handleSearch}/>
        </div>
                </Col>

        </Row>
        </Container>
        {console.log('Show List',shows)}
        </div>
    );

}
export default HomePage;