import React from "react";
import animationData from '../../assets/Animation - 1716497272123.json'
import Lottie from "lottie-react";
// C:\Users\malek\Desktop\ReactJS\soccer\frontend\src\assets\images\soccer-ball-goal.webp
function PlayerSingle(props) {
  return (
    <div className="flex justify-center my-4">
    <div className="w-full max-w-md">
      <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <Lottie animationData={animationData} width={100} />
          {/* <img src="../../src/assets/images/soccer-ball-goal.webp" alt="soccer image" className="w-full" /> */}
          <span className="absolute bottom-4 left-4 text-xl font-bold bg-black bg-opacity-50 px-2 py-1 rounded">
            {props.player.firstName} {props.player.lastName}
          </span>
        </div>
        <div className="p-4">
          <p className="mb-2">Phone: {props.player.phone} - Email: {props.player.email}</p>
          <p className="mb-2">Strength: {props.player.strength} - Endurance: {props.player.endurance}</p>
        </div>
        <div className="bg-gray-700 p-4">
          Team: {props.player.team}
        </div>
      </div>
    </div>
  </div>
  );
}

export default PlayerSingle;
