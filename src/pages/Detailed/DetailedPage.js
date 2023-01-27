import classes from "./DetailedPage.module.css";
import { Col, Container, Row } from "react-grid-system";
import AppHeader from "../../layouts/common/AppHeader/AppHeader";
import { Button } from "../../components/Button";
import Back from "../../components/Icon/Back";
import { DetailedMainView } from "../../layouts/detailed";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function DetailedPage() {
  const selectedShow = useSelector(state => state.shows.selectedShow);
  const navigate = useNavigate();
  const handleBackToSearch = () => {
    navigate("/search");
  }
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
            className={classes["back-to-search-wrapper"]}
          >
            <Button
              label={"  Back to search Results"}
              icon={<Back size={20} />}
              darkMode
              fitContent
              onClick={handleBackToSearch}
            />
          </Col>
          <Col
            sm={10}
            md={10}
            xxl={8}
            align="center"
            className={classes["search-list-column"]}
          >
            <DetailedMainView
              name={selectedShow.show.name}
              rating={selectedShow.show.rating}
              genres={selectedShow.show.genres}
              summary={selectedShow.show.summary}
              imagePath={selectedShow.show.image.original}
              actorList={[
                {
                  name: "Jennifer Aniston",
                  character: "Rachel Green",
                  image:
                    "https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg",
                },
                {
                  name: "Matthew",
                  character: "Chandler",
                  image:
                    "https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg",
                },
              ]}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default DetailedPage;
