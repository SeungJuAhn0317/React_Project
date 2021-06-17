import Users from './pages/Users';
import User from './pages/User';
import Home from './pages/Home';
import Patients from './pages/Patients';

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/patients',
        component: Patients
    },
    {
        path: '/users',
        component: Users
    },
    {
        path: '/users/:id',
        component: User
    }
];