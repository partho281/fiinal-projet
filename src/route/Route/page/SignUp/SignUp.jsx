import React from 'react';
import { useForm } from 'react-hook-form';
import {  Link } from 'react-router-dom';

const SignUp = () => {

 const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
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
                <input className='input w-full'{...register('name',{required:'Name is required'})}placeholder='type your name' type="text" />
              {errors.name &&   <p className='text-red-500'>{errors.name.message}</p>}
               </div>
               <div className='mt-2'>
                 <label className='label'>Email</label>
                <input className='input w-full'{...register('email',{required:'Email Adress is required'})}placeholder='type your email ' type="text" />
                  {errors.email &&   <p className='text-red-500'>{errors.email.message}</p>}
               </div>
               <div className='mt-2'>
                 <label className='label'>Password</label>
                <input className='input w-full'{...register('password',{required:'password  is required',minLength:{
                  value:6,
                  message:'password should six characters',
                },pattern:{
                  value:/(?=.*[A-Z])(?=.*[@$#^&+-=!])(?=.*[0-9])/,
                  message:'Password should be one special characters,one capital and number'
                },
              },
                    
                )}placeholder='type your password'
              
                type="text" />
                  {errors.password &&   <p className='text-red-500'>{errors.password.message}</p>}
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