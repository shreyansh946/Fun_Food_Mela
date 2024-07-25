import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Helper/UseOnlineStatus";
import useRestaurantList from "../Helper/UseRestaurantList";
import UserContext from "../Helper/UserContext";

const Body = () => {
  const listOfRestaurants = useRestaurantList(); // Ensure it's always an array
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    setFilterRestaurants(listOfRestaurants);
  }, [listOfRestaurants]);

  if (!onlineStatus) {
    return <h1>Looks like you are offline! Please check your internet connection.</h1>;
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  const handleSearch = () => {
    const filteredRestaurant = listOfRestaurants.filter((res) =>
      res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterRestaurants(filteredRestaurant);
  };

  const handleFilterTopRated = () => {
    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
    setFilterRestaurants(filteredList);
  };

  return (
    <div className="body">

      <div className="filter">
        
        <div className="search">
          
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />


          <button  className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={handleSearch}>
            Search            
            </button>


        </div>


        <button className="bg-teal-700 text-slate-200 p-2 rounded hover:bg-sky-950" onClick={handleFilterTopRated}>
          Top Rated Restaurant
        </button>


        <label className="font-bold mx-4">UserName :</label>
        <input
          className="border-2 border-slate-400 m-4 p-1"
          type="text"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>


      <section className="flex flex-wrap">
        
        {filterRestaurants.length > 0 ?
        
        filterRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
       
          )) :
          listOfRestaurants.map((restaurant) => (
            <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
              {restaurant.info.promoted ?
                <RestaurantCardPromoted resData={restaurant} /> :
                <RestaurantCard   key={restaurant.info.id} resData={restaurant} />
              }
            </Link>
          ))
        }
      </section>
    </div>
  );
};

export default Body;
