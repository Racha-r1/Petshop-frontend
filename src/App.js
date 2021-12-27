import React from "react";
import FavCategorieen from "./components/FavCategorieen";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Nieuws from "./components/Nieuws";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main class="flex-grow">
        <FavCategorieen />
        <Nieuws />
      </main>
      <Footer />
    </div>
  );
}

export default App;
