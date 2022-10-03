import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Gallery from "../Pages/Gallery";
import Prices from "../Pages/Prices";
import Error from "../Pages/Error";
import Home from "../Pages/Home";


export const publicRoutes = [
    { path: '/', component: Home, exact: true },
    { path: '/error', component: Error, exact: true },
    { path: '/about', component: About, exact: true },
    { path: '/contact', component: Contact, exact: true },
    { path: '/gallery', component: Gallery, exact: true },
    { path: '/prices', component: Prices, exact: true },
]