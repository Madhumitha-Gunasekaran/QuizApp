import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import RegisterComponent from "../component/Register/registerComponent";

function RouterApp() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/signin" element={<RegisterComponent />} />
        </Routes>
    )

}
export default RouterApp;
