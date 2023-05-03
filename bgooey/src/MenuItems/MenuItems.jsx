import { useEffect, useState } from "react"
import MenuItemImages from '../MenuItemImages/MenuItemImages'
import "./MenuItemsStyle.css"

function MenuItems(params) {
  const bodyStyle = { "backgroundColor": params.secondaryColor, "display": "flex" ,"flexWrap": "wrap","justifyContent": "space-evenly"}
  const itemStyle = {"backgroundColor": params.mainColor,"maxWidth":"30%", "minWidth":"300px","marginTop":"10px","marginBottom":"10px", "borderRadius":"10px"}

  const buttonStyle ={ "margin": "10px" ,"backgroundColor":params.thirdColor}
  const [menu, setMenu] = useState([])
  useEffect(() => {
    setMenu(params.menu)
  }, [params])
  return (
    <div style={bodyStyle}>
      {menu.map((menuItem) => <div key={menuItem.name} className="Item" style={itemStyle}>
        <h2>{menuItem.name}</h2>
        <h3>{menuItem.unit}</h3>
        <MenuItemImages images={menuItem.images}></MenuItemImages>
        <h3>{menuItem.description}</h3>
        <button name={menuItem.name} value={menuItem.price} onClick={params.updateCart} style={buttonStyle}>Add to Cart</button>
      </div>
      )}
    </div>
  )
}

export default MenuItems