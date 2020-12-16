import { Row, Col, Card } from "antd";
import { useQuery } from "react-query";
import { request, gql } from "graphql-request";
import constants from "../constants";

const { Meta } = Card;

const useMovies = () => {
  return useQuery("movies", async () => {
    const { movies } = await request(
      "http://localhost:4000",
      gql`
        query {
          movies {
            id
            title
            description
          }
        }
      `
    );
    return movies;
  });
};

const Movies = () => {
  const { data, error, isFetching } = useMovies();

  if (isFetching) return <span>Loading...</span>;
  if (error) return <span>Error: {error.message}</span>;

  return (
    <Row>
      {data &&
        data.map((movie) => (
          <Col span={12} key={movie.id}>
            <Card hoverable style={{ margin: 15 }}>
              <Meta title={movie.title} description={movie.description} />
            </Card>
          </Col>
        ))}
    </Row>
  );
};

export default Movies;
