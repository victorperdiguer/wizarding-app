import React from "react"
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

const Home = () => {
  const [houses, setHouses] = useState(null);

  const getHouses = async () => {
    try {
      const response = await axios.get("https://wizard-world-api.herokuapp.com/Houses");
      setHouses(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getHouses();
  }, [])

  return (
    <div className="house-list">
      {houses && houses.map((house, i) => {
        return (
          <div className="house-card" key={house.name}>
            <h2>{house.name}</h2>
            <p>Founded by {house.founder}</p>
            <Link to={`/${house.id}`}>See more</Link>
          </div>
        )
      })}
    </div>
  )
};

export default Home;
