import React, { useState } from "react";
import MovieList from "./Component/MovieList/MovieList";
import Navbarre from "./Component/Navbarre/Navbarre.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Description from "./Component/Description.js";
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [Movielist, setMovielist] = useState([

    {
      id: uuidv4(),
      name: "Love Rosie",
      rating: 4,
      src: "./images/loverosie.jpg",
      srcVid: "https://www.youtube.com/embed/dOMTh9Jd81w",
      description:
        "From the age of 5 Rosie Dunne and Alex Stewart have been best friends, as they take on life they just end up getting separated time and time again",
    },
    {
      id:uuidv4(),
      name: "Fast and Furious 9",
      rating: 4,
      src: "./images/fastandfurious.jpg",
      srcVid: "https://www.youtube.com/embed/bXgaPCyfO4U",
      description:
        "Fast and Furious ou Rapides et Dangereux au Québec est une série de films américains d'action dont le premier est sorti en 2001. Elle comprend neuf longs métrages ainsi que deux courts métrages.",
    },
    {
      id:uuidv4(),
      name: "The Revenant",
      rating: 4,
      src: "./images/The Revenant.jpg",
      srcVid: "https://www.youtube.com/embed/LoebZZ8K5N0",

      description:
        "Durant une expédition dans une Amérique profondément sauvage, le légendaire trappeur Hugh Glass est brutalement attaqué par un ours et laissé pour mort par les membres de sa propre équipe.",
    },
    {
      id: uuidv4(),
      name: "The Revenant",
      rating: 4,
      src: "./images/The Revenant.jpg",
      srcVid: "https://www.youtube.com/embed/LoebZZ8K5N0",
      description:
        "Durant une expédition dans une Amérique profondément sauvage, le légendaire trappeur Hugh Glass est brutalement attaqué par un ours et laissé pour mort par les membres de sa propre équipe.",
    },
    {
      id:uuidv4(),
      name: "The Lucky One",
      rating: 4,
      src: "./images/The Lucky One.jpg",
      srcVid:"https://www.youtube.com/embed/9w8lE83oYeM",
      description:
        "Le sergent Logan Thibault du corps des Marines rentre chez lui après sa troisième période de services en Irak. Il pense qu'une seule chose lui a permis de survivre à cet enfer : la photographie d'une femme qu'il n'a jamais rencontrée",
    },
    {
      id:uuidv4(),
      name: "Code 8",
      rating: 4,
      src: "./images/Code 8.jpg",
      srcVid: "https://www.youtube.com/embed/PrX1JJ5dduA",
      description:
        "Dans un monde où quatre pour cent de la population naît avec des pouvoirs surnaturels qui sont interdits, un jeune homme désespéré aux habiletés spéciales entre en conflit avec une force de police militaire et des robots à la suite d'une dispute.",
    },
    {
      id:uuidv4(),
      name: "Close",
      rating: 4,
      src: "./images/Close.jpg",
      srcVid: "https://www.youtube.com/embed/qWKsiHEpiJM",
      description:
        "Une experte en lutte anti-terroriste est obligée de devenir garde du corps pour une riche et jeune héritière à Bangkok. L'entente ne règne guère entre les deux femmes mais suite à une violente tentative d'enlèvement, elles sont obligées de s'unir pour survivre et démasquer leurs assaillants.",
    },
    {
      id:uuidv4(),
      name: "La Plateforme",
      rating: 4,
      src: "./images/La Plateforme.jpg",
      srcVid: "https://youtube.com/RlfooqeZcdY",
      description:
        "Dans le futur, des prisonniers sont détenus dans des cellules verticales. Ceux qui logent dans les cellules supérieures sont nourris, tandis que ceux des cellules inférieures meurent de faim. Goreng, un détenu fraîchement débarqué, va se battre pour changer le système.",
    },
  ]);
  /* search items hooks*/

  const [searchTerm, setSearchTerm] = useState("");
  const [rating, setrating] = useState(0);

  /*call back functions*/

  const searchTermChanged = (newvalue) => {
    setSearchTerm(newvalue);
  };

  const ratingChanged = (newRating) => {
    setrating(newRating);
  };

  const add = (movie) => {
    setMovielist([...Movielist, ...movie]);
  };
 
  /******************************************************* */
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/">
              <Navbarre
                searchTermChanged={searchTermChanged}
                ratingChanged={ratingChanged}
                add={add}
              />
              <MovieList
                Movielist={Movielist}
                searchTerm={searchTerm}
                rating={rating}
              />
            </Route>
  <Route  path={`/Movielist/description/:id`} render={(props) => <Description {...props} Movielist={Movielist} /> } > 
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
