import React, { useContext } from "react";
import { CartContext } from "./Cart";

const Items = ({ id, description, title, img, price, quantity }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);

  return (
    <>
      <div style={{fontSize:10,height:100,width:300,marginLeft:0,paddingRight:220,paddingBottom:0,marginBottom:0,marginRight:400}}  className="items-info">
        <div style={{paddingRight:50}} className="product-img">
          <img style={{paddingLeft:0,width:140,height:110}} width="40" height="20"  src={img} alt="iamge" />
        </div>

        <div className="title">
          <h2 style={{fontSize:15}}>{title}</h2>
          <p style={{fontSize:10}}>{description}</p>
        </div>

        <div style={{marginTop:0,paddingLeft:100,paddingTop:0,paddingBottom:90}} id="dad"className="add-minus-quantity">
         <a > <i style={{width:8,height:10,marginBottom:20}}className="fas fa-minus minus" onClick={() => decrement(id)}></i></a>
          <input style={{fontSize:20,width:47,height:30,marginLeft:40}}type="text" placeholder={quantity} disabled />
          <i style={{width:8,height:10,marginBottom:20}}className="fas fa-plus add" onClick={() => increment(id)}></i>
        </div>

        <div className="price">
          <h3 style={{fontSize:20,marginLeft:100,marginBottom:90}}>{price}₹</h3>
        </div>

        <div className="remove-item">
          <i style={{height:10,marginLeft:80,marginBottom:100}}
            className="fas fa-trash-alt remove"
            onClick={() => removeItem(id)}></i>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Items;
