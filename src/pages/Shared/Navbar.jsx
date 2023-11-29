import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.jpg'
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import img from '../../assets/profile.jpg'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // const [isHovering, setIsHovering] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log('user login successfully');
      })
      .catch(error => console.log(error));
  }

  const navbar = <>
    <li ><NavLink className="btn btn-warning mr-4" to="/">Home</NavLink></li>
    <li><NavLink className="btn btn-warning mr-4" to="/meals">Meals</NavLink></li>
    <li><NavLink className="btn btn-warning mr-4" to="/up">Upcoming Meals</NavLink></li>
  </>;

  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-black max-w-screen-xl text-white">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {navbar}
        </ul>
      </div>
      <a className="btn btn-ghost normal-case text-xl font-bold">
        <img className="w-[4rem] h-[3rem]" src={logo} alt="" />
        <p>hostel.nl</p>
      </a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className=" menu-horizontal px-1">
        {navbar}
      </ul>
    </div>
    <div className="navbar-end ml-2 flex">
      {user ? (
        <div className="profile-section ">
          <div
            className="btn btn-ghost btn-circle avatar w-[8.5rem] h-[8.5rem]"
            onClick={toggleDropdown}
          >
            <img className="" src={user.photoURL || img} alt="Profile" />
            {isDropdownVisible && (
              <div className="hover-text flex flex-row items-center space-y-2">
                <p className="text-black">{user.displayName || user.email}</p>
                <Link to="/dashboard/cart" className="btn btn-warning ml-2">
                  <p>Dashboard</p>
                </Link>
                <a onClick={handleLogOut} className="btn btn-warning ml-2">Sign out</a>
              </div>
            )}
          </div>
        </div>
      ) : (
        <Link to="/signin">
          <a className="btn btn-sm">Join Us</a>
        </Link>
      )}
    </div>
  </div>
  );
};

export default Navbar;
