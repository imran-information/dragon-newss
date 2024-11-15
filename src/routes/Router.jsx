
import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayouts from '../layouts/HomeLayouts';
import NewsCard from '../components/NewsCard';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts></HomeLayouts>,
        children: [
            {
                path: '',
                element: <Navigate to={"/category/01"}></Navigate>
            },
            {
                path: "/category/:id",
                element: <NewsCard></NewsCard>,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: 'about',
        element: <h1>About</h1>
    },
    {
        path: 'career',
        element: <h1>Career</h1>
    }
])

export default Router;