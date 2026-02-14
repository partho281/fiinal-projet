import React from "react";

const InfoCard = ({info}) => {
    const {img,name,des,bg,circle}=info;
    return (
      <div className= {`${bg} cardInfo p-2 md:p-8 card bg bg-base-100 text-black shadow-sm card-xs`}>
  <figure className={`${circle} cardCircle w-17 h-17  rounded-full mx-auto`}>
    <img
      src={img}
      alt="best doctors" />
  </figure>
  <div className="card-body text-center mt-4">
    <h2 className="text-lg font-semibold text-center ">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    
  </div>
</div>
    );
};

export default InfoCard;