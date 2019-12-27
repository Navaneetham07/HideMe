import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <div>
        Welcome to home page
        <Link to="/catalog"> click here to navigate to plp page</Link>
      </div>
    )
  }
}

export default Home
export { Home }
