import { SearchInput } from "../../components/SearchInput";
import logo from '../../assets/images/tvmaze-logo.svg';
import classes from "./HomePage.module.css";

import { Col, Container, Row } from "react-grid-system";
import { useNavigate } from "react-router-dom";
function HomePage (){
    console.log('HOME>>>');
   const navigate = useNavigate();
    const handleSearch = () => {
        //TODO search
        console.log('Search>>>');
        navigate('/search');
    }
    return(
        <div className={classes["home-container"]}>
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
        </div>
    );

}
export default HomePage;