import React from 'react'
import { ShoppingCart, Heart, Star, StarHalf } from 'lucide-react';
import "./productcard.css";
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <Link to={`/product/${product._id}`}>
            <div className="card card-compact bg-base-100 shadow-xl product-card">
                <figure><img src={product.productMainImage} alt={product.name} className='product-image' /></figure>
                <div className="card-body">
                    <h3 className="product-heading">{product.name}</h3>
                    <div className='flex justify-between items-center'>
                        <div className='font-lg'>
                            &#8377;{product.productPrice}
                            <sub><del> &#8377;{product.productMrp}</del></sub>
                        </div>
                        <div className='rating'>
                            <Star size={18} className='text-warning' />
                            <Star size={18} className='text-warning' />
                            <Star size={18} className='text-warning' />
                            <Star size={18} className='text-warning' />
                            {/* <StarHalf size={18} className='text-warning' /> */}
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="grid grid-cols-1 mx-auto gap-x-3">
                            {/* <button type="button" className="btn btn-wishlist">
                            <Heart />
                        </button>
                        <button type="button" className="btn btn-cart">
                            <ShoppingCart />
                        </button> */}
                            {/* <Link to={`/product/${product._id}`} className="btn btn-cart">
                            View Details
                        </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard
