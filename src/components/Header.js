import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigasi from "./Navigasi";
import Home from './Home';
import Detaildune from './Detaildune';
import Detailinfinite from "./Detailinfinite";
import Detaileverything from "./Detaileverything";
import Detailantman from "./Detailantman";
import './style.css';
import Detailavenger from "./Detailavenger";
import Detailbatman from "./Detailbatman";
const Header = () => {
    return (

        <div>
            <Navigasi />
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="Dune" element={<Detaildune />} />
                    <Route path="Infinite" element={<Detailinfinite />} />
                    <Route path="Everything" element={<Detaileverything />} />
                    <Route path="Antman" element={<Detailantman />} />
                    <Route path="Avenger" element={<Detailavenger />} />
                    <Route path="Batman" element={<Detailbatman />} />

                </Routes>
            </BrowserRouter>

        </div >

    )
}

export default Header;