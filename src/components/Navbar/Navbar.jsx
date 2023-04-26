import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
    <nav>
        <h1><Link id='navbar-header' to='/'>Violet Cutler</Link></h1>
        <div id='navlinks'>
        <Link className="navlink" to='/about'>[ about ]</Link>
        <Link className="navlink"to='/projects'>[ projects ]</Link>
        </div>
    </nav>
    )
}

export default Navbar