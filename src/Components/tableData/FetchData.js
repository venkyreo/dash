import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function FetchData() {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get('https://dummyjson.com/products')
        .then(response => {
          let ProductList = response.data.products;
          ProductList.forEach(element => {
            element["originalPrice"] = calculateOriginalPrice(element.price, element.discountPercentage);
          });
          setProducts(ProductList);
        })
        .catch(error => {
          console.error('Error fetching products:', error);
        });
    };
    fetchData();
  }, []);

  const addToWishlist = (productId) => {
    const selectedProduct = products.find(product => product.id === productId);
    const existingProduct = wishlist.find(item => item.id === productId);
    if (existingProduct) {
      setShowPopup(true);
    } else {
      setWishlist([...wishlist, selectedProduct]);
    }
  };

  const addToCart = (productId) => {
    const selectedProduct = products.find(product => product.id === productId);
    setCart([...cart, selectedProduct]);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const calculateOriginalPrice = (price, percentage) => {
    const finalPrice = parseFloat(price / (1 - percentage / 100));
    return finalPrice.toFixed(2);
  };

  const addToWishListItem = (index) => {
    setProducts(curData => {
      const newData = [...curData];
      newData[index] = { ...newData[index], "isWishListed": !curData[index]["isWishListed"] };
      return newData;
    });
  };

  const incrementCartItem = (productId) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity: (item.quantity || 0) + 1 } : item
    );
    setCart(updatedCart);
  };
  
  const decrementCartItem = (productId) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity: Math.max((item.quantity || 0) - 1, 0) } : item
    );
    setCart(updatedCart);
  };

  return (
    <div>
      <h1>Product Page</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>originalPrice</th>
            <th>discountPercentage</th>
            <th>price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.originalPrice}</td>
              <td>{product.discountPercentage}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => addToWishListItem(index)}>Add to Wishlist</button>
                <button>
        {cart.map(item => (
          <li key={item.id}>
             Quantity: {item.quantity || 0}
            <button onClick={() => incrementCartItem(item.id)}>+</button>
            <button onClick={() => decrementCartItem(item.id)}>-</button>
          </li>
        ))}
      </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Cart:</h2>
     

      <h2>Wishlist:</h2>
      <ul>
        {products.filter(item => item["isWishListed"]).map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>

      {showPopup && (
        <div className="popup">
          <p>This product is already in the wishlist.</p>
          <button onClick={closePopup}>Close</button>
        </div>
      )}
    </div>
  );
};