import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/HomePage.css";

const HomePage = () => {
  document.title = "TalentForge - Forging Futures";
  return (
    <>
      {/* Main container */}
      <div className="flex-col m-auto max-h-max">
        {/* Background image -- can be changed... */}
        <div className="bg-hero bg-cover bg-bottom min-h-screen pb-20">
          {/* Text content */}
          <div className="flex justify-center p-2">
            <div className="flex flex-col justify-center items-center my-20">
              <h1 className="text-dark-blue text-5xl md:text-6xl lg:text-6xl inset-y-28 h-fit md:inset-y-44 max-w-full md:max-w-lg lg:max-w-3xl px-10">
                Welcome &#39;user.name&#39; to
              </h1>
              <img src="src/assets/logos/transplogoslogan.png" alt="Talent Forge Logo" className="h-auto w-3/6" />
              <h2 className="text-dark-blue text-3xl lg:text-4xl inset-y-72 md:inset-y-96 h-fit max-w-full md:max-w-lg lg:max-w-3xl px-10">
                This is your home of....explore, interact, opportunities, develop...mission statement/blurb/ intro to
                let users know about the site and all of the benefits they can expect from it...
                <br />
                <br />
                Select one of the links below to get started!
              </h2>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center items-center p-2">
            <div className="flex flex-col">
              <NavLink
                to="/opportunities"
                className="bg-dark-blue hover:bg-dark-blue text-white text-2xl md:text-3xl hover:text-white m-2 py-1 px-5 h-12  min-w-64 max-w-80 border-2 border-grey-500 hover:border-transparent rounded-md flex items-center justify-center"
              >
                Latest Jobs
              </NavLink>
              <NavLink
                to="/profile/:id"
                className="bg-dark-blue hover:bg-dark-blue text-white text-2xl md:text-3xl hover:text-white m-2 py-1 px-5 h-12  min-w-64 max-w-80 border-2 border-grey-500 hover:border-transparent rounded-md flex items-center justify-center"
              >
                My Profile
              </NavLink>
              <NavLink
                to="/user-search"
                className="bg-dark-blue hover:bg-dark-blue text-white text-2xl md:text-3xl hover:text-white m-2 py-1 px-5 h-12  min-w-64 max-w-80 border-2 border-grey-500 hover:border-transparent rounded-md flex items-center justify-center"
              >
                Company Network
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default HomePage;
