import React from 'react';
import advocate from'../../../../assets/image/avvocate.png'
import advocate2 from'../../../../assets/image/avvocate2.png'
import PrimaryButton from '../../../../components/shared/Header/PrimaryButton/PrimaryButton';

const Advocate = () => {
    return (
              <div className=" pd-50 md:ps-29 py-0 md:py-0 ">
        <div className="flex row-reverse justify-between items-center">
          
          <div className='w-1/1 md:1/3 md:space-y-2 lg:space-y-5'>
            <h1 className="text-4xl font-bold ">A Wealth of Experience To Heal And Help You.</h1>
            <p className="py-6 text-neutral">
             Country popular belief, providing trusted medical information, easy appointment booking, professional care services, and patient-focused healthcare solutions for a healthier, happier life.
      
            </p>
        
             <button className='w-40'><PrimaryButton className='bg-white px-5 py-2 md:px-7 md:py-4 text-black'>See More</PrimaryButton></button>
          </div>
          {/*====== Mobile shape===== */}
      <div className=' w-1/1  md:pt-0  md:2/3 flex justify-center md:justify-end items-center ' >
        <div className='relative'>
            <img className='md:w-100%'
            src={advocate}
          />
        </div>
           <img  className='w-[50%]  md:w-auto absolute left-[4%] md:left-[60%]'src={advocate2} alt="best medical,best doctor" />
      </div>
        </div>
      </div>
    );
};

export default Advocate;