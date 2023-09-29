import { HomePage } from "../pages/Home/HomePage";
import { NotFoundPage } from "../pages/NotFound/NotFoundPage";
import { SignUpPage } from "../pages/SignUp/SignUpPage";


const routes = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/SignUp',
        element: <SignUpPage />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    }
];

export default routes;
