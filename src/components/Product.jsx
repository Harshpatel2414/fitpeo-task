import React from 'react'

const Product = () => {
    return (
        <div className="product">
            <div className="productInfo">
                <div className="product-img">
                    <img alt="product" src="./images/user.jpg" />
                </div>
                <div className="product-detail">
                    <span >Abtract 3D</span>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
            <div className="stock-detail">
                <span>32 in stock</span>
                <span>$ 45.99</span>
                <span>20</span>
            </div>
        </div>
    )
}

export default Product
