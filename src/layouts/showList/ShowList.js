import { Col, Row } from "react-grid-system";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showAction } from "../../store/showSlice";
import { ShowCard } from "./ShowCard";
import classes from "./ShowList.module.css";
import useHttp from "../../hooks/use-http";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { Alert } from "../../components/Alert";

const ShowList = ({ list }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const transformCast = (cast) => {
    dispatch(showAction.fetchCast({ selectedCast: cast }));
  };

  const { isLoading, error: httpError, sendRequest: getCastData } = useHttp();

  const handleShowCarClick = (id) => {
    getCastData(
      {
        url: `https://api.tvmaze.com/shows/${id.toString()}/cast`,
      },
      transformCast
    );

    dispatch(
      showAction.setSelectedShow({
        searchedShows: list,
        selectedId: id.toString(),
      })
    );
    navigate("/detailed");
  };

  const listContent =
    list.length > 0 ? (
      <Row>
        {list.map((item, index) => {
          return (
            <Col md={3} xs={6} align="center" key={item.show.id}>
              <ShowCard
                name={item.show.name ? item.show.name : "Not Available"}
                rating={item.show.rating ? item.show.rating : 0}
                imagePath={item.show.image ? item.show.image.medium : null}
                onCardClick={handleShowCarClick.bind(null,item.show.id)}
              />
            </Col>
          );
        })}
      </Row>
    ) : (
      <Col>
        <h2>Sorry! No results found.</h2>
        <p>Try another word</p>
      </Col>
    );

  const loadingContent = (
    <Row>
      <Col md={12} align="center" className={classes["loader-wrapper"]}>
        <LoadingSpinner />
      </Col>
    </Row>
  );
  const errorContent = (
    <Row>
      <Col md={12} align="center" className={classes["loader-wrapper"]}>
      <Alert message={httpError} type="error" />
      </Col>
    </Row>
  );

  return (
    <div className={classes["show-list-layout"]}>
      {isLoading && loadingContent}
      {httpError && errorContent}
      {!isLoading && listContent}
    </div>
  );
};
export default ShowList;
