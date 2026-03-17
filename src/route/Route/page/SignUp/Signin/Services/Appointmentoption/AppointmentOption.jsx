import React from 'react';
import News from '../../../../Home/a/About/News/News';
import Service from '../../../../../../../components/service/Service';

const AppointmentOption = ({service}) => {
    const { name,slots } = service
    return (
        <div>
             <div className= 'cardInfo rounded-none card bg bg-base-100 text-black shadow-sm card-xs'>
              
              <div className="card-body  mt-4">
                <div className=''>
                    <div className=''>
                        
                        <p className='text-center text-2xl text-primary my-3 font-semibold'>{name}</p>
                    </div>
                      <div className=''>
                       
                        <p className='text-center text-xl'>{slots[0]}</p>
                    </div>
                </div>
               
                
              </div>
            </div>
        </div>
    );
};

export default AppointmentOption;