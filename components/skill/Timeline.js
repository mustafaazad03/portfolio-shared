import React from 'react'
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
const Timeline = ({timeline}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <div className="max-w-2xl mx-auto h-[55vh] mt-8 md:mt-0 lg:-ml-2 overflow-y-scroll overflow-x-hidden main">
          <motion.ol ref={ref} animate={{ opacity :isInView ? [0,1]: [0,0], y: isInView ? [50,0]: [50,50]}} transition={{duration : 1.3, delay : 0.2}} className="relative border-l ml-3 border-gray-200 dark:border-gray-700">
            {timeline.map((value,idx) => {
              return (
                <li className="mb-10 ml-4" key={idx}>
                <div
                className="absolute w-3 h-3 bg-gray-300 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
              </div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{value.date}</time>
              <h3 className="text-lg font-semibold text-lightb text-gray-900 dark:text-darko">{value.experience}</h3>
              <p className="mb-4 text-base w-3/4 font-normal text-gray-500 dark:text-gray-400">{value.desc}</p>
            </li>
              )
            })}
          </motion.ol>
      </div>
    </>
  )
}

export default Timeline
