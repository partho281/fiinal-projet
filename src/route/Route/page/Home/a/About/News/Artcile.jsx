import React from 'react';
import clockIcon from '../../../../../../../assets/icon/clock1.png';
import messagebox from '../../../../../../../assets/icon/message.png';

const Artcile = ({news}) => {
    const {img,name,des}=news;
    return (
        <article>
             <div className= 'cardInfo rounded-none card bg bg-base-100 text-black shadow-sm card-xs'>
  <figure className='me-2'>
    <img
      src={img}
      alt="best doctors" />
  </figure>
  <div className="card-body  mt-4">
    <div className='flex justify-between'>
        <div className='flex items-center'>
            <img src={clockIcon} alt="clock" />
            <p className='ms-1'>14 feb,2026</p>
        </div>
          <div className='flex justify-between'>
            <img src={messagebox} alt="clock" />
            <p className='ms-1'>3 comments</p>
        </div>
    </div>
    <h2 className="text-lg font-semibold  ">{name.slice(0,60)}</h2>
    <p className='text-neutral'>{des}</p>
    
  </div>
</div>
        </article>
    );
};

export default Artcile;