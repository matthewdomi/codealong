import React from 'react';
import NavItem from './NavItem';


const links = [
   { label:"Home", to:"/"},
   { label:"Contact", to:"/contact"},
   { label:"About", to:"/about"},
   { label:"Product", to:"/product"},
   { label:"Task Manager", to:"/task-manager"},
    
];
function Navbar() {
    return (
        <div className="shadow-md py-5">
    <nav className="flex justify-between max-w-7xl mx-auto">
        <h3 className='font-bold'>BankuJoint</h3>
        <ul className='flex gap-5'>
           {links.map((link, index) => (
            <NavItem key={index} label={link.label} to={ link.to } />
           ))}
        </ul>
    </nav>
    </div>
    );
    
  }
  
  export default Navbar;




