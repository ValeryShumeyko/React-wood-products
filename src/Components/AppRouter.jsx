import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import { publicRoutes } from "../router";
import Error from "../Pages/Error";

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(route =>
                <Route
                    element={route.component}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            )}
        </Routes>
    );
};

export default AppRouter;