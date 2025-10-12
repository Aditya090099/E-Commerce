import React from "react";

function Footer() {
  return (
    <footer className="bg-purple-700 text-white p-4 text-center mt-8">
      &copy; {new Date().getFullYear()} MadhuSangeet. All rights reserved.
    </footer>
  );
}

export default Footer;
