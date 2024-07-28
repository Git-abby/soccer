import React, { useState } from "react";
import { Spiral as Hamburger } from "hamburger-react";
import "./navBar.css";
import Lottie from "lottie-react";
import aniamationData from "../../assets/logo white.json";
import { Link } from "react-router-dom";
// import useCoockies from 'react-cookie';
import { useCookies } from "react-cookie";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbars = () => {
  const [cookies, removeCookie] = useCookies(["user"]);
  const [isOpen, setOpen] = useState(false);
  console.log("Cookies", cookies);

  const navigate = useNavigate();

  const style = {
    height: 60,
    margin: 5,
    cursor: "pointer",
    // background: "white",
  };
  const handleLogout = () => {
    removeCookie("user", { path: "/" });
    navigate("/");
  };
  return (
    <header className="bg-gray-900 p-2">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div className="relative">
          <Link to="/">
            <Lottie
              animationData={aniamationData}
              style={style}
              loop={true}
              autoPlay={true}
            />
          </Link>
        </div>
        <div
          className={`nav-links duration-500 md:static absolute bg-gray-900 text-white md:min-h-fit min-h-[60vh] left-0 md:w-auto w-full flex items-center px-5 ${
            isOpen ? "top-0" : "top-[-100%]"
          }`}>
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <Link to="/view" className="hover:text-gray-300">
                View
              </Link>
            </li>
            <li>
              <Link to="/add" className="hover:text-gray-300">
                Add
              </Link>
            </li>
            <li>
              <Link to="/manage" className="hover:text-gray-300">
                Manage
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          {/* <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-500">
        Sign in
      </button> */}
          {/* {cookies ? <li>
            <Link onClick={handleLogout} className="bn3637 bn38">
              Logout
            </Link>

            <a className="text-white">{cookies.user.user.email}</a>
          </li> : <Link to="/login" className="bn3637 bn38">
              Sign In
            </Link>} */}
          {cookies.user.user ? (
            <li className="flex justify-between  items-center px-3">
              <span className="text-white font-bold pr-3">~{cookies.user.user.name}</span>
              <Link
                onClick={handleLogout}
                to="/"
                className="bn3637 bn38">
                Logout
              </Link>
            </li>
          ) : (
            <li>
              <Link
                to="/login"
                className="bn3637 bn38">
                Sign In
              </Link>
            </li>
          )}

          <div className="hamburger-menu md:hidden text-white">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbars;

// export default function NavBars() {
//   const [isOpen, setOpen] = useState(false);
//   //   console.log(isOpen);

//   const style = {
//     height: 60,
//     margin: 5,
//     cursor: "pointer",
//     // background: "white",
//   };
//   return (
//     <header className="bg-gray-900 p-2">
//       <nav className="flex justify-between items-center w-[92%] mx-auto">
//         <div className="relative">
//           <Lottie
//             animationData={aniamationData}
//             style={style}
//             loop={true}
//             autoPlay={true}
//           />
//         </div>
//         <div
//           className={`nav-links duration-500 md:static absolute bg-gray-900 text-white md:min-h-fit min-h-[60vh] left-0 md:w-auto w-full flex items-center px-5 ${
//             isOpen ? "top-0" : "top-[-100%]"
//           }`}>
//           <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
//             <li>
//               <Link to="/view" className="hover:text-gray-300">
//                 View
//               </Link>
//             </li>
//             <li>

//               <a className="hover:text-gray-300" href="#">
//                 Add Player
//               </a>
//             </li>
//             <li>
//               <a className="hover:text-gray-300" href="#">
//                 Manage Players
//               </a>
//             </li>
//             <li>
//               <a className="hover:text-gray-300" href="#">
//                 About
//               </a>
//             </li>
//             <li>
//               <a className="hover:text-gray-300" href="#">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div className="flex items-center gap-6">
//           {/* <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-500">
//           Sign in
//         </button> */}
//           <a href="/" className="bn3637 bn38">
//             Sign In
//           </a>
//           <div className="hamburger-menu md:hidden text-white">
//             <Hamburger toggled={isOpen} toggle={setOpen} />
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }
