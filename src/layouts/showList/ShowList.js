import { Col, Row } from "react-grid-system";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showAction } from "../../store/showSlice";
import { ShowCard } from "./ShowCard";
import classes from "./ShowList.module.css";
import useHttp from "../../hooks/use-http";

const ShowList = ({ list }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const transformCast = (cast) => {
    console.log('cast ROOT >>>',cast);
    dispatch(showAction.fetchCast({ selectedCast: cast }));
  };

  const { isLoading, error: httpError, sendRequest: getCastData } = useHttp();

  const handleShowCarClick = (e) => {
    getCastData(
      {
        url: `https://api.tvmaze.com/shows/${e.currentTarget.id.toString()}/cast`,
      },
      transformCast
    );

    dispatch(showAction.setSelectedShow({searchedShows: list, selectedId : e.currentTarget.id}));
   navigate('/detailed');
  }
  return (
    <div className={classes["show-list-layout"]}>
      <Row>
        {(list.length > 0) ?
          list.map((item, index) => {
            return (
              <Col md={3} xs={6} align="center" key={item.show.id}>
                <ShowCard
                  id={item.show.id ? item.show.id : index}
                  name={item.show.name ? item.show.name : 'Not Available'}
                  rating={item.show.rating ? item.show.rating : 0}
                  imagePath={item.show.image ? item.show.image.medium : null}
                  onCardClick={handleShowCarClick}
                />
              </Col>
            );
          }): <Col><h2>Sorry! No results found.</h2>
          <p>Try another word</p>
          </Col>}
      </Row>
    </div>
  );
};
export default ShowList;
