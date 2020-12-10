import { Row, Col, Card } from "antd";
import { useQuery } from "react-query";
import constants from "../constants";

const { Meta } = Card;

const Movies = () => {
  const { isLoading, isError, data, error } = useQuery("movies", () =>
    fetch(constants.api.movies.list).then((res) => res.json())
  );

  if (isLoading) return <span>Loading...</span>;
  if (isError) return <span>Error: {error.message}</span>;

  return (
    <Row>
      {data &&
        data.map((movie) => (
          <Col span={12} key={movie.id}>
            <Card hoverable style={{ margin: 15 }}>
              <Meta title={movie.title} description={movie.genre} />
            </Card>
          </Col>
        ))}
    </Row>
  );
};

export default Movies;
