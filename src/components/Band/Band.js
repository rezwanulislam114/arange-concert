import React from 'react';
import './Band.css'

const Band = (props) => {
    const {name, founded, members, origin, types, budget, img} = props.band;
    return (
        <div className="band">
            <img src={img} alt="" />
            <div className="band-details">
                <h2>{name}</h2>
                <h3>Types: <span>{types}</span></h3>
                <h3>Orign: <span>{origin}</span></h3>
                <h3>Founded: <span>{founded}</span></h3>
                <h3>Members: <span>{members}</span></h3>
                <h3>Budget: <span>{budget}</span></h3>
            </div>
            <button onClick={() => props.handleButton(props.band)} className="booking-button">
                <i className="far fa-bookmark"></i>
                Book Now
            </button>
        </div>
    );
};

export default Band;