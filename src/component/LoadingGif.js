import React from 'react'
import './LoadingGif.css'

const LoadingGif = () => {
    return (
        <div className='gif'>
            <img src='https://media.tenor.com/images/9f0fc756b9383e86043bd7dfd6241766/tenor.gif' alt='' />
            <p className='textwhile'>Please wait for a while...</p>
        </div>
    )
}

export default LoadingGif
