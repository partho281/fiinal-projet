import React from 'react';
import SectionHead from '../../../../../../../components/SectionHead/SectionHead';
import doctor1 from'../../../../../../../assets/image/pic1.png';
import doctor2 from '../../../../../../../assets/image/pic2.png';
import doctor3 from '../../../../../../../assets/image/pic3.png';
import doctor4 from '../../../../../../../assets/icon/pic4.png'; 
import InfoCards from '../Info Cards/InfoCards';
import InfoCard from '../Info Cards/InfoCard';


const ExpartTeams = () => {
    const expertTeam =[
      
          {
            img:doctor1,
            name:'Partik Cortez',
            designation:'Doctor',
        },
          {
            img:doctor2,
            name:'Belly Staion',
            designation:'Doctor',
        },
          {
            img:doctor3,
            name:' Corteza Main',
            designation:'Doctor',
        },
          {
            img:doctor4,
            name:'Harry Potraz',
            designation:'Doctor',
        },
    ]

    return (
       <div className='w-90 md:w-[70%] mx-auto '>
            <div className='text-center space-y-4 md:space-y-8 '>
                <h1 className='text-5xl font-semibold '>Our Expert Team</h1>
                <p className='text-neutral'>Country to popular belief, Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam exercitationem sint totam repudiandae quos accusamus odio sed, quam officia eaque explicabo ipsum inventore quibusdam praesentium possimus earum sequi doloremque ipsam!</p>
            </div>
            
        </div>
    );
};

export default ExpartTeams;