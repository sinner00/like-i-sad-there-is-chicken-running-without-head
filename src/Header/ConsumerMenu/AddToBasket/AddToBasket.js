import React from "react";
import "./AddToBasket.scss"

function AddToBasket() {
    return (
        <div className="add-to-basket">
            <button className="add-to-basket-button">
                <i className="bi bi-cart2"> </i>
                <span className="add-to-basket-item">Добавить в корзину </span>
            </button>
        </div>
    );
}

export default AddToBasket;
