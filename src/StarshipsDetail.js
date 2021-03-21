import React, { useEffect, useState } from "react";

const StarshipsDetail = (props) => {
  const [starship, setStarship] = useState([]);
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
    setStarship(data);
  };
  console.log("====================================");
  console.log(starship);
  console.log("====================================");
  return (
    <div>
      {starship.detail ? (
        <h1>{starship.detail}</h1>
      ) : (
        <div>
          <h1>{starship.name}</h1>
          <span className="cargo-capacity">
            <h2>Cargo Capacity:</h2>
            <p>{starship.cargo_capacity}</p>
          </span>
          <span className="mglt">
            <h2>MGLT:</h2>
            <p>{starship.MGLT}</p>
          </span>
          <span className="consumables">
            <h2>Consumables:</h2>
            <p>{starship.consumables}</p>
          </span>
          <span className="cost-in-credits">
            <h2>Cost In Credits:</h2>
            <p>{starship.cost_in_credits}</p>
          </span>
          <span className="created">
            <h2>Created:</h2>
            <p>{starship.created}</p>
          </span>
          <span className="crew">
            <h2>Crew:</h2>
            <p>{starship.crew}</p>
          </span>
        </div>
      )}
    </div>
  );
};

export default StarshipsDetail;
