import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Helper/useRestaurantMenu";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const [showIndex, setShowIndex] = useState(0);//for expanding accordian

    const {resId} = useParams();

    const resMenu =useRestaurantMenu(resId);


    if (resMenu === null) return <Shimmer />;

    // Destructure name property using optional chaining
    const {name, cuisines, costForTwoMessage, locality, avgRating, totalRatingsString
    } = resMenu?.cards[0]?.card?.card?.info;

    const {deliveryTime} = resMenu?.cards[0]?.card?.card?.info.sla;

    const categories = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    .filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return ( 
        <section className="w-9/12 mx-auto text-center">
            <div className="m-4 p-4 text-left flex flex-wrap justify-between">
                <div>
                    <h1 className="font-bold my-4 text-4xl text-black">{name}</h1>
                    <p className="text-lg text-slate-500">{cuisines.join(", ")} </p>
                    <p className="text-lg text-slate-500">{locality}</p>  
                </div>
                <div className="border-1 border-x-2 border-y-2 p-2 h-20 mt-8 rounded-lg">
                    <h2 className="pt-1 text-lg text-green-700 font-bold border-dashed border-b-2">
                        ⭐{avgRating}</h2>
                    <h4 className="pt-1 text-xs text-slate-500">{totalRatingsString}</h4>
                </div>
            </div>
            <div className="border-dashed border-t-2 flex m-4 p-4">
                <h3 className="pt-1 text-lg text-slate-800 font-bold">🕗{deliveryTime} mins</h3>
                <p className="pt-1 pl-3 text-lg text-slate-800 font-bold">💵{costForTwoMessage}</p>
            </div>    
            <section className="my-8">
                {/* Categories accordian */}
                {
                    categories.map((category, index) => (
                        <RestaurantCategory 
                            key={category?.card?.card.title}
                            data={category?.card.card}
    
                            //expand the items only when we clicked, other accordians should be hided.
                            showItems={ index === showIndex ? true : false} 
                            setShowIndex={() => setShowIndex(index)}
                        />
                    ))
                }
            </section>
        </section>
        );
};

export default RestaurantMenu;
