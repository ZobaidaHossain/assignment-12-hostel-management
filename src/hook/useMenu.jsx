import { useEffect, useState } from "react";


const useMenu=()=>{
    const [menu,setMenu]=useState([]);
    useEffect(()=>{
        fetch('https://hostel-management-server-sand.vercel.app/menu')
        .then(res=>res.json())
        .then(data=>setMenu(data));

    },[])
    return [menu]
}
export default useMenu;