import { useEffect, useState } from "react";
import { SWIGGY_MENU_API_URL } from "./contants";

const useRestaurantMenu = (resId) =>{
    
    const [resMenu,setResMenu] = useState(null); //holds a restaurant's Menu


    useEffect(() =>{
           
            getRestaurantMenu();
    })
    
    const getRestaurantMenu = async() =>{

        const RestaurantData = await fetch(SWIGGY_MENU_API_URL+resId);  //Fetch Menu Data

        const jsonResData =  await RestaurantData.json(); //converting  fetched  data to json

        setResMenu(jsonResData.data);
    } 
    
    return resMenu;
}

export default useRestaurantMenu;