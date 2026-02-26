import React from 'react';
import PrimaryButton from '../../../../../../../components/shared/Header/PrimaryButton/PrimaryButton';
const MakeAppointment=()=>{
    const handleMakeAppointment=(e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.fullName.value;
        const email = form.email.value;
        const phone =form.phone.value;
        const department=form.email.value;
        const extra=form.email.value;
        const time =form.email.value;

        console.log(name,email,phone,department,extra,time);
        
    };




    return (
        <div className='px-4 md:px-29 py-10 md:pt-20 md:pb-20'>
            <div>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold bg-secondary py-3 md:py-6 lg:py-7 text-center text-black'>Make An Appointment</h2>
            </div>
            <form onSubmit={handleMakeAppointment}>
             <div className='flex gap-15 '>
                   <div>
                    <input className ='input w-full mt-9' name='fullName' placeholder='Full Name' type="text" />
                     <input className ='input w-full mt-9'name='phone' placeholder='Phone Number' type="text" />
                     <input className ='input w-full mt-9'name='additional info' placeholder='Additional Information' type="text" />
                     
                </div>
                  <div>
                    <input className ='input w-full mt-9' name='email' placeholder='Email' type="text" />
                     <input  className ='input w-full mt-9'name='department' placeholder='Department' type="text" />
                     <input className ='input w-full mt-9'name='time' placeholder='Date and Time' type="text" />
                     
                </div>
                  <div className=' mx-auto w-50 mt-7'>
             </div>
            
           </div>
            <input className='mt-6 mx-auto block bg-primary  px-7 md:px-5 py-3 md:py-3  text-center w-auto text-white font-semibold' value='Confirm' type='submit'/>
            </form>
         
        </div>
    );
};

export default MakeAppointment;