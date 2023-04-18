import { Navbar, About, Homepage } from './index'
import { Routes, Route } from 'react-router-dom'

const App = () => {
    return(
        <div id="app_component">
            <Navbar></Navbar>
            <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
        </div>
    )
}

export default App