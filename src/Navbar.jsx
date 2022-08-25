// import react from 'react'
import NavItem from './components/NavItem';

function Navbar() {
    return (
        <nav className="flex justify-between py-3 px-10 shadow-md">
            <h3 className="font-bold">GobeJoint</h3>
            <ul className="flex gap-5">
                <NavItem menu="Home" />
                <NavItem menu="Products" />
                <NavItem menu="Services" />
                <NavItem menu="About" />
                <NavItem menu="Contact" />
            </ul>
        </nav>
    );
}

export default Navbar;