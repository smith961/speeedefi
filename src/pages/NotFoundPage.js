import React from 'react'
import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <section>

      <h1>You seem Lost</h1>
      <Link to='/'>
        Go Back to Home page
      </Link>
    </section>

  )
}

export default NotFoundPage