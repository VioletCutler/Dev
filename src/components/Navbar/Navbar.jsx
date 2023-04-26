import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
    <nav>
        <h1><Link id='navbar-header' to='/'>Violet Cutler</Link></h1>
        <div id='navlinks'>
   
        <Link to='/about'>About</Link>
        <Link to='/projects'>Projects</Link>
        </div>
    </nav>
    )
}

export default Navbar