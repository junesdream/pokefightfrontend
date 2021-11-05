import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
      <h2>There's nothing here!</h2>
      <p>
        <Link to='/'>Go to the home page</Link>
      </p>
    </div>
  )
}

export default PageNotFound
