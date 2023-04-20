import { Navbar, About, Homepage, Projects } from '../index'
import { Routes, Route } from 'react-router-dom'
import './App.css'
const App = () => {
    return(
        <div id="app_component">
            <Navbar></Navbar>
            <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/projects' element={<Projects/>}/>
            </Routes>
        </div>
    )
}

export default App