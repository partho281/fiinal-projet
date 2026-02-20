import React from 'react';
import facebook from '../../../../../../../assets/icon/blackFacebook.png';
import twitter from '../../../../../../../assets/icon/blackTwitter.png';
import google from '../../../../../../../assets/icon/blackGoogle.png';



const Expart = ({member}) => {
    const{name,img,designation}=member;
    return (
         <div className= { ' bg-base-100  '}>
  <figure className='bg-secondary flex justify-center pt-15'>
    <img
      src={img}
      alt="best doctors" />
  </figure>
  <div className="card-body text-center mt-4">
    <h2 className="text-xl font-semibold text-center ">{name}</h2>
    <p className='text-primary text-lg'>{designation}</p>
    
  </div>
<div><figure><img src="facebook" alt="" /></figure></div>
</div>
    );
};

export default Expart;