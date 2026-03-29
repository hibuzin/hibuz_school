import React from "react";
import TopBar from "./components/TopBar";
import TabBar from "./components/TabBar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import SchoolIntro from "./components/SchoolIintro";
import DirectorMessage from "./components/DirectorMessage";
import StatsCounter from "./components/StatsCounter";
import EventList from "./components/Even";
import ReviewsMarquee from "./components/ReviewsMarquee";
import TrackBus from "./components/track_bus";

function App() {
  return (
    <div>
      <TopBar />
      <TabBar />
      <Banner/>
      <SchoolIntro/>
      <DirectorMessage/>
      <EventList/>
      <TrackBus /> 
      <ReviewsMarquee />
      <Footer/>
    </div>
  );
}

export default App;