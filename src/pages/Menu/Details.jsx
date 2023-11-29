import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";

const Details = () => {
    const loadedcoffees=useLoaderData();
    //edit
      const {id}=useParams();
    
      const filteredCoffees = id?loadedcoffees.filter((coffee) => coffee._id === id)
      : loadedcoffees;
    
      //edit sesh
      
       const[coffees,setCoffees]=useState(loadedcoffees);

    return (
        <>
        {/* show product */}
        <div className='m-20'>
        <h1 className='text-6xl text-center text-purple-600'>Meals Details</h1>
        <h1 className='text-6xl text-center text-purple-600'>-----------</h1>
        
        <div className='grid md:grid-cols-2 gap-4 mt-10'>
   
   
        {filteredCoffees.map((coffee) => (
               <DetailsCard
                 key={coffee._id}
                 coffee={coffee}
                 coffees={filteredCoffees}
                 setCoffees={setCoffees}
               />
             ))}
   
   
   
       
        </div>
        </div>
 
      
 
        </>
     
    );
};

export default Details;