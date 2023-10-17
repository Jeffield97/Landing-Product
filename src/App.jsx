import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Topbar from "./components/Topbar";
import TopInfo from "./components/TopInfo";
import InfoTitle from "./components/InfoTitle";
import Steps from "./containers/Steps";
import Product from "./containers/Product";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Topbar />
      <TopInfo />
      <InfoTitle />
      <Steps />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
