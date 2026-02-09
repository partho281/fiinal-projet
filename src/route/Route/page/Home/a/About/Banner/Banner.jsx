import React from 'react';
import bg from'../../../../../../../assets/icon/bg.png'
import mobileShape from'../../../../../../../assets/image/mobileShape.png'
import doctor from'../../../../../../../assets/image/Doctor (1).png'

const Banner = () => {
    return (
        <div style={{
          backgroundImage:`url(${bg})`,
          backgroundPosition:"bottom",
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover'
        }} className=''>
            <div className="text-white">
  <div className="flex justify-between items-center gap-10 px-4 md:px-29 py-15 md:py-20 min-h-screen">
    
    <div className='w-1/1 md:2/4 space-y-5'>
      <h1 className="text-4xl font-bold ">A Wealth of Experience To Heal And Help You.</h1>
      <p className="py-6">
       A modern doctor website providing trusted medical information, easy appointment booking, professional care services, and patient-focused healthcare solutions for a healthier, happier life.

      </p>
     <button className='bg-secondary px-7 py-4 text-black mr-5'>See More</button>
     <button className='bg-white px-5 py-2 md:px-7 text-black'>Make an Appointment</button>
     
       
    </div>
    {/*====== Mobile shape===== */}
<div className='w-1/1 md:2/4 flex justify-end items-center relative ' >
  <img className=''
      src={mobileShape}
    />
    
     <div className='absolute top-15 w-232px right-3 space-y-10'>
      <img src={doctor} alt="best medical,best doctor" />
     <div className='space-y-28 '>
       <h2 className='text-2xl md:text-3xl lg:text-4xl text-center font-bold '>Doctor <br />Service</h2>
      <button className='w-full bg-primary rounded-full py-5 text-center px-1 p-2'>Register Now</button>
     </div>
        
    </div>
</div>
  </div>
</div>
        </div>
    );
};

export default Banner;