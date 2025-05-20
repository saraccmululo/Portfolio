import "./index.css";
import "./App.css";
import LoadingScreen from "./components/LoadingScreen";
import { useState } from "react";
import NavBar from "./components/NavBar";
import MobileMenu from "./components/MobileMenu";
import Home from "./components/sections/Home";

function App() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!hasLoaded && <LoadingScreen onComplete={() => setHasLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          hasLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home/>
      </div>
    </>
  );
}

export default App;
