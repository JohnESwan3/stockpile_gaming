import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <div className="flex items-center py-4 px-2">
                <NavLink
                  to="/"
                  exact
                  className="font-semibold text-green-400 text-lg tracking-widest hover:text-green-200"
                >
                  Stockpile
                </NavLink>
              </div>
            </div>
            {/* Primary Nav Links */}
            <div className="hidden md:flex items-center space-x-1">
              <NavLink
                to="/"
                exact
                className="my-4 px-1 text-gray-100 font-semibold text-lg hover:text-green-200 transition duration-300"
                activeClassName="text-green-200 border-b-2 border-green-200"
              >
                Home
              </NavLink>
              <NavLink
                to="/review"
                className="my-4 px-1  text-gray-100 font-semibold text-lg hover:text-green-200 transition duration-300"
                activeClassName="text-green-200 border-b-2 border-green-200"
              >
                Reviews
              </NavLink>
              <NavLink
                to="/article"
                className="my-4 px-1  text-gray-100 font-semibold text-lg hover:text-green-200 transition duration-300"
                activeClassName="text-green-200 border-b-2 border-green-200"
              >
                Articles
              </NavLink>

              <NavLink
                to="/about"
                className="my-4 px-1  text-gray-100 font-semibold text-lg hover:text-green-200 transition duration-300"
                activeClassName="text-green-200 border-b-2 border-green-200"
              >
                About
              </NavLink>
            </div>
          </div>
          {/* Login */}
          <div className="hidden md:flex items-center space-x-3">
            <NavLink
              to="/login"
              className="py-2 px-2 font-medium text-gray-300 rounded hover:bg-green-600 hover:text-white transition duration-300"
              activeClassName="bg-green-600"
            >
              Log In
            </NavLink>
            <NavLink
              to="/signup"
              className="py-2 px-2 font-medium text-white rounded hover:bg-green-600 transition duration-300"
              activeClassName="bg-green-600"
            >
              Sign Up
            </NavLink>
          </div>
          {/* Mobile Menue Button */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg
                className="w-6 h-6 text-gray-200 hover:text-green-500"
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
          </div>
          {/* Mobile Menu */}
          <div className="hidden mobile-menu">
            <ul className="">
              <li>
                <NavLink
                  to="/"
                  exact
                  className="block text-sm px-2 py-4 text-gray-200 bg-gray-700 font-semibold hover:bg-green-600 transition duration:300"
                  activeClassName="bg-green-600 text-white"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/article"
                  className="block text-sm px-2 py-4 text-gray-200 bg-gray-700 font-semibold hover:bg-green-600 transition duration:300"
                  activeClassName="bg-green-600 text-white"
                >
                  Articles
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/review"
                  className="block text-sm px-2 py-4 text-gray-200 bg-gray-700 font-semibold hover:bg-green-600 transition duration:300"
                  activeClassName="bg-green-600 text-white"
                >
                  Review
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="block text-sm px-2 py-4 text-gray-200 bg-gray-700 font-semibold hover:bg-green-600 transition duration:300"
                  activeClassName="bg-green-600 text-white"
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
const btn = document.querySelector('button.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');

btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
