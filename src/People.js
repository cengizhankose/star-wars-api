import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const People = (props) => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://swapi.dev/api/people/").then((response) =>
      response.json()
    );
    console.log("DATA", data);
    setPeople(data.results);
  };
  console.log("====================================");
  console.log(people);
  console.log("====================================");
  return (
    <div>
      {people.map((person, index) => (
        <h1 key={index}>
          <Link
            to={{
              pathname: `/people/${index}`,
              state: { url: person.url },
            }}
          >
            {person.name}
          </Link>
        </h1>
      ))}
    </div>
  );
};

export default People;
