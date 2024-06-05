/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const ProductDetailsSkeleton = () => {
    return (
        <div className="product-details">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-x-4">
                <div className="product-image-section">
                    {/* Product Image */}
                    <div className="w-full xl:flex xl:flex-row-reverse">
                        <div className="relative mb-2.5 w-full shrink-0 overflow-hidden md:mb-3 xl:w-[480px] 2xl:w-[650px]">
                            <div className="skeleton product-main-image rounded-none" />
                        </div>
                        {/* Product Thumbnails */}
                        <div className="flex gap-2 xl:flex-col">
                            {[...Array(6)].map((_, index) => (
                                <div key={index} className="border-border-base flex cursor-pointer items-center justify-center overflow-hidden transition hover:opacity-75">
                                    <div className="skeleton product-slider-image  rounded-none" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="product-content px-4">
                    {/* Product Details */}
                    <div className="pb-5 mt-2 md:mt-0">
                        <div className="skeleton text-lg md:text-lg text-md text-justify italic mt-1 w-full rounded-none" style={{ height: '13rem' }} />
                    </div>
                    {/* Product Size */}
                    <div className="mb-2 pt-0.5">
                        <div className="flex justify-between">
                            <div className="skeleton text-xl font-bold italic w-1/4" />
                            <div className="skeleton text-xl font-bold italic underline w-1/4" />
                        </div>
                        <div className="flex flex-wrap space-x-2 mt-2 border-white">
                            {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size, index) => (
                                <div key={index} className="skeleton product-size rounded-none border-white" style={{ width: '2rem', border: "none" }} />
                            ))}
                        </div>
                    </div>
                    {/* Product Quantity */}
                    <div className="grid grid-cols-4 gap-4 mt-4 md:mr-20">
                        <div className="col-span-1">
                            <button type="button" className="btn-minus">
                                <Minus size={30} />
                            </button>
                        </div>
                        <div className="col-span-2">
                            <div className="skeleton quantity-input rounded-none flex" style={{ width: '100%' }} />
                        </div>
                        <div className="col-span-1">
                            <button type="button" className="btn-add">
                                <Plus size={30} />
                            </button>
                        </div>
                    </div>
                    {/* Add To Cart and Wishlist Buttons */}
                    <div className="space-y-2.5 pt-1.5 md:space-y-3.5 lg:pt-3 xl:pt-4">
                        <div className="grid grid-cols-2 gap-4 md:mt-0 mt-2 md:mr-20">
                            <button type="button" className="btn-add-cart" disabled>
                                <span className="block">Add To Cart</span>
                            </button>
                            <button type="button" className="btn-add-wishlist" disabled>
                                <span className="block">Add To Wishlist</span>
                            </button>
                        </div>
                        {/* Social Share Icons */}
                        <div className="social-share">
                            <span>Share:</span>
                            {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
                                <a key={index}
                                    href={""}
                                    target="_blank"
                                    className="share-icon"
                                    rel="noopener noreferrer"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="skeleton text-lg md:text-lg text-md text-justify italic mt-1 w-full rounded-none" style={{ height: '5rem' }} />
        </div>
    );
}

export default ProductDetailsSkeleton;
