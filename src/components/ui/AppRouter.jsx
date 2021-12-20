import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../../pages/About";
import Posts from "../../pages/Posts";
import Contact from "../../pages/Contact";
import Error from "../../pages/Error";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/about'>
                <About/>
            </Route>
            <Route path='/contact'>
                <Contact/>
            </Route>

            <Route path='*'>
                <Error/>
            </Route>
        </Routes>
    );
};

export default AppRouter;
