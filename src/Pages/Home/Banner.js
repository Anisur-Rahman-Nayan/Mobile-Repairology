import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='hero min-h-screen background'>
        <div class="hero-overlay bg-opacity-15"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Mobile Repairology</h1>
            <p class="mb-5 text-xl ">Repair guides and disassembly information for phones from all manufacturers and service providers, including Apple iPhone and Samsung Galaxy. Get everything you need to repair your phone yourself</p>
            <button class="btn btn-primary uppercase">book an appointment</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;