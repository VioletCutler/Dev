import { Navbar, About, Homepage, Projects } from '../index'
import { Routes, Route } from 'react-router-dom'
import './App.css'
const App = () => {
    return(
        <div id="app-component">
            <Navbar></Navbar>
            <div id="routes">
            <Routes >
                <Route path='/' element={<Homepage/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/projects' element={<Projects/>}/>
            </Routes>
            </div>
           
        </div>
    )
}

export default App