import { Col, Row } from "react-grid-system";
import { ShowCard } from "./ShowCard";
import classes from "./ShowList.module.css";
const ShowList = ({ list }) => {
  return (
    <div className={classes["show-list-layout"]}>
      <Row>
        {list &&
          list.map((item) => {
            return (
              <Col md={3} xs={6} align="center">
                <ShowCard
                  name={item.show.name}
                  rating={item.show.rating}
                  image={item.show.image.medium}
                />
              </Col>
            );
          })}
      </Row>
    </div>
  );
};
export default ShowList;
