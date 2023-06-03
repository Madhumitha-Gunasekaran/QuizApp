import React from "react";
import { Route, Routes } from "react-router-dom";
import RegisterComponent from "../component/Register/registerComponent";

function RouterApp() {
    return (
        <Routes>
            <Route path="/signin" element={<RegisterComponent />} />
        </Routes>
    )

}
export default RouterApp;
