import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import MainPage from "./MainPage";
import PhotoPage from "./photo/PhotoPage";
import ReviewPage from "./reviews/ReviewPage";
import ContactsPage from "./contacts/ContactsPage";
import CatalogPage from "./catalog/CatalogPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route
                path={"/photos"}
                element={<PhotoPage/>}
            />
            <Route
                path={"/reviews"}
                element={<ReviewPage/>}
            />
            <Route
                path={"/contacts"}
                element={<ContactsPage/>}
            />
            <Route
                path={"/catalog"}
                element={<CatalogPage/>}
            />
            <Route
                path={"/*"}
                element={<MainPage/>}
            />
        </Routes>
    );
};

export default AppRouter;