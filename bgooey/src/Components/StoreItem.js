import { Row, Col, Card, Button } from 'react-bootstrap'
import { CartContext } from '../CartContext'
import { useContext, useState } from 'react'

function StoreItem(props) {
    const data = props.data
    const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(data.id)
    const handleAdd = (e) => {
        cart.addOneToCart(e.target.name)
        console.log(cart)
    }
    const handleRemove=(e)=>{
        cart.removeOneFromCart(e.target.name)
        console.log(cart)
    }
    return (
        <Card key={data.id} >
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>{data.description}</Card.Text>
                {productQuantity > 0 ?
                    <div>
                        <Button onClick={handleAdd} name={data.id}>+</Button>
                        <Button onClick={handleRemove} name={data.id}>-</Button>
                    </div> :
                    <Button onClick={handleAdd} name={data.id}>Add To Cart</Button>
                }
            </Card.Body>
        </Card>
    )
}

export default StoreItem