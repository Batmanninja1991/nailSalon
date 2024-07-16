import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";

const Pricing = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Full Set",
  });

  const handleModal = () => {
    setShowModal(!showModal);
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
    return `mailto:rylocan2@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    window.location.href = generateMailtoLink();
  };

  const openInstagramApp = (e) => {
    e.preventDefault();
    window.location.href = "instagram://user?username=mintnailzstudio";
  };

  const openInstagramWeb = (e) => {
    e.preventDefault();
    window.open("https://www.instagram.com/mintnailzstudio", "_blank");
  };

  return (
    <div className="bg-violet-300">
      <div
        id="prices"
        className="w-full h-full flex flex-col justify-center items-center pt-16"
      >
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 pb-8">
          Pricing
        </h1>
        <div className="w-11/12 lg:w-8/12 bg-white rounded-3xl shadow-lg p-8">
          <ul className="divide-y divide-gray-200">
            <li className="flex justify-between items-center py-4 text-xl">
              <span className="text-gray-700">
                Nail Art Press Ons
                <br />
                <span className="text-gray-500 text-sm">
                  (includes charms and 3D art)
                </span>
              </span>
              <span className="text-gray-800 font-bold">$70</span>
            </li>
            <li className="flex justify-between items-center py-4 text-xl">
              <span className="text-gray-700">French Tips</span>
              <span className="text-gray-800 font-bold">$55</span>
            </li>
            <li className="flex justify-between items-center py-4 text-xl">
              <span className="text-gray-700">Solid Press Ons</span>
              <span className="text-gray-800 font-bold">$40</span>
            </li>
            <li className="flex justify-between items-center py-4 text-xl">
              <span className="text-gray-700">Sizing Kits</span>
              <span className="text-gray-800 font-bold">$10</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center py-4">
        <button
          onClick={handleModal}
          className="rounded-2xl text-white bg-black px-6 py-2 my-4"
        >
          Book Now
        </button>
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
                    <option value="Full Set">Nail Art Press Ons</option>
                    <option value="Fill">French Tips</option>
                    <option value="Dipping Full Set">Solid Press Ons</option>
                    <option value="Custom Full Set">Sizing Kits</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-500 text-white text-sm md:text-base rounded hover:bg-blue-600"
                >
                  Book Appointment
                </button>
              </form>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={openInstagramApp}
                  className="flex items-center justify-center w-full px-4 py-2 bg-pink-500 text-sm md:text-base text-white rounded hover:bg-pink-600 mr-2"
                >
                  <FaInstagram className="mr-2" /> Instagram Mobile
                </button>
                <button
                  onClick={openInstagramWeb}
                  className="flex items-center justify-center w-full px-4 py-2 bg-gray-500 text-sm md:text-base text-white rounded hover:bg-gray-600 ml-2"
                >
                  <FaInstagram className="mr-2" /> Instagram Web
                </button>
              </div>
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
    </div>
  );
};

export default Pricing;
