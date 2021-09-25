import React from 'react';
import './Band.css'

const Band = (props) => {
    console.log(props.band)
    const {name, founded, members, origin, types, budget, img} = props.band;
    return (
        <div className="band">
            <img src={img} alt="" />
            <div className="band-details">
                <h2>{name}</h2>
                <h3>Founded: {founded}</h3>
                <h3>Types: {types}</h3>
                <h3>Orign: {origin}</h3>
                <h3>Members: {members}</h3>
                <h3>Budget: {budget}</h3>
            </div>
            <button className="booking-button">
                <i class="far fa-bookmark"></i>
                Book Now
            </button>
        </div>
    );
};

export default Band;