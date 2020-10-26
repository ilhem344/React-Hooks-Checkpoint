import React from "react";
import './Description.css'
import { useHistory } from "react-router-dom";
function Description({ Movielist, match }) {
  let result = Movielist.find((el) => match.params.id === el.id);
  let history = useHistory();
  const handleClick = () => history.push("/");

  return (
    <div className="Description">
      <h1>{result.name} </h1>
      <p>{result.description}</p>
      <iframe
        width="560"
        height="315"
        src={result.srcVid}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <button type="button" onClick={handleClick}>
        Go home
      </button>
    </div>
  );
}

export default Description;
