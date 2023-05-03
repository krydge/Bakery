import { useState } from "react";

function MenuItemImages(params) {
    const imageStyle = {"minHeight":"25vh"}
    const [images, setimages] = useState(params.images)
    return (
        <>{images.map((image) =>
            <img src={image.src} key={image.alt} style={imageStyle}></img>)}
        </>
    )
}

export default MenuItemImages;