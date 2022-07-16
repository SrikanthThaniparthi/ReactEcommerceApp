import React from "react";
import { API } from "../../backend";



const ImageHelper = ({ product }) => {

    console.log("productid", product._id)
    const imageUrl = product != undefined ? `${API}/product/photo/${product._id}` : "https://pixels.com/images/HomepageProductDuvetCover.jpg"
    return (
        <div>
            <img src={imageUrl}
                alt="photo"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
                className="mb-3 rounded"
            />
        </div>
    )
}



export default ImageHelper;