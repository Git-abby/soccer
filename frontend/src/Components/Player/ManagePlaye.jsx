import React from "react";

function ManagePlaye(props) {
  return (
<div className="px-10">
  <ul className="border border-gray-300 rounded-lg bg-gray-100 shadow-neomorphism">
    <li className="bg-gray-100 p-4 rounded-t-lg shadow-inner-neomorphism">
      <h4 className="text-xl font-semibold text-gray-700">Players</h4>
    </li>
    {props.players.map((item) => (
      <div className="flex items-center" key={item._id}>
        <a
          href="#!"
          className="flex-grow p-4 hover:bg-gray-200 border-b border-gray-300 transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-neomorphism-hover"
          onClick={() => props.updateCurrentPlayer(item)}
        >
          {item.firstName} {item.lastName}
        </a>
        <a
          href="#!"
          className="p-4 bg-red-500 text-white rounded-full shadow-md transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:bg-red-600 ml-2"
          onClick={() => props.deletePlayer(item)}
        >
          <i className="material-icons">close</i>
        </a>
      </div>
    ))}
  </ul>
</div>


  );
}

export default ManagePlaye;
