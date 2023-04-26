import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
    <nav>
        <h1 id='navbar-header'><Link to='/'>Violet Cutler</Link></h1>
        <div id='navlinks'>
   
        <Link to='/about'>About</Link>
        <Link to='/projects'>Projects</Link>
        </div>
    </nav>
    )
}

export default Navbar