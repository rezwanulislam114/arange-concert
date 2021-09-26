import React from 'react';
import './Booking.css'

const Booking = (props) => {
    const bands = props.bookedBands;
    const totalBudget = bands.reduce((previous, bands) => previous + bands.budget, 0);
    return (
        <div className='booking'>
            <h1 className="booking-title">Booking Summary</h1>
            <h2>Total Band Booked: {bands.length}</h2>
            <h2 className="total">Total: {totalBudget} <span>tk</span></h2>
            <ul>
                {
                   bands.map(band => <li key={band.id} className="booked-bands">{band.name}</li>) 
                }
            </ul>
        </div>
    );
};

export default Booking;