import React from 'react';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import ShowServices from './ShowServices';


const Services = ({date,repairServices}) => {
   
    return (
        <div>
            
            <h1 className='text-center font-bold text-3xl uppercase mb-5 mt-5'><p>You picked {format(date, 'PP')} for appointment </p></h1>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {
            repairServices.map(service=> <ShowServices key={service._id} service={service} ></ShowServices>)
           }
          </div>

           <div>
           
           </div>
        </div>
    );
};

export default Services;