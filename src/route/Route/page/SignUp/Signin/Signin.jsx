import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import {  Link } from 'react-router-dom';
import UserContext, { AuthContext } from '../../../../../Context/Usercontext';

const Signin = () => {
const{signInUser} = UserContext(AuthContext)
 const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const handleUserLogin =(data)=>{
 
 signInUser(data?.email,data?.password)
 .then(result=>{
  const user = result.user;
  console.log(user);
  toast.success('Successfully User Login here')
 })
 .then(err=>{
  console.log(err);
  
 }

 )
  }
   
    
 

    return (
        <div className=' mx-auto card shadow-2xl mt-10 w-96'>
        <div className='card-body '>
            <form onSubmit={handleSubmit(handleUserLogin)} className='fieldset'>
              
               <div className='mt-2'>
                 <label className='label'>Email</label>
                <input className='input w-full'{...register('email',{required:'Email Adress is required'})}placeholder='type your email ' type="text" />
                  {errors.email &&   <p className='text-red-500'>{errors.email.message}</p>}
               </div>
               <div className='mt-2'>
                 <label className='label'>Password</label>
                <input className='input w-full'{...register('password',{required:'password  is required',
              },
                    
                )}placeholder='type your password'
              
                type="password" />
                  {errors.password &&   <p className='text-red-500'>{errors.password.message}</p>}
                 <div className='mt-2'>
              <input type="Submit" className='input w-full bg-primary text-white cursor-pointer' />

               </div>
               <p className='text-primary label '>New to website? <Link className='underline' to='/signup'> Please Register</Link></p>
               
               </div>
              
            </form>
             <div className='grid grid-cols-2 gap-3'>
                    <button className='input w-full bg-primary text-white cursor-pointer'>
                    Continue With Google
                    </button>
                    <button className='input w-full bg-primary text-white cursor-pointer'>
                    Continue With Github
                    </button>
                </div>
        </div>
        </div>
    );
};

export default Signin;