import React from 'react';
import './Booking.css'

const Booking = (props) => {
    console.log(props.bookedBands)
    const bands = props.bookedBands;
    const totalBudget = bands.reduce((previous, bands) => previous + bands.budget, 0);
    return (
        <div className='booking'>
            <h1>Booking Summary</h1>
            <h2>Total Band Booked: {bands.length}</h2>
            <h2>Total: {totalBudget} tk</h2>
            <ul>
                {
                   bands.map(band => <li key={band.id}>{band.name}</li>) 
                }
            </ul>
        </div>
    );
};

export default Booking;