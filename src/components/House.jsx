import React from "react"
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const House = () => {
    const houseId = useParams().houseId;
    const [house, setHouse] = useState(null);
    
    const getHouse = async () => {
        const response = await axios.get(`https://wizard-world-api.herokuapp.com/Houses/${houseId}`)
        setHouse(response.data);
    }

    useEffect(() => {
        getHouse();
    }, [])
    
    return (
        <div className="house-container">
            {house && (
                <div className="house">
                    <h2>{house.name}</h2>
                    <p>House color: {house.colors}</p>
                    <p>Animal: {house.animal} | Element: {house.element}</p>
                    <h2>Traits of students:</h2>
                    <ul>
                        {house.traits.map((trait) => {
                            return <li>{trait.name}</li>
                        })}
                    </ul>
                </div>
            )}
        </div>
    )
};

export default House;
