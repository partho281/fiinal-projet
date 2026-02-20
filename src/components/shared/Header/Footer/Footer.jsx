import React from 'react';
import { Link, Links } from 'react-router-dom';
import Facebook from '../../../../assets/icon/facebook.png';
import google from '../../../../assets/icon/google.png';
import call from '../../../../assets/icon/Group (1).png';
import location from '../../../../assets/icon/location.png';
import fax from '../../../../assets/icon/fax.png';
import email from '../../../../assets/icon/email.png'



const Footer = () => {
    return (
        <div className='bg-primary footer-shape pt-30 '>
         <footer className="footer  md:grid-cols-2 lg:grid-cols-4 sm:footer-horizontal  p-10">
  <aside>
     <Link to={"/"} className="text-2xl font-bold">
            <span className="text-[#C7F2FF]">Medi</span>site
          </Link>
    <p>
    Medical doctors (MDs) and Doctors of Osteopathic Medicine (DOs) specialize in various fields, ranging from primary care to surgical specialties, to diagnose and treat 
      <br />
      Providing reliable tech since 1992
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <Link className=" ms-2 link link-hover"><span>{'>'}</span>Service Area</Link>
    <Link className=" ms-2 link link-hover"><span>{'>'}</span>Blogs</Link>
    <Link className=" ms-2 link link-hover"><span>{'>'}</span>About</Link>
    <Link className=" ms-2 link link-hover"><span>{'>'}</span>Solution</Link>
   
    
  </nav>
  <nav>
    <h6 className="footer-title">Contact</h6>
     <div className='flex items-center'>
                <img src={location} alt="location" />
                <p className='ms-1'>33 street saadi Town near Malir Cantt</p>
            </div>
   
    <a className="link link-hover">
         <div className='flex items-center'>
            <img src={call} alt="" />
            <p className='ms-1'>+9905 5865 544</p>
        </div></a>
    <a className="link link-hover">
         <div className='flex items-center'>
            <img src={email} alt="clock" />
            <p className='ms-1'>partho3969@gmail.com</p>
        </div></a>
   
  </nav>
  <nav>
    <h6 className="footer-title">Follow Us On</h6>
  <div className='flex'>
    <Link className='bg-white rounded-full flex items-center justify-center w-12 h-12' to='/'>
  <img src={Facebook} alt="" />
  </Link>
    <Link className=' ms-2 bg-white rounded-full flex items-center justify-center w-12 h-12' to='/'>
  <img src={google} alt="" />
  </Link>
  </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;