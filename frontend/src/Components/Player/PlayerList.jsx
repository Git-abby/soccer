import React from "react";

const PlayerList = (props) => {
  return (
<div className="px-10">
  <ul className="border rounded-lg shadow-neomorphism bg-gray-200">
    <li className="bg-[#0c2b5d85] p-4 rounded-t-lg shadow-inner-neomorphism">
      <h4 className="text-xl font-semibold text-gray-900">Players</h4>
    </li>
    {props.players.map((item) => (
      <div className="flex items-center" key={item._id}>
        <a
          href="#!"
          className="flex-grow p-4 hover:bg-gray-300 border-b border-gray-300"
          onClick={() => props.updateCurrentPlayer(item)}
        >
          {item.firstName} {item.lastName}
        </a>
      </div>
    ))}
  </ul>
</div>


  );
};

export default PlayerList;
