import React, { useEffect, useState } from 'react';
import MakeAAppointment from './MakeAAppointment';
import Services from './Services'

const Appointment = () => {
    const [date, setDate] = useState(new Date());

    const [repairServices, setRepairServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res=> res.json())
        .then(data=> setRepairServices(data))
    },[])
    
    return (
        <div>
            <MakeAAppointment date={date} setDate={setDate}></MakeAAppointment>
            <Services date={date} setDate={setDate} repairServices={repairServices} ></Services>
        </div>
    );
};

export default Appointment;