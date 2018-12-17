import SigninPage from '../pages/SigninPage';
import EditPage from '../pages/EditPage';
import AddPage from '../pages/AddPage';
import AboutPage from '../pages/AboutPage';
import HomePage from '../pages/HomePage';
import SignupPage from '../pages/SignupPage';
import NotFoundPage from '../pages/NotFoundPage';
import MySettingPage from '../pages/MySettingPage';
import Header from '../components/template/Header';

export default [

{
    ...Header,

    routes: [
        {
            ...HomePage,
            path: '/',
            exact: true
        },

        {
            ...SigninPage,
            path: '/signin',
        },

        {
            ...SignupPage,
            path: '/signup'
        },
        
        {
            ...AddPage,
            path: '/contact/add'
        },
        
        {
            ...EditPage,
            path: '/contact/edit/:id'
        },
        
        {
            ...AboutPage,
            path: '/about/:id'
        },
        
        {
            ...MySettingPage,
            path: '/contact/setting'
        },
        
        {
            ...NotFoundPage
        }
    ]
}

];

