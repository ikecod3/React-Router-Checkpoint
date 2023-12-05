/* eslint-disable react/prop-types */
import { Card, Rate } from "antd";
const { Meta } = Card;
import { Link } from "react-router-dom";

// movie card component thta generates the ui for each movies displayed to users
const MovieCard = ({ id, title, description, posterUrl, rating }) => {
  return (
    <>
      <div className="">
        <Link to={`${id}`}>
          <Card
            className="border-cyan-300 h-full"
            hoverable
            cover={<img alt={title} src={posterUrl} />}
          >
            <Meta
              style={{
                marginBottom: "1.2rem",
                textOverflow: "ellipsis",
              }}
              title={title}
              description={description.slice(0, 150)}
            />
            {/* rating element form ant design that movie predefinded ratings to the client */}
            <Rate disabled allowHalf defaultValue={rating} />
          </Card>
        </Link>
      </div>
    </>
  );
};
export default MovieCard;
<h2></h2>;
