import React, { useState, useEffect } from 'react';


const InstaMart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart items from local storage
    const cartFromLocalStorage = localStorage.getItem('cartItem');
    const parsedCart = cartFromLocalStorage ? JSON.parse(cartFromLocalStorage) : [];
    setCartItems(parsedCart);
  }, []);

  const decCartItem = (index) => {
    setCartItems(prevCartItems => {
      const updatedCart = [...prevCartItems];
      if (updatedCart[index].quantity > 1) {
        updatedCart[index].quantity--;
        updatedCart[index].totalPrice = updatedCart[index].quantity * updatedCart[index].itemPrice;
      }
      return updatedCart;
    });
  };

  const incCartItem = (index) => {
    setCartItems(prevCartItems => {
      const updatedCart = [...prevCartItems];
      if (updatedCart[index].quantity < 10) {
        updatedCart[index].quantity++;
        updatedCart[index].totalPrice = updatedCart[index].quantity * updatedCart[index].itemPrice;
      }
      return updatedCart;
    });
  };

  const deleteCartItem = (index) => {
    setCartItems(prevCartItems => {
      const updatedCart = [...prevCartItems];
      updatedCart.splice(index, 1);
      return updatedCart;
    });
  };

  const calculateTotalBill = () => {
    return cartItems.map(item => ({
      itemName: item.itemName,
      quantity: item.quantity,
      totalPrice: item.totalPrice,
    }));
  };

  const calculateNetAmount = () => {
    return cartItems.reduce((total, item) => total + item.totalPrice, 0);
  };

  const renderCart = () => {
    if (cartItems.length === 0) {
      return <p>Your cart is empty.</p>;
    }

    return (
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <h3>{item.resName}</h3>
            <div className="flex cart-items-div-div">
              <img className="card-img menu-img" src={item.itemImg} alt={item.itemName} />
              <div className='cart-items-div-div-right'>
                <h4>{item.itemName}</h4>
                <p>Price: {item.itemPrice}₹</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total Price: {item.totalPrice}₹</p>
                <div className='cart-btn-div'>
                  {item.quantity === 1 && <button onClick={() => deleteCartItem(index)}>Del</button>}
                  {item.quantity > 1 && <button onClick={() => decCartItem(index)}>-</button>}
                  <button>{item.quantity}</button>
                  {item.quantity < 10 && <button onClick={() => incCartItem(index)}>+</button>}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  const renderOrderSummary = () => {
    const orderDetails = calculateTotalBill();
    const netAmount = calculateNetAmount();

    return (
      <div>
        <ul>
          {orderDetails.map((item, index) => (
            <li className='order-summ-detail-div' key={index}>
                <p>{item.itemName}</p>
              <div className='order-summ-quant-price-div'>
                <p className='quantity'>{item.quantity}</p>
                <p>{item.totalPrice}₹</p>
              </div>
            </li>
          ))}
          <div className='order-summ-detail-div'>
            <h3>Net Amount: </h3>
            <h3>{netAmount}₹</h3>            
          </div>
        </ul>
      </div>
    );
  };

  return (
    <div className='cart-page flex'>
      <div className='cart-item-div'>
        <h2>Cart Items</h2>
        {renderCart()}
      </div>
      <div className='cart-order-div'>
        <h2 className='order-summ-detail-div'>Order Summary:</h2>
        {renderOrderSummary()}
      </div>
    </div>
  );
};

export default InstaMart;

