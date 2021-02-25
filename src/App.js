import React,{useState} from "react";
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
import HidingPanel from "./Hiding Panel/HidingPanel";



function App() {
    const [open, setOpen] = useState(false);
    const set = ()=>setOpen(!open);
  return (
    <div className="App container-fluid">
     <Header/>
     <Carousel/>
     <FilterWrapper set={set} open={open}/>
     <HidingPanel open={open}/>
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
