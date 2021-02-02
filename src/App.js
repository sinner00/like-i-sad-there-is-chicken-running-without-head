import React from "react";
import "./App.scss"
import Header from "./Header/Header";
import Carousel from "./Carousel/Carousel";
import FilterWrapper from "./FilterWrapper/FilterWrapper";
import Categories from "./WrapperCategories/WrapperCategories";
import RecentProperties from "./RecentProperties/RecentProperties";



function App() {
  return (
    <div className="App container-fluid">
     <Header/>
     <Carousel/>
     <FilterWrapper/>
     <Categories/>
     <RecentProperties/>
    </div>
  );
}

export default App;
