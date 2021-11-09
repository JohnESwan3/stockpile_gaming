import SPLogo from '../img/SPLogo.svg';
import { NavLink } from 'react-router-dom';
// import {
//   FaFacebookF,
//   FaTelegramPlane,
//   FaTwitter,
//   FaInstagram,
//   FaYoutube,
// } from 'react-icons/fa';
import { GiConsoleController, GiCowled } from 'react-icons/gi';
// import { SiOdysee } from 'react-icons/si';
import { MdArticle } from 'react-icons/md';

export default function NavBar() {
  return (
    <nav>
      <div className="menu-bar flex flex-col top-0 right-0 fixed z-50  w-16 m-0 bg-gray-800 border-l-2 border-b-2 border-gray-700 shadow text-gray-100">
        <div className="flex flex-col top-0 right-0 z-50">
          <button className="outline-none mobile-menu-button">
            <svg
              className="w-16 h-16 text-gray-200 "
              x-show="!showMenu"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <div className="hidden mobile-menu text-center">
            <ul>
              <li>
                <NavLink to="/" exact className="">
                  <img
                    src={SPLogo}
                    alt="Home"
                    className="p-1 sidebar-icon-logo"
                  />
                  <p className="text-xs">Home</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/review">
                  <SideBarIcon icon={<GiConsoleController size="32" />} />
                </NavLink>
                <p className="text-xs">Reviews</p>
              </li>
              <li>
                <NavLink to="/article">
                  <SideBarIcon icon={<MdArticle size="32" />} />
                  <p className="text-xs">Articles</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
                  <SideBarIcon icon={<GiCowled size="32" />} />
                  <p className="text-xs">About</p>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

const SideBarIcon = ({ icon, text = 'tooltip' }) => (
  <div className="sidebar-icon group">{icon}</div>
);
