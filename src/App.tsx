import Counter from "./component/Counter";
import './styles/index.scss'
import React, {Suspense, useContext, useState} from "react";
import {Routes, Route, Link} from 'react-router-dom'
import {MainPageAsync} from "./pages/MainPage/mainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutePage.async";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import ThemeProvider from "./theme/ThemeProvider";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


const App = () => {
  const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames('app',{},[theme])}>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <button onClick={toggleTheme}>theme</button>
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                    <Route path={'/'} element={<MainPageAsync />}/>
                    <Route path={'/about'} element={<AboutPageAsync />}/>
            </Routes>
        </Suspense>
            <Counter/>
        </div>
    );
};

export default App;