import { useState } from "react";

function MenuItemImages(params) {
    const [images, setimages] = useState(params.images)
    return (
        <>{images.map((image) =>
            <div key={image.alt}>
                <img src={image.src}></img>
            </div>)}
        </>
    )
}

export default MenuItemImages;