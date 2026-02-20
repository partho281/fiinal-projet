import React from 'react';
import news1 from '../../../../../../../assets/image/news1.png';
import news2 from '../../../../../../../assets/image/news2.png';
import news3 from '../../../../../../../assets/image/news3.png';
import Artcile from './Artcile';


const News = () => {
    const newsData=[
     {
               img:news1,
               name:'Breaking stereotype:Female basketball',
               des:'Medical doctors (MDs) and Doctors of Osteopathic Medicine (DOs) specialize in various fields, ranging from primary care to surgical specialties, to diagnose and treat diseases. Key roles include Family Physicians, Pediatricians, Internists, Cardiologists, Dermatologists, and Surgeons.',
               bg:"bg-white",
               circle:'bg-secondary'
            
            },
             {
                img:news2,
                name:'Ratargul and rain:A monsoon tale in mot',
                des:'Medical doctors (MDs) and Doctors of Osteopathic Medicine (DOs) specialize in various fields, ranging from primary care to surgical specialties, to diagnose and treat diseases. Key roles include Family Physicians, Pediatricians, Internists, Cardiologists, Dermatologists, and Surgeons.',
                bg:'bg-secondary',
                circle:'bg-white'
            },
            {
                img:news3,
                name:"The agencies had information,but not ad",
                des:"Medical doctors (MDs) and Doctors of Osteopathic Medicine (DOs) specialize in various fields, ranging from primary care to surgical specialties, to diagnose and treat diseases. Key roles include Family Physicians, Pediatricians, Internists, Cardiologists, Dermatologists, and Surgeons.",
                 bg:"bg-white",
                  circle:'bg-secondary'
            }
        ]
    return (
        <div className='w-90 md:w-[70%] mx-auto '>
            <div className='text-center space-y-4 md:space-y-8 '>
                <h1 className='text-5xl font-semibold '>News & Events </h1>
                <p className='text-neutral'>A news of professional doctor, Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam exercitationem sint totam repudiandae quos accusamus odio sed, quam officia eaque explicabo ipsum inventore quibusdam praesentium possimus earum sequi doloremque ipsam!</p>
            </div>
             <div className='grid grid-cols-2 md:grid-cols-3 gap-6 mt-10'>
                {
                   newsData?.map((news,i)=>(<Artcile key={i}
                    news={news}></Artcile>))
                }
            </div>
        </div>
    );
};

export default News;