/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "./Cart.css";

const Cart = ({ selectedActors, remaining, totalCost }) => {
    console.log(selectedActors);

    return (
        <div >
            <div className="cart-actor">
                <h3 >Total Actor: {selectedActors.length}</h3>
                <h5>Remaining Money : {remaining}</h5>
                <h5>Total Cost : {totalCost}</h5>
            </div>
            <div className="cart-casting">
                <ol type="1">
                    {selectedActors.map((actor) => (
                        <li key={actor.id}> {actor.name}</li>
                    ))}
                </ol>
            </div>

        </div>
    );
};

export default Cart;