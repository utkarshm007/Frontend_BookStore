import React from 'react'
import "./common-banner.css"

const CommonBanner = ({ pageTitle }) => {
    return (
        <>
            <div className='common-banner'>
                <h1 className='page-heading italic'>{pageTitle}</h1>
            </div>
        </>
    )
}

export default CommonBanner
