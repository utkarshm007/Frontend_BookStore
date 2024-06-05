import React from 'react'
import "./skelton.css"

const ProductSkelton = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="product-filter">
                    <div className="product-skelton">
                        <div className="grid md:grid-cols-5 grid-cols-2 md:gap-5 gap-2 product-skeltoning">
                            <div>
                                <div className="skeleton h-72 w-full"></div>
                            </div>
                            <div>
                                <div className="skeleton w-full"></div>
                            </div>
                            <div>
                                <div className="skeleton w-full"></div>
                            </div>
                            <div>
                                <div className="skeleton w-full"></div>
                            </div>
                            <div>
                                <div className="skeleton w-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductSkelton
