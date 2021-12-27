import React from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main class="flex-grow"></main>
      <Footer />
    </div>
  );
}

export default App;
