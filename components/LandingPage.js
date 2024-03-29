// import Document from 'next/document'
import Link from 'next/link'
import React from 'react'
import { urlFor } from '../sanity';
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const LandingPage = ({contenthome}) => {  
    const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
    const {name, desc, img} = contenthome;

  return (
    <div className='dark:bg-black w-full overflow-hidden'>

        {/* ui text placing */}

        <motion.h3 ref={ref} animate={{opacity :isInView? [0,1] : [0,0], y :isInView ?[-50,0]:[-50,-50]}} transition={{duration : 1, bounce : 1.5, delay : 0.4}} className='absolute w-24 h-32 xl:left-[11rem] lg:top-36 sm:left-[7rem] top-28 left-[3rem] sm:top-32  dark:text-light font-sans font-bold md:text-[3.5rem] sm:text-5xl text-5xl'>UI<span className='dark:text-darko text-lightb'>.</span></motion.h3>
        

        {/* react js text component */}

        <motion.div animate={{opacity :isInView? [0,1]:[0,0], y :isInView? [50,0]:[50,50]}} transition={{duration : 1, bounce : 1.5, delay : 0.45}} className="absolute w-28 xl:left-[12.5rem] lg:top-[28rem] sm:left-[7.4rem] sm:top-96 left-[60%] top-[10rem]">
        <div className="absolute bg-black dark:bg-light w-3 h-3 "></div>
        <h4 className='absolute text-lightb dark:text-darko ml-5 top-[-1rem] leading-5'>React & Next Js</h4>
        </motion.div>
        <motion.div animate={{opacity :isInView? [0,1]:[0,0], x :isInView? [-50,0]:[50,50]}} transition={{duration : 1, bounce : 1.5, delay : 0.5}} className="sm:absolute md:top-[20rem] sm:top-[15rem] sm:left-3 h-32 flex space-x-2 mt-[22rem] mb-[-29rem] sm:mb-0 sm:mt-0 ml-[2rem] sm:ml-0 sm:block sm:space-y-3">
        <Link href="https://github.com/Mustafa-Azad025"><svg viewBox="0 0 496 512" className='dark:fill-light hover:-translate-y-2 hover:ease-in-out hover:duration-200 hover:text-black/75 w-6 h-6 cursor-pointer sm:ml-2'>
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
        </svg>
        </Link>
        <Link href="https://www.linkedin.com/in/mustafa-azad-4128ba225"><svg viewBox="0 0 448 512" className='dark:fill-light w-6 h-6 sm:hover:translate-x-2 sm:hover:-translate-y-0 hover:-translate-y-2 hover:ease-in-out hover:duration-200 hover:text-black/75 cursor-pointer'>
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
        </svg>
        </Link>
        <Link href="https://instagram.com/webdesigne_ui_ux?igshid=YmMyMTA2M2Y="><svg viewBox="0 0 448 512" className='dark:fill-light sm:hover:translate-y-2 hover:-translate-y-2 hover:ease-in-out hover:duration-200 hover:text-black/75 w-6 h-6 cursor-pointer'>
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
        </svg>
        </Link>
        </motion.div>
        <motion.div animate={{opacity :isInView? [0,1]:[0,0], scale :isInView? [0,1.05]:[0,0]}} transition={{duration : 1.2, bounce : 1.3, delay : 0.7}} className="sm:absolute lg:top-[14rem] xl:left-[28rem] sm:left-[12.5rem] lg:left-[16rem] sm:top-[10rem] lg:hidden md:w-52 md:h-52 sm:w-44 sm:h-44 w-[15rem] h-[15rem] top-[10rem] mt-[30rem] sm:mt-0 mb-[-34rem] sm:mb-0 mx-auto dark:bg-darko bg-lightb rounded-full">
        </motion.div>
        <motion.div animate={{opacity :isInView? [0,1]:[0,0], scale :isInView? [0,1.2]:[0,0]}} transition={{duration : 1.2, bounce : 1.3, delay : 0.7}} className="sm:absolute lg:top-[14rem] xl:left-[28rem] sm:left-[12.5rem] md:left-[13rem] lg:left-[16rem] sm:top-[10rem] hidden lg:w-60 lg:h-60 lg:block top-[10rem] mt-[30rem] sm:mt-0 mb-[-34rem] sm:mb-0 mx-auto dark:bg-darko bg-lightb rounded-full">
        </motion.div>
        <motion.div animate={{opacity :isInView? [0,1]:[0,0], y :isInView? [70,0]:[70,70]}} transition={{duration : 1.2, bounce : 1.3, delay : 0.55}} className="bg-opacity-0 relative hover:grayscale-0 grayscale mb-[-47rem] mt-[15rem] sm:w-[20rem] sm:mt-8 sm:ml-36 sm:mb-[-32rem] lg:mb-[-42rem] lg:ml-[9.5rem] lg:w-[30rem] xl:w-[27rem] xl:ml-[23rem] xl:mb-[-38rem]">
            <img objectfit='contain' layout='fill' src={urlFor(img).url()} alt="Mustafa Azad"/>
        </motion.div>
        <motion.div animate={{opacity :isInView? [0,1]:[0,0], y :isInView? [40,0]:[40,40]}} transition={{duration : 1, bounce : 1.4, delay : 0.5}} className="grid grid-cols-3 sm:justify-around justify-between mt-52 sm:mt-0 mx-[24vw] sm:mx-12 md:mx-20">
        
        {/* first section */}

        <div className=" lg:mt-[80vh] ml-[-19.5vw] sm:ml-[0] sm:mt-[33rem] mt-[35rem] z-50 flex flex-col sm:flex-row">
        <svg className ="w-[0.7rem] h-[0.7rem] sm:w-[0.9rem] sm:h-[0.85rem]" viewBox="0 0 20 20" fill="none">
        <path d="M7.5 0V7.5H0V12.5H7.5V20H12.5V12.5H20V7.5H12.5V0H7.5Z" className='dark:fill-darko fill-lightb'/>
        </svg>
        <h3 className='font-bold sm:text-2xl text-lg sm:mt-[-0.7rem] mt-[-1.4rem] dark:text-light sm:mx-2 my-3 sm:my-0 mx-4 counter' data-target="20">10</h3>
        <h4 className=' dark:text-light font-medium mt-[-0.7rem] text-xs'>Working</h4>
        <h4 className='font-bold sm:my-[3.2vh] sm:ml-[-3rem] sm:mt-[0.45rem] dark:text-light text-xs'>Websites</h4>
        </div>

        {/* second section */}

        <div className=" lg:mt-[80vh] mb-4 sm:ml-[0] sm:mt-[33rem] mt-[35rem] z-50 flex flex-col justify-center sm:flex-row">
        <svg className ="w-[0.7rem] h-[0.7rem] sm:w-[0.9rem] sm:h-[0.85rem]" viewBox="0 0 20 20" fill="none">
        <path d="M7.5 0V7.5H0V12.5H7.5V20H12.5V12.5H20V7.5H12.5V0H7.5Z" className='dark:fill-darko fill-lightb'/>
        </svg>
        <h3 className='font-bold sm:text-2xl text-lg sm:mt-[-0.7rem] mt-[-1.4rem] dark:text-light sm:mx-2 my-3 sm:my-0 mx-4'>10</h3>
        <h4 className=' dark:text-light font-medium mt-[-0.7rem] text-xs'>Technology</h4>
        <h4 className='font-bold sm:my-[3.2vh] sm:ml-[-3.8rem] sm:mt-[0.45rem] dark:text-light text-xs'>Learned</h4>
        </div>

        {/* third Section */}

        <div className=" lg:mt-[80vh] ml-[20vw] mb-4 sm:ml-[0] sm:mt-[33rem] z-50 mt-[35rem] flex flex-col justify-end sm:flex-row">
        <svg className ="w-[0.7rem] h-[0.7rem] sm:w-[0.9rem] sm:h-[0.85rem]" viewBox="0 0 20 20" fill="none">
        <path d="M7.5 0V7.5H0V12.5H7.5V20H12.5V12.5H20V7.5H12.5V0H7.5Z" className='dark:fill-darko fill-lightb'/>
        </svg>
        <h3 className='font-bold sm:text-2xl text-lg sm:mt-[-0.7rem] mt-[-1.4rem] dark:text-light sm:mx-2 my-3 sm:my-0 mx-4'>1</h3>
        <h4 className=' dark:text-light font-medium mt-[-0.7rem] text-xs'>Years</h4>
        <h4 className='font-bold sm:my-[3.2vh] sm:ml-[-1.8rem] sm:mt-[0.45rem] dark:text-light text-xs'>Experience</h4>
        </div>

        </motion.div>
        <motion.h3 animate={{opacity :isInView? [0,1]:[0,0], y :isInView? [50,0]:[50,50]}} transition={{duration : 1, bounce : 1.5, delay : 0.45}} className='sm:w-[20vw] w-[50vw] h-[2rem] sm:top-[10rem] sm:left-[65vw] top-[15rem] ml-[2rem] absolute font-semibold text-[1.2rem] sm:text-[1rem] md:text-[1.2rem] dark:text-light'>Hi! I Am</motion.h3>
        <motion.h3 animate={{opacity :isInView? [0,1]:[0,0], y :isInView? [50,0]:[50,50]}} transition={{duration : 1, bounce : 1.5, delay : 0.6}} className='sm:w-[31vw] w-[80vw] h-[2vw] sm:top-[11rem] sm:left-[65vw] top-[16.4rem] ml-[2rem] absolute font-bold text-[2rem] sm:text-[1.5rem] md:text-[2rem] dark:text-light hover:scale-110 ease-in-out delay-100'>{name}</motion.h3>
        <motion.h3 animate={{opacity :isInView? [0,1]:[0,0], y :isInView? [50,0]:[50,50]}} transition={{duration : 1, bounce : 1.5, delay : 0.8}} className='absolute md:w-[31vw] sm:w-[32vw] w-[80vw] h-[2vw] sm:top-[13.5rem] lg:top-[13.6rem] top-[19rem] ml-[2rem] font-semibold text-xl sm:text-lg md:text-xl sm:left-[65vw] dark:text-light'>A <span className="this mx-[0.3rem] font-bold text-2xl dark:text-darko text-lightb"></span> Developer</motion.h3>
        <motion.p animate={{opacity :isInView? [0,1]:[0,0], y :isInView? [50,0]:[50,50]}} transition={{duration : 1, bounce : 1.5, delay : 1}} className='text-sm xl:w-[18.2vw] sm:w-[12rem] w-[15rem] absolute sm:top-[16rem] sm:left-[65vw] top-[21.5rem] ml-[2rem] dark:text-light'>{desc}
        </motion.p>
        <Link href="/Resume.pdf">
            <motion.div animate={{opacity :isInView? [0,1]:[0,0], y :isInView? [50,0]:[50,50]}} transition={{duration : 1, bounce : 1.5, delay : 1.1}} className="lg:w-[8rem] lg:h-[2.2rem] sm:w-[10rem] h-[2.3rem] w-[8rem] absolute lg:top-[24rem] xl:top-[22rem] sm:top-[23rem] sm:left-[65vw] top-[30rem] ml-[1.9rem] cursor-pointer bg-lightb hover:bg-lightb/70 dark:bg-darko dark:hover:bg-darko/70 rounded-3xl "><h3 className='text-center dark:text-black text-light text-lg my-1 font-semibold'>Resume</h3></motion.div>
        </Link>
        <motion.h3 animate={{opacity :isInView? [0,1]:[0,0], y :isInView? [100,-150]:[100,100], rotate :isInView?[0,-90]:[0,0]}} transition={{duration : 1.2, bounce : 1, delay : 0.45}} className='absolute sm:bottom-32 mt-[-20rem] md:bottom-[4rem] lg:bottom-32  right-0 mr-[-1.5rem] -rotate-90 dark:text-light'>Developer <span className='font-bold'>'s</span></motion.h3>
        
    </div>
  )
}

export default LandingPage