import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
    <nav>
        <h1>Violet Cutler</h1>
        <div id='navlinks'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        </div>
    </nav>
    )
}

export default Navbar