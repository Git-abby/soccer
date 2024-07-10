import React from 'react'
import './hero.css'
import Lottie from 'lottie-react'

import animationData from '../../assets/Soccer 4.json';
import animationDataMobile from '../../assets/Soccer 2.json'
function Hero() {

    const style = {
        height: 500,
    }
  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col lg:flex-row items-center lg:justify-between px-4 lg:px-16 pt-3">
    <div className="text-center lg:text-left lg:w-1/2 flex flex-col justify-center items-center lg:items-start">
      <h1 className="text-5xl font-bold mb-4">
        Manage Your Soccer Team Efficiently
      </h1>
      <p className="text-xl mb-6">
        The ultimate tool for managing players, tracking stats, and leading your team to victory.
      </p>
        <a className="bn3637 bn38 cursor-pointer">
          Get Started
        </a>
        </div>
      <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
        <Lottie animationData={animationData} style={style} />
      </div>
    </div>
  )
}

export default Hero