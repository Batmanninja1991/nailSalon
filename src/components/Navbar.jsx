import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Full Set",
  });

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const generateMailtoLink = () => {
    const subject = encodeURIComponent("New Booking Request");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}`
    );
    return `mailto:davidshaw68@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    window.location.href = generateMailtoLink();
  };

  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center w-full h-[100px] bg-white border-b border-black px-6">
        {openMenu ? (
          <AiOutlineClose
            size={30}
            onClick={handleClick}
            className="md:hidden"
          />
        ) : (
          <AiOutlineMenu
            size={30}
            onClick={handleClick}
            className="md:hidden"
          />
        )}
        <h1 className="md:hidden text-pink-400 text-[36px] leading-none text-center caveat">
          Mint Nails Studio
        </h1>
        <ul className="hidden md:flex gap-2 md:text-[18px] roboto-slab-thin">
          <a href="#">
            <li onClick={handleCloseMenu} className="rounded-full py-2 px-6">
              Home
            </li>
          </a>
          <a href="#gallery">
            <li onClick={handleCloseMenu} className="rounded-full py-2 px-6">
              Gallery
            </li>
          </a>
          <a href="#prices">
            <li onClick={handleCloseMenu} className="rounded-full py-2 px-6">
              Prices
            </li>
          </a>
          <a href="#contact">
            <li onClick={handleCloseMenu} className="rounded-full py-2 px-6">
              Contact Us
            </li>
          </a>
        </ul>
        <button
          onClick={() => setShowModal(true)}
          className="rounded-2xl text-white bg-black px-6 py-2"
        >
          Book Now
        </button>
      </div>
      <div
        className={`fixed top-[100px] left-0 w-full md:w-1/2 bg-white border-b border-black transition-transform duration-300 z-50 ${
          openMenu ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <ul className="flex flex-col p-6">
          <a href="#">
            <li onClick={handleCloseMenu} className="py-2">
              Home
            </li>
          </a>
          <a href="#gallery">
            <li onClick={handleCloseMenu} className="py-2">
              Gallery
            </li>
          </a>
          <a href="#prices">
            <li onClick={handleCloseMenu} className="py-2">
              Prices
            </li>
          </a>
          <a href="#contact">
            <li onClick={handleCloseMenu} className="py-2">
              Contact Us
            </li>
          </a>
        </ul>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl mb-4">Book an Appointment</h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block mb-1" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block mb-1" htmlFor="service">
                  Type of Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  required
                >
                  <option value="Full Set">Full Set</option>
                  <option value="Fill">Fill</option>
                  <option value="Dipping Full Set">Dipping Full Set</option>
                  <option value="Custom Full Set">Custom Full Set</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
