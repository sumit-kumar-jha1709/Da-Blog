import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found'>
        <h2>Sorry</h2>
        <p>That Page cannot be found</p>
        <Link to="/">Back to HomePage...</Link>
    </div>
  )
}

export default NotFound