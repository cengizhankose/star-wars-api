import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const People = (props) => {
  const [people, setPeople] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://swapi.dev/api/people/").then((response) =>
      response.json()
    );
    console.log("DATA", data);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setPeople(data.results);
  };
  const nextPage = async () => {
    const data = await fetch(nextUrl).then((response) => response.json());
    console.log("DATA", data);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setPeople(data.results);
  };
  const prevPage = async () => {
    const data = await fetch(prevUrl).then((response) => response.json());
    console.log("DATA", data);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setPeople(data.results);
  };

  console.log("====================================");
  console.log(people);
  console.log("====================================");
  return (
    <div className="people-page-container">
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
      <button onClick={prevPage}>Previous</button>
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default People;
