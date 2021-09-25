import React, { useEffect, useState } from 'react';
import Band from '../Band/Band';
import Booking from '../Booking/Booking';
import './Bands.css'

const Bands = () => {
    // use state for bands
    const [bands, setBands] = useState([]);

    // use state for booking
    const [bookedBands, setBookedBands] = useState([]);

    // use effect for bands (call data from fakedb)
    useEffect(() => {
        fetch ('./fakedb.json')
        .then (response => response.json())
        .then (data =>setBands(data))
    }, [])

    // handle button fuction 
    const handleButton = band => {
        const totalBooked = [...bookedBands, band];
        setBookedBands(totalBooked);
    }
    return (
        <div className="bands">
            <div className="bands-section">
                {
                    bands.map(band => <Band key={band.id} band={band} handleButton={handleButton}></Band>)
                }
            </div>
            <div className="booking-section">
                <Booking key={bookedBands.id} bookedBands={bookedBands}></Booking>
            </div>
        </div>
    );
};

export default Bands;