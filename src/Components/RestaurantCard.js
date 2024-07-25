import { CDN_URL } from "../Helper/contants";
import { useContext } from "react";
import UserContext from "../Helper/UserContext";

const RestaurantCard = (props) => {
    const { resData } = props;
  
    const {loggedInUser} = useContext(UserContext);
  
    return (
      <div data-testid="resCard" className="bg-slate-200 text-slate-600 p-4 m-4 rounded-md w-64 h-84 hover:bg-slate-300">
      <img className="w-[300px] border-solid" src={CDN_URL+resData.info.cloudinaryImageId}/>
      <h3 className="font-bold">{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>⭐{resData.info.avgRating} stars</h4>
      <h4>{resData.info.sla.deliveryTime} mins</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h3 className="font-bold">User : {loggedInUser}</h3>
  </div>);
  }

  export const withPromotedLabel = (RestaurantCard) => {
    
   
    return (props) => {
        return ( <div>
            <label className="absolute w-30 bg-black text-slate-200 m-3 ml-8 mt-4 p-1 rounded-md">
                Promoted
            </label>
            <RestaurantCard {...props}/>
    </div> )
    }
}


  export default RestaurantCard;