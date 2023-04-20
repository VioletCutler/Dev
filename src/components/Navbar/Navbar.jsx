import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
    <nav>
        <h1 id='navbar-header'>Violet Cutler</h1>
        <div id='navlinks'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Projects</Link>
        </div>
    </nav>
    )
}

export default Navbar