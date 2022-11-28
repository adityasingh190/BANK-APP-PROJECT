import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";
import { Button } from "react-bootstrap";
import axios from 'axios';

const ContextCart = (props) => {
    const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);
const update={
    accNo:props.accNo,
    amount:totalAmount
}
    const Handler=()=>{
if(totalAmount==0)
alert("Please select atleast one item");
else{
        axios.put("http://localhost:8081//withraw1", {}, {params:update}, { headers: {
            'Access-Control-Allow-Origin': '*', 
            'Access-Control-Allow-Methods': 'POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
            'Access-Control-Allow-Credentials': true}},
            {withCredentials: true},
            {crossorigin: true})
            .then(response => {
                console.log(response);
                alert(response.data);
            }).catch((error=>console.log(error.response.request._response)));
    }}
 

  if (item.length === 0) {
    return (
      <>
      <div >
        <header>
          <div className="continue-shopping">
            <img src="./images/arrow.png" width={10} height={10} alt="arrow" className="arrow-icon" />
            <h3 style={{fontSize:30}}>Enjoy Shopping</h3>
          </div>

          <div className="cart-icon">
            <img src="./images/cart.png" width={10} height={10} alt="cart" />
            <p>{totalItem}</p>
          </div>
        </header>

        <section style={{marginBottom:520,marginTop:0}} className="main-cart-section">
          <h1 style={{fontSize:30}}>shopping Cart</h1>
          <p style={{fontSize:20}} className="total-items">
            you have <span className="total-items-count">{totalItem} </span>{" "}
            items in shopping cart
          </p>
        </section>
        </div>
      </>
    );
  }

  return (
    <>
     <div >
      <header>
        <div style={{fontSize:10}} className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3 style={{fontSize:30}}>Enjoy Shopping</h3>
        </div>

        <div className="cart-icon">
          <img src="./images/cart.png"width={10} height={10} alt="cart" />
          <p>{totalItem}</p>
        </div>
      </header>

      <section style={{marginBottom:520,marginTop:0}}className="main-cart-section">
        <h1 style={{fontSize:30}}>shopping Cart</h1>
        <p style={{fontSize:20}}className="total-items">
          you have <span className="total-items-count">{totalItem} </span> items
          in shopping cart
        </p>

        <div style={{width:950,height:550}}className="cart-items">
          <div style={{height:400,width:800}} className="cart-items-container">
            <Scrollbars>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </Scrollbars>
          </div>
        </div>

        <div className="card-total"style={{marginBottom:300,marginLeft:650}}>
          <h3 style={{fontSize:25,marginRight:39}}>
            Cart Total : <span style={{fontSize:25}}>{totalAmount}₹</span>
          </h3>
          <Button id="checkout" onClick={Handler} >Checkout</Button>
          <Button className="clear-cart" onClick={clearCart}>
            Clear Cart 
          </Button>
        </div>
      </section>
      </div>
    </>
  );
};

export default ContextCart;
