import './App.scss';
import './style/style.scss'
import {Route, Routes} from "react-router-dom";
import Main from "./Companents/home/Main";
import AboutSchool from "./Companents/home/AboutSchool";
import AboutUs from "./Companents/home/AboutUs";
import OurCourses from "./Companents/home/OurCourses";
import React from "react";
import Packet from "./Companents/home/Packet";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<Main/>}/>
                <Route path={'/aboutSchool'} element={<AboutSchool/>}/>
                <Route path={'/ourCourses'} element={<OurCourses/>}/>
                <Route path={'/AboutUs'} element={<AboutUs/>}/>
                <Route path={'/packet'} element={<Packet/>}/>
            </Routes>
        </div>
    );
}


export default App;
