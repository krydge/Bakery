import { useEffect, useState } from "react"
function Purchase(params) {
    const [cart, setCart]= useState(params.cart)
    const [total, setTotal] = useState(0)
    useEffect(()=>{
        console.log(params.cart)
setCart(params.cart)
setTotal(getTotal())
    },[params.cart])

    function getTotal(){
        let gtotal = 0
        cart.map((e)=>{
            gtotal= gtotal + (Number(e.count)*Number(e.price))
        })
        return gtotal
    }
    return (
        <div className="Purchase">
            {cart.map ((e)=><div key = {e.name}><h3>{e.name}</h3> Price:{e.price} x Quantity:{e.count}={Number(e.count)*Number(e.price)}</div>)}
            <h2>Total : {total}</h2>
            <button onClick={() => params.parentCallBack(false)}>Continue Shopping</button>
        </div>
    )
}

export default Purchase