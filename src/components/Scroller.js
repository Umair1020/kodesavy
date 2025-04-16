import React, { useState, useEffect } from 'react';
import "./scroll.css"
const Scroller = () => {
    const [isVertical, setIsVertical] = useState(false);

    const toggleDirection = () => {
        setIsVertical(!isVertical);
    };

    useEffect(() => {
        // This is where you can add any setup logic if needed
        return () => {
            // This is where you can clean up if needed
        };
    }, []);
    return (
        <>
            <div className=""> 
            <h2 className='text-dark text-center fw-bold'>Our Latest <span className='project'>Projects</span> </h2>
            
            <ul className='ul1'>
                    <li className='li'><img src='/logo (1).png' className=' d-flex align-items-center '  /></li>
                    <li className='li'><img src='/logo (2).png' className=' d-flex align-items-center ' /></li>
                    <li className='li'><img src='/logo (3).png' className=' d-flex align-items-center ' /></li>
                    <li className='li'><img src='/logo (4).png' className=' d-flex align-items-center ' /></li>
                    <li className='li'><img src='/logo (5).png' className=' d-flex align-items-center ' /></li>
                    <li className='li'><img src='/logo (6).png' className=' d-flex align-items-center ' /></li>
                    <li className='li'><img src='/logo (7).png' className=' d-flex align-items-center ' /></li>
                    <li className='li'><img src='/logo (8).png' className=' d-flex align-items-center ' /></li>
                </ul>
                <ul className="uli">
                <li className='li'><img src='/logo (9).png' className=' d-flex align-items-center '  /></li>
                    <li className='li'><img src='/logo (10).png' className=' d-flex align-items-center ' /></li>
                    <li className='li'><img src='/logo (11).png' className=' d-flex align-items-center ' /></li>
                    <li className='li'><img src='/logo (12).png' className=' d-flex align-items-center ' /></li>
                    <li className='li'><img src='/logo (13).png' className=' d-flex align-items-center ' /></li>
                    <li className='li'><img src='/logo (14).png' className=' d-flex align-items-center ' /></li>
                    <li className='li'><img src='/logo (15).png' className=' d-flex align-items-center ' /></li>
                    <li className='li'><img src='/logo (16).png' className=' d-flex align-items-center ' /></li>
                </ul>
                <ul className="uls">
                <li className='li'><img src='/logo (17).png' className=' d-flex align-items-center '  /></li>
                    <li className='li'><img src='/logo (18).png' className=' d-flex align-items-center ' /></li>
                    <li className='li'><img src='/logo (19).png' className=' d-flex align-items-center ' /></li>
                    <li className='li'><img src='/logo (20).png' className=' d-flex align-items-center ' /></li>
                    <li className='li'><img src='/logo (21).png' className=' d-flex align-items-center ' /></li>
                    <li className='li'><img src='/logo (22).png' className=' d-flex align-items-center ' /></li>
                    <li className='li'><img src='/logo (23).png' className=' d-flex align-items-center ' /></li>
                    <li className='li'><img src='/logo (24).png' className=' d-flex align-items-center ' /></li>
                </ul>
            </div>
        </>

    )
}

export default Scroller