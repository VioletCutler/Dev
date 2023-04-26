import { Navbar, About, Homepage, Projects, TabView } from "../index";
import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
const App = () => {
  const WithNav = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };

  const WithoutNav = () => {
    return <Outlet/>
  }

  return (
    <div id="app-component">
      {/* <Navbar></Navbar> */}
      {/* <Homepage/> */}

    <div id="routes">
        <Routes>
            <Route element={<WithoutNav/>}>
                <Route path="/" element={<Homepage/>}/>
            </Route>
            <Route element={<WithNav/>}>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<TabView />} />
            </Route>
        </Routes>
    </div>

    <table id="background-grid">
      <tr className="grid-row">
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
      </tr>
      <tr className="grid-row">
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
      </tr>
      <tr className="grid-row">
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
      </tr>
      <tr className="grid-row">
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
      </tr>
      <tr className="grid-row">
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
      </tr>
      <tr className="grid-row">
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
      </tr>
      <tr className="grid-row">
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
        <td className="grid-cell"></td>
      </tr>
    </table>


      {/* <div id="routes">
        <Routes>
          <Route path="/" element={<Homepage />}>
             <Route path='/' element={<Homepage/>}/> 
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<TabView />} />
          </Route>
        </Routes>
      </div> */}
    </div>
  );
};

export default App;
