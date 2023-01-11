import './App.scss';
import './style/style.scss'
import {Route, Routes} from "react-router-dom";
import Main from "./Companents/home/Main";
import AboutSchool from "./Companents/home/AboutSchool";
import AboutUs from "./Companents/home/AboutUs";
import OurCourses from "./Companents/home/OurCourses";
<<<<<<< HEAD
import Enter from "./style/home/Enter";

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
=======
import Layout from "./Companents/Layout/Layout";
import React from "react";

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
>>>>>>> 1a1c2689aa89497d46a97bf710505437af39633d
}

export default App;
