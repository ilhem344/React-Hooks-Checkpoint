import React from "react";
import { Card } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import { Link} from "react-router-dom";
import Description from "../Description";

function MovieCard({ id,name, src, rating }) {
  return (
    <div>
      <Card style={{ width: "18rem", marginBottom: "50px" }}>
        <Card.Img
          style={{ width: "16rem", height: "16rem", margin: "auto" }}
          variant="top"
          src={src}
        />
        <Card.Body>
          <Card.Title>
            <p>{name} </p>
            <div>
              {
                <StarRatingComponent
                  name="rate2"
                  editing={false}
                  renderStarIcon={() => <span>★</span>}
                  starCount={5}
                  value={rating}
                />
              }
            </div>
          </Card.Title>
          <Card.Text style={{ height: "50px" }}>
          <Link to={`/movielist/description/${id}`}>
          <button > Voir details </button>
        </Link>
          </Card.Text>
        </Card.Body>

       
      </Card>
    </div>
  );
}

export default MovieCard;
