import React, { useEffect, useState } from "react";

const PersonDetail = (props) => {
  const [person, setPerson] = useState({});
  useEffect(() => {
    fetchData();
    console.log("====================================");
    console.log("PROPS", props);
    console.log("====================================");
  }, []);
  const fetchData = async () => {
    const data = await fetch(`${props.location.state.url}`).then((response) =>
      response.json()
    );
    setPerson(data);
  };
  console.log("====================================");
  console.log(person);
  console.log("====================================");
  return (
    <div className="person-page-container">
      {person.detail ? (
        <h1>{person.detail}</h1>
      ) : (
        <div>
          <h1>{person.name}</h1>
          <span className="birth-year">
            <h2>Birth Year:</h2>
            <p>{person.birth_year}</p>
          </span>
          <span className="mglt">
            <h2>Create Date:</h2>
            <p>{person.created}</p>
          </span>
          <span className="consumables">
            <h2>Edit Date:</h2>
            <p>{person.edited}</p>
          </span>
          <span className="cost-in-credits">
            <h2>Eye Color:</h2>
            <p>{person.eye_color}</p>
          </span>
          <span className="created">
            <h2>Gender:</h2>
            <p>{person.gender}</p>
          </span>
          <span className="crew">
            <h2>Hair Color:</h2>
            <p>{person.hair_color}</p>
          </span>
        </div>
      )}
    </div>
  );
};

export default PersonDetail;
