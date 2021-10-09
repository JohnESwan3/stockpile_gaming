import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <header className="bg-gray-800 flex ">
      <div className="container mx-auto flex justify-center">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            className="inline-flex items-center py-5 mr-2 text-green-400 text-2xl tracking-widest"
          >
            Stockpile
          </NavLink>
          <NavLink
            to="/reviews"
            className="inline-flex items-center py-5 mr-2 text-gray-100  tracking-wider"
          >
            Reviews
          </NavLink>
          <NavLink
            to="/articles"
            className="inline-flex items-center py-5 mr-2 text-gray-100  tracking-wider"
          >
            Articles
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-5 mr-2 text-gray-100  tracking-wider"
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
