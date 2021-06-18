import React from "react";
import Patients from './pages/Patients';
import New from './pages/New';
import News from './News';
import Rules from './pages/Rules';

export default [
    {
        path: '/Home',
        component: News
    },
    {
        path: '/Patients',
        component: Patients
    },
    {
        path: '/New',
        component: New
    },
    {
        path: '/Rules',
        component: Rules
    }
];