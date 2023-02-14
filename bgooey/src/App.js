import './App.css';
import { useEffect, useReducer, useState } from 'react'
import axios from 'axios'

import Header from './Header/Header'
import MenuItems from './MenuItems/MenuItems';
import Cart from './Cart/Cart'
import Purchase from './Purchase/Purchase';


function App() {
  const [websiteData, setWebsiteData] = useState({})
  const [menu, setMenu] = useState([])
  const [cart, setCart] = useState([])
  const [startPurchase, setIsPurchase] = useState(false)
  const [ignored, forcedUpdate] = useReducer(x => x + 1, 0)
  function makeGetRequest(path) {
    axios.get(path).then(
      (response) => {
        var result = response.data;
        setWebsiteData(result)
        setMenu(result.Menu)
      },
      (error) => {
        console.log(error);
      }
    );
  }
  const updateCart = (e) => {
    let name = e.target.name;
    let price = e.target.value;
    let inCart = isInCart(name)
    let ncart = cart
    console.log(price)
    if (inCart) {
      let ccart = []
      ncart.map((e) => {
        if (e.name === name) {
          ccart.push({ "name": name, "count": (Number(e.count) + 1), "price":Number(price) })
        }
        else {
          ccart.push(e)
        }
      })
      ncart = ccart
    }
    else {
      ncart.push({ "name": name, "count": 1 , "price":price})
    }
    setCart(ncart)
    forcedUpdate()
  }
  function isInCart(name) {
    let is = false
    cart.map((c) => {
      if (name == c.name) {

        is = true
      }
    })
    return is
  }
  useEffect(() => {
    makeGetRequest("http://localhost:3000")
  }, [])

  console.log(cart)
  return (
    <div className="App">
      <Header title={websiteData.title} description={websiteData.description} mainColor={websiteData.mainColor}></Header>
      {startPurchase && <Purchase parentCallBack={setIsPurchase} cart = {cart}/>}
      {startPurchase == false && <>
        <MenuItems menu={menu} secondaryColor={websiteData.secondaryColor} updateCart={updateCart}></MenuItems>
        {cart.length > 0 && <Cart cart={cart} setIsPurchase={setIsPurchase}></Cart>}
      </>
      }
    </div>
  );
}

export default App;
