import './App.scss';
import './style/style.scss'
import {Route, Routes} from "react-router-dom";
import Main from "./Companents/home/Main";
import AboutSchool from "./Companents/home/AboutSchool";
import AboutUs from "./Companents/home/AboutUs";
import OurCourses from "./Companents/home/OurCourses";
import Layout from "./Companents/Layout/Layout";
import React from "react";
import Profil from "./Companents/profil/Profil";
import Data from "./Companents/profil/data/Data";
import Cart from "./Companents/profil/cart/Cart";
import Subscriptions from "./Companents/profil/subscriptions/Subscriptions";
import Purchases from "./Companents/profil/purchases/Purchases";
import Comment from "./Companents/profil/comment/Comment";
import Notice from "./Companents/profil/notice/Notice";
function App() {
    return (
        <div className="App">
            <Layout>
                <Routes>
                    <Route path={"/"} element={<Main/>}/>
                    <Route path={'/aboutSchool'} element={<AboutSchool/>}/>
                    <Route path={'/ourCourses'} element={<OurCourses/>}/>
                    <Route path={'/AboutUs'} element={<AboutUs/>}/>
                    <Route path={"/profile"} element={<Profil/>} />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
