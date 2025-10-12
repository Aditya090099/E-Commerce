// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header.jsx";
// import Footer from "./components/Footer.jsx";

// import Home from "./pages/Home.jsx";
// import About from "./pages/About.jsx";
// import Courses from "./pages/Courses.jsx";
// import Contact from "./pages/Contact.jsx";
// import DemoForm from "./pages/DemoForm.jsx";

// function App() {
//   return (
//     <>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/courses" element={<Courses />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/demo" element={<DemoForm />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import Home from "./pages/Home.jsx";
// import About from "./pages/About.jsx";
// import Courses from "./pages/Courses.jsx";
// import Contact from "./pages/Contact.jsx";
// import DemoForm from "./pages/DemoForm.jsx";

// function App() {
//   const [activeSection, setActiveSection] = useState("all"); // default show all

//   // Map section keys to components
//   const sections = {
//     home: <Home />,
//     courses: <Courses />,
//     about: <About />,
//     contact: <Contact />,
//     demoform: <DemoForm />,
//   };

//   // Ordered section keys
//   const sectionOrder = ["home", "courses", "about", "contact", "demoform"];

//   return (
//     <div>
//       {/* Header/Navbar */}
//       <header className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-sm z-50 shadow-sm">
//         <nav className="flex items-center justify-between px-10 py-4">
//           {/* Logo / Title (Left side) */}
//           <h1 className="text-2xl font-extrabold text-purple-700">
//             MadhuSangeet
//           </h1>

//           {/* Nav Buttons (Right side) */}
//           <div className="flex gap-10">
//             <button
//               className="text-lg font-bold px-4 py-2 hover:text-purple-600 transition"
//               onClick={() => setActiveSection("home")}
//             >
//               Home
//             </button>
//             <button
//               className="text-lg font-bold px-4 py-2 hover:text-purple-600 transition"
//               onClick={() => setActiveSection("courses")}
//             >
//               Courses
//             </button>
//             <button
//               className="text-lg font-bold px-4 py-2 hover:text-purple-600 transition"
//               onClick={() => setActiveSection("about")}
//             >
//               About
//             </button>
//             <button
//               className="text-lg font-bold px-4 py-2 hover:text-purple-600 transition"
//               onClick={() => setActiveSection("contact")}
//             >
//               Contact
//             </button>
//             <button
//               className="text-lg font-bold px-4 py-2 hover:text-purple-600 transition"
//               onClick={() => setActiveSection("demoform")}
//             >
//               DemoForm
//             </button>
//           </div>
//         </nav>
//       </header>

//       {/* Main content */}
//       <main className="pt-28">
//         {" "}
//         {/* Add top padding so content is not hidden under fixed header */}
//         {activeSection === "home" && <Home />}
//         {activeSection === "courses" && <Courses />}
//         {activeSection === "about" && <About />}
//         {activeSection === "contact" && <Contact />}
//         {activeSection === "demoform" && <DemoForm />}
//       </main>
//     </div>
//   );
// }

// export default App;












import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DemoForm from "./pages/DemoForm";


function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-28"> {/* padding-top so content is below header */}
        <section id="home">
          <Home />
        </section>
        <section id="courses">
          <Courses />
        </section>
        <section id="about">
          <About />
        </section>
        {/* <section id="contact">
          <Contact />
        </section>
        <section id="demoform">
          <DemoForm />
        </section> */}
      </main>
    </div>
  );
}

export default App;
