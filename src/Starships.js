import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Starships = () => {
  const [starships, setStarships] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://swapi.dev/api/starships/"
    ).then((response) => response.json());
    console.log(data);
    setStarships(data.results);
  };
  console.log("====================================");
  console.log(starships);
  console.log("====================================");
  return (
    <div className="starships-page-container">
      {starships.map((starship, index) => (
        <h1 key={index}>
          <Link
            to={{
              pathname: `/starships/${index}`,
              state: { url: starship.url },
            }}
          >
            {starship.name}
          </Link>
        </h1>
      ))}
      <button>Next</button>
      <button>Previous</button>
    </div>
  );
};

export default Starships;
