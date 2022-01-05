import React from 'react'
import "./Product.css";

function Product({id,title,quantity,price,rating,image }) {
    
    return (
        <div className="product">
            <div className="product__info">
            <p>{title}</p>
            <p className="product__">
                <small>₹</small>
                <strong>{price}</strong>
                
            </p>
            <strong>{quantity}</strong>
            <p><strong>{id}</strong></p>
            
            <div className="product__rating">
                {Array(rating)
                   .fill()
                   .map((_) =>(
                       <p>⭐</p>

                   ))
                
                }
            </div>
            </div>
            <img src={image} alt="" />
            
        </div>
     
    );
}


export default Product;
