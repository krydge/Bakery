import { useEffect, useState } from "react"
import MenuItemImages from '../MenuItemImages/MenuItemImages'

function MenuItems(params){
    const bodyStyle = { "backgroundColor": params.secondaryColor }
    const [menu , setMenu]=useState([])
    useEffect(() => {
        setMenu(params.menu)
      }, [params])
    return(
        <div style={bodyStyle}>
        {menu.map((menuItem) => <div key={menuItem.name}>
          <h2>{menuItem.name} {menuItem.unit} </h2>
          <h3>{menuItem.description}</h3>
          <MenuItemImages images={menuItem.images}></MenuItemImages>
          <button name= {menuItem.name} value={menuItem.price} onClick={params.updateCart}>Add to Cart</button>
        </div>
        )}
      </div>
    )
}

export default MenuItems