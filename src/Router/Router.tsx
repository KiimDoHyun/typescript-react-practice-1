import { Route, Routes } from "react-router-dom";
import Home from "../Page/Home";
import Page1 from "../Page/Page1";
import Page2 from "../Page/Page2";
import Page2Detail from "../Page/Page2Detail";
import Practice1 from "../Page/Practice1";

const Router = () => {
    return (
        <>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Page1 />} path="/page1" />
                <Route element={<Page2 />} path="/page2" />
                <Route element={<Page2Detail />} path="/page2detail" />
                <Route element={<Practice1 />} path="/Practice1" />
            </Routes>
        </>
    );
};

export default Router;
