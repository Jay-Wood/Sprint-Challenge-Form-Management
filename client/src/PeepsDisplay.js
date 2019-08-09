import React, { useState, useEffect } from 'react';
import Axios from "axios";

const PeepsDisplay = () => {

    const [peeps, setPeeps] = useState()    

    useEffect(() => {
        Axios.get("http://localhost:5000/api/restricted/data")
        .then(res => {
            console.log(res.data)
            setPeeps(res.data)
        })
        .catch(error => {
            console.error(error);
        });

    }, [])

    return (
        <div>
            <h3>Former Humans who are now Foods</h3>
            {console.log("peeps",peeps)}
            <div className="dishes">
                {peeps && peeps.map(peep => (
                    <div className="dish">
                        <p>Dish Name: {peep.name}</p>
                        <p>Course: {peep.course}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PeepsDisplay;