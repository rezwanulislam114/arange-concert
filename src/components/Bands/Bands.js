import React, { useEffect, useState } from 'react';
import Band from '../Band/Band';
import './Bands.css'

const Bands = () => {
    // use state for bands
    const [bands, setBands] = useState([]);

    // use effect for bands (call data from fakedb)
    useEffect(() => {
        fetch ('./fakedb.json')
        .then (response => response.json())
        .then (data =>setBands(data))
    }, [])
    return (
        <div className="bands">
            <div className="bands-section">
                {
                    bands.map(band => <Band key={band.id} band={band}></Band>)
                }
            </div>
            <div className="booking-section">
                <h2>this is booking section</h2>
            </div>
        </div>
    );
};

export default Bands;