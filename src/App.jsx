import React from "react";
import TopBar from "./components/TopBar";
import TabBar from "./components/TabBar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import SchoolIntro from "./components/SchoolIintro";

function App() {
  return (
    <div>
      <TopBar />
      <TabBar />
      <Banner/>
      <SchoolIntro/>
      <Footer/>
    </div>
  );
}

export default App;