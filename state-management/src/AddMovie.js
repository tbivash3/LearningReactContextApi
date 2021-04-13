import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [
      ...prevMovies,
      { name: name, price: price, id: 67 },
    ]);
  };

  return (
    <form onSubmit={addMovie}>
      <h2>Add a New Movie</h2>
      <label>Movie Name: </label>
      <input type="text" name="name" value={name} onChange={updateName} />
      <br /> <br />
      <label>Movie Price: </label>
      <input type="text" name="price" value={price} onChange={updatePrice} />
      <button>Submit</button>
    </form>
  );
};

export default AddMovie;
