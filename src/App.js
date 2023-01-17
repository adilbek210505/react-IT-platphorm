import './App.scss';
import './style/style.scss'
import {Route, Routes} from "react-router-dom";
import Main from "./Companents/home/Main";
import AboutSchool from "./Companents/home/AboutSchool";
import AboutUs from "./Companents/home/AboutUs";
import OurCourses from "./Companents/home/OurCourses";
import React from "react";
import Profil from "./Companents/profil/Profil";
import Packet from "./Companents/home/Packet";
import Follow from "./Companents/follow/Follow";
import AllArticle from "./Companents/article/AllArticle/AllArticle";
import DetailArticle from "./Companents/article/detailArticle/DetailArticle";
import AllMasterClasses from "./Companents/masterClasses/allMasterClasses/AllMasterClasses";
import DetailMasterClasses from "./Companents/masterClasses/detailMasterClasses/DetailMasterClasses";
import AllCourses from "./Companents/courses/AllCourses/AllCourses";
import DetailCoureses from "./Companents/courses/detailCourses/detailCoureses";
import Courses from "./Companents/courses/Courses/Courses";
import AfterArticle from "./Companents/article/afterArticle/AfterArticle";
import AfterMaster from "./Companents/masterClasses/afterMaster/AfterMaster";
import AfterCourses from "./Companents/courses/afterCourses/AfterCourses";
import Notice from "./Companents/profil/notice/Notice";



function App() {
    return (
        <div className="App">

                <Routes>
                    <Route path={"/"} element={<Main/>}/>
                    <Route path={'/aboutSchool'} element={<AboutSchool/>}/>
                    <Route path={'/ourCourses'} element={<OurCourses/>}/>
                    <Route path={'/AboutUs'} element={<AboutUs/>}/>
                    <Route path={'/packet'} element={<Packet/>}/>
                    <Route path={'/follow'} element={<Follow/>}/>
                    <Route path={"/profile"} element={<Profil/>} />
                    <Route path={'/allArticle'} element={<AllArticle/>}/>
                    <Route path={'/detailArticle'} element={<DetailArticle/>}/>
                    <Route path={'/allMasterClasses'} element={<AllMasterClasses/>}/>
                    <Route path={'/detailMasterClasses'} element={<DetailMasterClasses/>}/>
                    <Route path={'/allCourses'} element={<AllCourses/>}/>
                    <Route path={'/detailCourses'} element={<DetailCoureses/>}/>
                    <Route path={'/courses'} element={<Courses/>}/>
                    <Route path={'/afterArticle'} element={<AfterArticle/>}/>
                    <Route path={'/afterMaster'} element={<AfterMaster/>}/>
                    <Route path={'/afterCourses'} element={<AfterCourses/>}/>
                    <Route path={'/notice'} element={<Notice/>}/>
                </Routes>

            </div>
        )
}

export default App