import './App.css';
import React from "react";
import Header from "./component/Header";
import SectionOne from "./component/SectionOne";
import SectionTwo from "./component/SectionTwo";
import SectionThree from "./component/SectionThree";
import SectionFour from "./component/SectionFour";
import SectionFive from "./component/SectionFive";
import Footer from "./component/Footer";

function App() {
    return (
        <div className="App">

            <Header/>

            <SectionOne/>

            <SectionTwo/>

            <SectionThree/>

            <SectionFour/>

            <SectionFive/>

            <Footer/>

        </div>
    );
}

export default App;
