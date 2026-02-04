import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import "./App.css"

const App = () => {
  // TODO: Implement state for dark mode toggle

  // TODO: Implement state for cart management

  // TODO: Implement state for category filtering
  const [darkMode, setDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState([]); 
  const [category, setCategory] = useState("all");


  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  
  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}

      {/* TODO: Implement category filter dropdown */}
      {/* Dark mode toggle */}
      <DarkModeToggle
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      />
      {/* Category filter (UI only for now) */}
      <label>Filter by Category: </label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList addToCart={addToCart}
      category={category}
      />


      {/* TODO: Implement and render Cart component */}
      {/* Cart component (logic to be added later) */}
      <Cart  cartItems={cartItems} />
    </div>
  )
}

export default App
