import React, { useState } from "react";


const Billing = ({ items }) => {
    const [price, setPrice] = useState(0);

    return (
        <div>
            {
                items.map((item) => (
                    <div className="my-4" key={item.card.info.id}>
                        <h2 className="text-left font-bold">Bill Details</h2>
                        <h3>Item Total</h3>
                        {
                            setPrice(item.card.info.price / 100)
                        }
                        <h3 className="border-t-4 border-teal-700">To Pay</h3>
                        <h3 className="border-t-4 border-teal-700">{price}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default Billing;