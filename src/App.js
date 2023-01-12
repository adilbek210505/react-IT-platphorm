import './App.scss';
import './style/style.scss'
import {Route, Routes} from "react-router-dom";
import Main from "./Companents/home/Main";
import AboutSchool from "./Companents/home/AboutSchool";
import AboutUs from "./Companents/home/AboutUs";
import OurCourses from "./Companents/home/OurCourses";
import Layout from "./Companents/Layout/Layout";
import React from "react";
import Enter from "./style/home/Enter";
import Packet from "./Companents/home/Packet";
import Header from "./Companents/header/Header";
import Footer from "./Companents/footer/Footer";
function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={"/"} element={<Main/>}/>
                <Route path={'/aboutSchool'} element={<AboutSchool/>}/>
                <Route path={'/ourCourses'} element={<OurCourses/>}/>
                <Route path={'/AboutUs'} element={<AboutUs/>}/>
                <Route path={'/packet'} element={<Packet/>}/>
            </Routes>
            <Footer/>


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={"/"} element={<Main/>}/>
            <Route path={'/aboutSchool'} element={<AboutSchool/>}/>
            <Route path={'/ourCourses'} element={<OurCourses/>}/>
            <Route path={'/AboutUs'} element={<AboutUs/>}/>
            <Route path={'/enter'} element={<Enter/>}/>
        </Routes>

    </div>
  );
            <Route path={'/packet'} element={<Packet/>}/>
        </Routes>
    </div>
  );



function App() {
    return (
        <div className="App">
        
            <Layout>
                <Routes>
                    <Route path={"/"} element={<Main/>}/>
                    <Route path={'/aboutSchool'} element={<AboutSchool/>}/>
                    <Route path={'/ourCourses'} element={<OurCourses/>}/>
                    <Route path={'/AboutUs'} element={<AboutUs/>}/>
                </Routes>
            </Layout>

        </div>
    );
}
export default App

