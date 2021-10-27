import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "./view/Home";
import data from "./data";
import Button from "@mui/material/Button";

function App() {
  const [movies, setMovies] = useState([]);
  const [toggleData, setToggleData] = useState(false);

  const getMovies = () => {
    axios
      .get(`http://www.omdbapi.com?s=avengers&apikey=993b0c40`)
      .then((res) => setMovies(res.data.Search))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getMovies();
  }, []);

  const renderedData = toggleData ? movies : data; 

  return (
    <div className="App" style={{ paddingTop: 100, paddingBottom: 300 }}>
      <Home renderedData={renderedData} />
      <Button
        variant="contained"
        href="#outlined-buttons"
        onClick={() => setToggleData(!toggleData)}
      >
        Switch Data
      </Button>
    </div>
  );
}

export default App;
