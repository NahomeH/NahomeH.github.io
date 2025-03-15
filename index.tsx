"use client";

import React, { useState } from "react";

type Section = "about" | "experience" | "projects" | "contact";

export default function ResumeWebsite() {
  const [activeSection, setActiveSection] = useState<Section>("about");

  const scrollToSection = (section: Section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Navbar */}
      <nav className="bg-white py-4 px-6 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <a
            href="#"
            className="text-gray-800 text-xl font-bold"
            onClick={() => scrollToSection("about")}
          >
            My Name
          </a>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#about"
                className={`text-gray-700 hover:text-blue-600 ${
                  activeSection === "about" ? "text-blue-600" : ""
                }`}
                onClick={() => scrollToSection("about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={`text-gray-700 hover:text-blue-600 ${
                  activeSection === "experience" ? "text-blue-600" : ""
                }`}
                onClick={() => scrollToSection("experience")}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`text-gray-700 hover:text-blue-600 ${
                  activeSection === "projects" ? "text-blue-600" : ""
                }`}
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`text-gray-700 hover:text-blue-600 ${
                  activeSection === "contact" ? "text-blue-600" : ""
                }`}
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto mt-8 px-6">
        {/* About Section */}
        <section id="about" className="py-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48 mx-auto" />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vitae diam euismod, aliquam libero id, feugiat metus. Nullam
                eget imperdiet lorem. Proin elementum, odio et hendrerit
                scelerisque, lorem elit iaculis arcu, at consectetur nulla
                sapien eu magna.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Experience Item 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Software Engineer
              </h3>
              <p className="text-gray-600 text-sm">Acme Corp</p>
              <p className="text-gray-500 text-sm">2022 - Present</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Developed and maintained web applications.</li>
                <li>Collaborated with cross-functional teams.</li>
                <li>Implemented new features and improved performance.</li>
              </ul>
            </div>
            {/* Experience Item 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Frontend Developer
              </h3>
              <p className="text-gray-600 text-sm">Beta Solutions</p>
              <p className="text-gray-500 text-sm">2020 - 2022</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Built user interfaces with React and Redux.</li>
                <li>Optimized website performance for mobile devices.</li>
                <li>Worked closely with designers and backend developers.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Item 1 */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-40 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">
                Project One
              </h3>
              <p className="text-gray-700">
                A brief description of the project and its purpose.
              </p>
            </div>
            {/* Project Item 2 */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-40 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">
                Project Two
              </h3>
              <p className="text-gray-700">
                A brief description of the project and its purpose.
              </p>
            </div>
            {/* Project Item 3 */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-40 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">
                Project Three
              </h3>
              <p className="text-gray-700">
                A brief description of the project and its purpose.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 py-6 mt-12">
        <div className="container mx-auto text-center text-gray-600">
          &copy; {new Date().getFullYear()} My Name. All rights reserved.
        </div>
      </footer>
    </div>
  );
}