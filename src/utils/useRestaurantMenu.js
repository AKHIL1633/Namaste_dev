//it will take resid and job is to return the restaurant information 

import {useEffect } from "react";
//it jobs is to restaurant information 

const useRestaurantMenu = (resId)  => {
     
    const [resInfo,setResInfo]=useState(null);
    
    //fetchdata
    // we will fetch inside the same way we used there 
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const data=await fetch(MENU_API +resId);

        const json=await data.json();

        setResInfo(json.data);
    };
    //how we fetch the data inside the component 
    // if there any issue with fetching the data we have to go to the useRestaurantMenu
    //if there any issue with fetching the ui display we have to go to the RestaurantMenu



    return resInfo;
    // resinfo is a local variable 
};

export default  useRestaurantMenu;