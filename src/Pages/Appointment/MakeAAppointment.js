import React from 'react';
import image from '../../img/shutterstock_1079627714-min-scaled.jpg'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const MakeAAppointment = ({setDate,date}) => {
  
    return (
        <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img src={image} class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold">Select Your Appointment Date!</h1>
            <p class="mt-3 text-black text-xl">You must schedule an appointment for the servicing, either online using this website or through the call center.</p>
      <div >
      <DayPicker
      mode="single"
      selected={date}
      onSelect={setDate}
    />
      </div>
          </div>
        </div>
      </div>
    );
};

export default MakeAAppointment;