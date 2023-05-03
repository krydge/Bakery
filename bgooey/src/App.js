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
  const [images, setImages] = useState([])
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
  function makeGetImageRequest(path, imagePath) {
    axios.get(path + "/image/" + imagePath).then(
      (response) => {
        var result = response.data;
        let imgs = []
        imgs = images
        imgs.pop({ [imagePath]: result })
        setImages(imgs)
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

    if (inCart) {
      let ccart = []
      ncart.map((e) => {
        if (e.name === name) {
          ccart.push({ "name": name, "count": (Number(e.count) + 1), "price": Number(price) })
        }
        else {
          ccart.push(e)
        }
      })
      ncart = ccart
    }
    else {
      ncart.push({ "name": name, "count": 1, "price": price })
    }
    setCart(ncart)
    forcedUpdate()
  }
  const deleteCart = (e) => {
    setCart([])
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
    forcedUpdate()
    menu.map((data) => {
      console.log(data)
      // data.images.map((image) => {
      //   makeGetImageRequest("http://localhost:3000", image.src)
      // })
    })
  }, [])
  return (
    <div className="App">
      <Header title={websiteData.title} description={websiteData.description} mainColor={websiteData.mainColor}></Header>
      {startPurchase && <Purchase parentCallBack={setIsPurchase} cart={cart} />}
      {startPurchase == false && <>
        <MenuItems menu={menu} secondaryColor={websiteData.secondaryColor} mainColor={websiteData.mainColor} thirdColor={websiteData.fourthColor} updateCart={updateCart}></MenuItems>
        {cart.length > 0 &&
          <Cart cart={cart} setIsPurchase={setIsPurchase} deleteCart={deleteCart} setCart={setCart}></Cart>
        }
      </>
      }
    </div>
  );
}

export default App;
