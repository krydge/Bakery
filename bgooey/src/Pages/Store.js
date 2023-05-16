import { useEffect, useState, useContext } from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { CartContext } from '../CartContext'
import StoreItem from '../Components/StoreItem'

function Store(props) {
    const [menu, setMenu] = useState(props.menu)
    const cart = useContext(CartContext)
    useEffect(() => {
        setMenu(props.menu)
    }, [props.menu])

    return (<h1>Store
        <Row xs={1} md={3} className='g-4'>
            {menu && menu.map(
                (data, idx) => (
                    <StoreItem key={idx} data={data}></StoreItem>
                )
            )
            }
        </Row>
    </h1>)
}

export default Store;