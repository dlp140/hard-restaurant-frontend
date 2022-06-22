// React
import { Link } from 'react-router-dom'
import { login, logout } from '../services/firebase'

// Stylesheet
import '../App.css'

function Header(props) {
  return (
    <nav className="nav" id="nav1">
      <Link to="/">
        <button id="home">Home</button>
      </Link>
      <Link to="/austin">
        <button id="austin">Austin</button>
      </Link>
      <Link to="/detroit">
        <button id="detroit">Detroit</button>
      </Link>
      <Link to="/houston">
        <button id="houston">Houston</button>
      </Link>
      <Link to="/raleigh">
        <button id="raleigh">Raleigh</button>
      </Link>
      {
        props.user 
        ? <button id='logout' onClick={logout}>Logout</button>      
        : <button id="login" onClick={login}>Login</button> 
      }
    </nav>
  )
}
// id on buttons
export default Header
