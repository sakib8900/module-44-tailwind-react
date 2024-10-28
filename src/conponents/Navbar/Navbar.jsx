import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/faq', name: 'FAQ' },
    ];

    return (
        <nav className="text-black p-6 bg-yellow-300">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>     
                {open ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>

            <ul className={`md:flex absolute md:static duration-1000 ${open ? 'top-16' : '-top-60'} px-6 bg-yellow-300`}>
                {routes.map(route => <Link key={route.id} route={route} />)}
            </ul>
        </nav>
    );
};

export default Navbar;
