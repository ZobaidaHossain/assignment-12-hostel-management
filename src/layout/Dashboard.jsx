import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAdmin from "../hook/useAdmin";
import useCart from "../hook/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const navigate = useNavigate();

  return (
    <div className="flex">
      <div className="w-64 min-h-full bg-orange-400">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">Admin Home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">Manage Users</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">Add Meal</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">All Meal</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allreview">all Review</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/serveMeals">serve meals</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addupcoming">Add Upcoming Meals</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/upcoming">Upcoming Meals</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">My Requested Meals ({cart.length})</NavLink>
              </li>
              <li>
                                    <NavLink to="/dashboard/history">
                                       
                                        Not History</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/paymentHistory">
                                        
                                        Real Payment History</NavLink>
                                </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">User Home</NavLink>
              </li>
              {/* <li>
                <NavLink to="/dashboard/cart">My Requested Meals ({cart.length})</NavLink>
              </li> */}
              <li>
                <NavLink to="/dashboard/review">My Review</NavLink>
              </li>
              
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
