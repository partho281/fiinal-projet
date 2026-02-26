import React from 'react';
import { useForm } from 'react-hook-form';
import {  Link } from 'react-router-dom';

const SignUp = () => {

 const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm()
  const handleUserRegistration =(data)=>{
 console.log(data);
  }
   
    
 

    return (
        <div className=' mx-auto card shadow-2xl mt-10 w-96'>
        <div className='card-body '>
            <form onSubmit={handleSubmit(handleUserRegistration)} className='fieldset'>
               <div>
                 <label className='label'>Name</label>
                <input className='input w-full'{...register('name')}placeholder='type your name' type="text" />
               </div>
               <div className='mt-2'>
                 <label className='label'>Email</label>
                <input className='input w-full'{...register('email')} type="text" />
               </div>
               <div className='mt-2'>
                 <label className='label'>Password</label>
                <input className='input w-full'{...register('password')} type="text" />
                 <div className='mt-2'>
              <input type="Submit" className='input w-full bg-primary text-white' />

               </div>
               <p className='text-primary label '>Already have an Account? <Link className='underline' to='/signin'>Login Please</Link></p>
               
               </div>
              
            </form>
             <div className='grid grid-cols-2 gap-3'>
                    <button className='input w-full bg-primary text-white'>
                    Continue With Google
                    </button>
                    <button className='input w-full bg-primary text-white'>
                    Continue With Github
                    </button>
                </div>
        </div>
        </div>
    );
};

export default SignUp;