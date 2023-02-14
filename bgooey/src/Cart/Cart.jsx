import { useState, useEffect } from "react"

function Cart(params) {
    const [cart, setCart] = useState(params.cart)
    useEffect(() => {
        setCart(params.cart)
    }, [params])
    const handleStartPurchase=(e)=>{
        
    }
    return (
        <div className="Cart">

            {cart.map((image) =>
                <div key={image.name}>
                    {image.name}:{image.count}
                </div>)}
                <button onClick={()=>params.setIsPurchase(true)}>Purchase Cart</button>
        </div>
    )
}

export default Cart;