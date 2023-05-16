import { createContext , useState} from "react";

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => { },
    addOneToCart: () => { },
    removeOneFromCart: () => { },
    deleteFromCart: () => { },
    getTotalCost: () => { }
})


export function CartProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([])

    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => Number(product.id) === Number(id))?.quantity
        console.log(quantity)
        if (quantity === undefined) {
            return 0
        }
        return quantity
    }

    function addOneToCart(id) {
        const quantity = getProductQuantity(id);
        if (quantity === 0) {
            setCartProducts(
                [
                    ...cartProducts,
                    { id: id, quantity: 1 }
                ]
            )
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id
                            ? { ...product, quantity: product.quantity + 1 }
                            : product
                )
            )
        }
    }
    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id)
        if (quantity === 1) {
            deleteFromCart(id)
        } else {
            setCartProducts(
                cartProducts.map(
                    product => product.id === id ? { ...product, quantity: product.quantity - 1 } : product
                )
            )
        }
    }
    function deleteFromCart(id) {
        setCartProducts(cartProducts => cartProducts.filter(currentProduct => { return currentProduct.id !== id }))
    }

    function getTotalCost(products) {
        let totalCost = 0;
        function getProductData(id, products) {
            let productData = products.find(product => product.id === id)
            if (productData === undefined) {
                console.log('[Error]-- Product data does not exist for id: ' + id)
                return undefined
            }
            return productData
        }
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id, products)
            totalCost += (productData.price * cartItem.quantity)
        })
        return totalCost

    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider