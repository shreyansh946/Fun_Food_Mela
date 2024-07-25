import { useState, useEffect } from "react";
import { SWIGGY_API_URL } from "./contants";

const useRestaurantList = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [FilterRestaurants, setFilteredRestaurants] = useState([]);


    useEffect(() => {
        getRestaurants();
    }, []);

    //get Restaurants list
    const getRestaurants = async () => {
        const restaurantList = await fetch(SWIGGY_API_URL);
        const jsonResData = await restaurantList.json();

        setListOfRestaurants(jsonResData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        //filtered restaurants
        setFilteredRestaurants(jsonResData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return listOfRestaurants;
}

export default useRestaurantList;