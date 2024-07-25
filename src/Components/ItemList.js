import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { addItem } from "../Helper/cartSlice";
import { CDN_URL } from "../Helper/contants";


const ItemList = ({items}) =>{

    const dispatch = useDispatch();

    const handleAddItem = (items) =>{
        dispatch(addItem(items));
    }


    return (
        <div>
            {items.map((item) => (
            <div
                key={item.card.info.id}
                className="flex p-2 m-2 border-gray-200 border-b-2 text-left"
            >
                <div className="w-9/12">
                    <div className="py-2">
                        <h2 className="font-bold text-slate-600">{item.card.info.name}</h2>
                        <span className="text-slate-600">
                            ₹
                            {
                                item.card.info.price 
                                ? item.card.info.price/100
                                : item.card.info.defaultPrice/100
                            }
                        </span>
                    </div>
                    <p className="text-sm text-slate-600 mt-4">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 p-4">
                    <div className="absolute">
                        <button className="p-2 mx-32 my-18 w-20 rounded bg-white font-bold text-green-600 shadow-lg"
                            onClick={() => handleAddItem(item)}
                        >
                            ADD
                        </button>
                        {/* {
                            count === 0 
                            ?  <button className="p-2 mx-32 my-18 w-20 rounded bg-white font-bold text-green-600 shadow-lg"
                                    onClick={() => handleAddItem(item)}
                                >
                                    ADD
                                </button>
                            :   <button className="p-2 mx-32 my-18 w-20 rounded bg-white font-bold text-green-600 shadow-lg"
                                    onClick={() => handleAddItem(item)}
                                >
                                    <span className="p-1">-</span> {cartItemsCount} <span className="p-1">+</span>
                                </button>
                        } */}
                    </div>
                    {item.card.info.imageId && <img src={CDN_URL + item.card.info.imageId} className="w-full"/>}
                </div>
            </div>
            ))}
        </div>
      )
    }
    
    export default ItemList