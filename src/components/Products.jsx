import React from 'react'
import Product from './Product'

const Products = () => {
    return (
            <div className='productsInfo'>
                <div className="productHead">
                    <h2>Products</h2>
                    <div className='productHeadLeft'>
                        <div className='productSearch'>
                            <img src="./images/search.svg" alt="search" />
                            <input type="text" placeholder='search' />
                        </div>
                        <select className='productsViewOptions'>
                            <option value="last 30days">last 30 days</option>
                            <option value="last 30days">last 15 days</option>
                            <option value="last 30days">last 8 days</option>
                        </select>
                    </div>
                </div>
                <div className="products">
                    <span>Product Name</span>
                    <div className='productDetail'>
                        <span>Stock</span>
                        <span>Price</span>
                        <span>Total Sale</span>
                    </div>
                </div>
                <div className="productList">
                <Product/>
                <Product/>
                </div>
            </div>
    )
}

export default Products
