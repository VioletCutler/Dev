import { Navbar, About, Homepage, TabView, Footer } from "../index";
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
    return <Outlet />;
  };

  return (
    <div id="app-component">
      <div id="routes">
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path="/" element={<Homepage />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<TabView />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
