import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { data } from 'react-router-dom';
import AppointmentOption from '../Appointmentoption/AppointmentOption';

const Servicesoption = () => {

    // const[services,setServices]= useState([]);
    //  useEffect(()=>{
    //     fetch("./data.json")
    //     .then(res=>res.json())
    //     .then(data=>setServices(data))
    //  },[])
     const {data:services=[]} = useQuery({
            queryKey:["posts"],
            queryFn:async()=>{
                const res = await fetch("./data.json");
                const data = await res.json();
                return data;
            },
        })
    return (
       

        <div>
              <h1 className='text-5xl font-semibold cursor-pointer  flex justify-center px-4 md:px-29 py-0 md:py-20'>Our Services </h1>
              <h3 className='text-center text-2xl text-primary'>Your Appointment Date: {services.length}</h3>
              <div>
                 <div className='grid grid-cols-2 md:grid-cols-3 gap-6 mt-10'>
                {
                  services?.map((service,i)=>(<AppointmentOption key={i}
                   service={service}></AppointmentOption>))
                }
            </div>
              </div>
        </div>
    );
};

export default Servicesoption;
