
import { AiOutlineLike } from "react-icons/ai";

import useAuth from "../../hook/useAuth.jsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import React, { useState } from "react";
import useAxiosSecure from "../../hook/useAxiosSecure.jsx";
import useCart from "../../hook/useCart.jsx";
const DetailsCard = ({coffee}) => {
    const{_id,title,image,price,rating,description,ingredients,post,review,distributor}=coffee;
    
    
    const [reactionCount, setReactionCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    if (!isLiked) {
      setReactionCount(reactionCount + 1);
      setIsLiked(true);
    }

  };

   // Membership section
   const [membershipPackage, setMembershipPackage] = useState(""); // State to track the user's membership

   // Display membership cards with prices
   const renderMembershipCards = () => {
     return (
       <div>
         <h3>Membership Packages:</h3>
         <div>
           <button className="btn btn-outline btn-warning" onClick={() => setMembershipPackage("Silver")}>Silver - $10</button>
           <button className="btn btn-outline btn-warning" onClick={() => setMembershipPackage("Gold")}>Gold - $20</button>
           <button className="btn btn-outline btn-warning" onClick={() => setMembershipPackage("Platinum")}>Platinum - $30</button>
         </div>
       </div>
     );
   };
 
 
 

  //add to cart menu request
  const {user}=useAuth();
  const navigate=useNavigate();
    const location=useLocation();
    
    const axiosSecure = useAxiosSecure();
    const [cart,refetch] = useCart();
  const handleAddToCart=food=>{
    console.log(food);
   
    if(user && user.email ){
      //
  // Check if the user has a valid membership
  if (!membershipPackage) {
    Swal.fire({
      title: "No Membership Package",
      text: "Please select a membership package to request meals.",
      icon: "warning",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK"
    });
    return;
  }

          const cartItem = {
              menuId: _id,
              email: user.email,
              title,
              image,
              price
          }
          axiosSecure.post('/carts', cartItem)
              .then(res => {
                  console.log(res.data)
                  if (res.data.insertedId) {
                      Swal.fire({
                          position: "top-end",
                          icon: "success",
                          title: `${title} added to your cart`,
                          showConfirmButton: false,
                          timer: 1500
                      });
                      // refetch cart to update the cart items count
                      refetch();
                  }
            navigate('/dashboard/cart')
              })
              //
              .catch((error) => {
                console.error("Error adding to cart:", error);
              }); 
}
      
      
      else {
          Swal.fire({
              title: "You are not Logged In",
              text: "Please login to add to the cart?",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, login!"
          }).then((result) => {
              if (result.isConfirmed) {
                  //   send the user to the login page
                  navigate('/signin', { state: { from: location } })
              }
          });
      }
  }
//package


 


    
    return (
        <div className="card lg:card-side bg-base-100 w-[40rem] shadow-xl ">
        <figure><img src={image} alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">Meal Name: {title}</h2>
          <p>Price: {price}</p>
          <p>description: {description}</p>
          <p>ingredients: {ingredients}</p>
          <p>post: {post}</p>
          <p>review: {review}</p>
          <p>distributor: {distributor}</p>
          
          <p>Rating: {rating}</p>
          {renderMembershipCards()}
          <div className="card-actions justify-end">
            
          <div className="indicator">
      <span className="indicator-item badge badge-secondary">+{cart.length}</span>
      <button className={`btn ${isLiked ? 'btn-danger' : 'btn-warning'}`} onClick={handleLikeClick}>
        <AiOutlineLike />
      </button>
    </div>
       <Link to="/dashboard/cart" onClick={handleAddToCart}
       className="btn btn-warning">
Meal Request
       </Link>
        {/* <button onClick={handleAddToCart}
       className="btn btn-warning">
Meal Request
       </button> */}
          </div>
        </div>
      </div>
    );
};

export default DetailsCard;