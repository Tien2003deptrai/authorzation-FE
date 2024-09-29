import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {
    AdminRoutes,
    MedicalCenterRoutes,
    SalesAgentRoutes,
    PetDealerRoutes,
    CustomerRoutes
} from './protectRoute';
import AdminLayout from '../protectLayout/AdminLayout';
import MedicalCenterLayout from '../protectLayout/MedicalCenterLayout';
import SalesAgentLayout from '../protectLayout/SalesAgentLayout';
import PetDealerLayout from '../protectLayout/PetDeadlerLayout';
import CustomerLayout from '../protectLayout/CustomerLayout';
import Login from '../components/Login';

const RouterApp = () => {
    return (
        <Router>
            <Routes>

                <Route path='/login' element={<Login />} />

                <Route path='/admin'
                    element={<AdminLayout />}
                >
                    {AdminRoutes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={route.component}
                        />
                    ))}
                </Route>

                <Route
                    path='/medical-center'
                    element={<MedicalCenterLayout />}
                >
                    {MedicalCenterRoutes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={route.component}
                        />
                    ))}
                </Route>

                <Route
                    path='/sales-agent'
                    element={<SalesAgentLayout />}
                >
                    {SalesAgentRoutes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={route.component}
                        />
                    ))}
                </Route>

                <Route
                    path='/pet-dealer'
                    element={<PetDealerLayout />}
                >
                    {PetDealerRoutes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={route.component}
                        />
                    ))}
                </Route>

                <Route
                    path='/'
                    element={<CustomerLayout />}
                >
                    {CustomerRoutes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={route.component}
                        />
                    ))}
                </Route>
            </Routes>
        </Router>
    );
};

export default RouterApp;
