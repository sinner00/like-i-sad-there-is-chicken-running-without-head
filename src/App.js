import React from "react";
import "./App.scss"
import Header from "./Header/Header";
import Carousel from "./Carousel/Carousel";
import FilterWrapper from "./FilterWrapper/FilterWrapper";
import Categories from "./WrapperCategories/WrapperCategories";
import RecentProperties from "./RecentProperties/RecentProperties";
import OurAdvantages from "./OurAdvantages/OurAdvantages";
import EstateAgents from "./EstateAgents/EstateAgents";
import Testimonials from "./Testimonials/Testimonials";
import Footer from "./Footer/Footer";



function App() {
  return (
    <div className="App container-fluid">
     <Header/>
     <Carousel/>
     <FilterWrapper/>
     <Categories/>
     <RecentProperties/>
     <OurAdvantages/>
     <EstateAgents/>
     <Testimonials/>
     <Footer/>
    </div>
  );
}

export default App;
