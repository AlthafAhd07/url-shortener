import React from "react";
import "./App.css";
import Bottom from "./components/Bottom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Middle from "./components/Middle";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Middle />
      <Bottom />
      <Footer />
    </div>
  );
}

export default App;
