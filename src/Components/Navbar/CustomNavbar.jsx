import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FaCaretDown} from "react-icons/fa";


function CustomNavbar() {

  const menuItems = [
    { name: "Recipes", dropdown: ["Health", "Diet-Plan", "Ketogenic"] },
    { name: "Best for", dropdown: ["Pragnancy ", "Lectation ", "Mensturation"] },
    { name: "Cooking Technique", dropdown: ["Shallow", "Fruits", "Meat"] },
    { name: "Cooking Duration", dropdown: ["Under 10 mins", "30 mins", "1 hour+"] },
    { name: "Taste Profile", dropdown: ["Spicy", "Sweet", "Sour"] },
    { name: "Age and Lifestyle", dropdown: ["Kids", "Adults", "Elderly"] },
  ];
  return (
    <>
    <Navbar expand="lg" className="bg-blue-900 text-white ">
      <Container className='flex flex-row '>
        {/* Logo with bold and yellow color */}
        <Navbar.Brand href="#home" className="font-bold text-3xl text-white mt-6 mb-6 ml-4">
          Foodpedia
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-white" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Flex and horizontal nav items */}
          <nav className=" ml-16 flex  items-center mt-8 mb-6 text-[15px]">
      {/* Left-side navigation */}
      <ul className="flex flex-row items-center gap-12">
        {menuItems.map((item, index) => (
          <li key={index} className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-2">
              {item.name}
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </a>
            {/* Dropdown */}
            <div className="absolute left-0 right-1 z-50 hidden w-[180px] bg-blue-900 shadow-md p-2 text-white font-bold rounded-md group-hover:block mt-2">
              <ul className="space-y-2">
                {item.dropdown.map((dropItem, i) => (
                  <li key={i} className="p-2 hover:bg-red-600 hover:text-white rounded-md">
                    <a href="#">{dropItem}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>

      {/* Right-side navigation */}
      <ul className="ml-14 flex flex-row items-center gap-10">
        <li>
          <a href="#" className="hover:underline">Watchlist</a>
        </li>
        <li>
          <a href="#" className="hover:underline">Sign In</a>
        </li>
      </ul>
    </nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default CustomNavbar;