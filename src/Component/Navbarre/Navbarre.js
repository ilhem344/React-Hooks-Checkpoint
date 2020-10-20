import React, { useState } from "react";
import { Navbar, Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactStars from "react-rating-stars-component";
import Movie from "../Movie";
function Navbarre({ searchTermChanged, ratingChanged, add }) {
  return (
    <div>
      <Navbar style={{ marginBottom: "50px" }} bg="light" variant="light">
        <Navbar.Brand href="#home">Movie Search</Navbar.Brand>
        <Form inline>
          {/*Name search*/}
          <FormControl
            onChange={(e) => {
              // setSearchTerm(e.target.value);
              searchTermChanged(e.target.value);
            }}
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          {/*rating search*/}
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
          {/*add a movie function*/}
          <Movie add={add} />
        </Form>
      </Navbar>
    </div>
  );
}

export default Navbarre;
