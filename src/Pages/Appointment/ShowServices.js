import React from 'react';

const ShowServices = ({service,setOpenModal}) => {
    return (
        <div class="card w-96 bg-primary font-bold text-primary-content">
  <div class="card-body">
    <h2 class="card-title">{service.brand}</h2>
    
        {
            service.slots.length > 0 ? <span>{service.slots[0]}</span> : <span className='text-red-500'>No Available Appointment slot !</span>
        }
    
        <p>
            {service.slots.length} {service.slots.length> 1 ? 'spaces' : 'space'}
        </p>
    
    
    <div class="card-actions justify-end">
     
      <label for="booking-modal" class="btn" disabled={service.slots.length===0} onClick={()=>setOpenModal(service)}>Book Appointment !</label>
    </div>
  </div>
</div>
    );
};

export default ShowServices;