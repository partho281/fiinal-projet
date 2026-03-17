import React, { useState } from "react";
import bg from '../../../../../../../assets/image/chair1.png';
import mobileShape from "../../../../../../../assets/image/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
 

const ServiceBanner = () => {
     const [selected, setSelected] = useState(new Date());
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className=""
    >
      <div className="text-white gap-10 px-4 md:px-29 py-0 md:py:20">
        <div className="md:flex gap-10 justify-between items-center">
          <div className="w:3/5 flex justify-center md:justify-end items-center">
            <img className="w-full my-5 md:my-0" src={mobileShape} />
           
           
            
          </div>
          {/*====== Mobile shape===== */}
          <div className="w-1/1 justify-center m-30 bg-white shadow-lg rounded-lg text-black p-4">
          

           <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={
        selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
      }
    />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
