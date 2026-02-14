import React from 'react';
import Service from '../../../../../../../assets/icon/24HourSservice.png';
import doctor from'../../../../../../../assets/icon/doctor.png';
import car from '../../../../../../../assets/icon/EmergencyCarr.png';
import room from '../../../../../../../assets/icon/OperatingRoom.png';
import InfoCard from './InfoCard';

const InfoCards = () => {
    const infoCardsData=[
        {
           img:Service,
           name:'24 hour service',
           des:'lorem is the service heart on the go to the product fore the back',
           bg:"bg-white",
           circle:'bg-secondary'
        
        },
        {
            img: doctor,
            name:'Qualified Doctor',
            des:'lorem is the service heart on the go to the product fore the back',
            bg:'bg-secondary',
            circle:'bg-white'
        },
        {
            img:car,
            name:"Emergency Care",
            des:"lorem is the service heart on the go to the product fore the back",
             bg:"bg-white",
              circle:'bg-secondary'
        },
        {
            img:room,
            name:"Operation  Theater ",
            des:"lorem is the service heart on the go to the product fore the back",
             bg:"bg-white",
              circle:'bg-secondary'
        }
    ]


    return (
        <div className='px-4 md:px-29 py-0 md:py-20 min-h-screen-20'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                {
                    infoCardsData?.map((info,i)=><InfoCard
                    info={info}></InfoCard>)
                }
            </div>
        </div>
    );
};

export default InfoCards;