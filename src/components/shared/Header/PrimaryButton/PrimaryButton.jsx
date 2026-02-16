import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div className='bg-primary  p-5 w-auto text-center text-white font-semibold'>
            {children}
        </div>
    );
};

export default PrimaryButton;