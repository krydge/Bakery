import { useState, useEffect } from "react"

function Cart(params) {
    const [cart, setCart] = useState(params.cart)
    useEffect(() => {
        setCart(params.cart)
    }, [params])
    const handleStartPurchase = (e) => {

    }
    const deleteItem = (e) => {
        let item = e.target.name
        console.log(item)
        // setCart(item)
        // params.setCart(cart)
    }
    return (
        <div className="Cart">

            {cart.map((item) =>
                <div key={item.name}>
                    {item.name}:{item.count}
                    <button onClick={deleteItem} name={item.name}>Remove Item</button>
                </div>)}
            <button onClick={() => params.setIsPurchase(true)}>Purchase Cart</button>
            <button onClick={() => params.deleteCart()}>Delete Cart</button>
        </div>
    )
}

export default Cart;