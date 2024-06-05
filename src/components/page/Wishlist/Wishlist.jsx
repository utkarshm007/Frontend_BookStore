import React from 'react'
import CommonBanner from '../../CommonBanner/CommonBanner'
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs'

const Wishlist = () => {
    return (
        <>
            <CommonBanner pageTitle={"Wishlist"} />
            <Breadcrumbs breadcumr1={"Wishlist"} />

            <div className='container mx-auto'>
                <h2 className='text-5xl text-center py-32'>Wishlist is Empty...!</h2>
            </div>
        </>
    )
}

export default Wishlist
