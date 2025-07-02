import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./NavBar";

// sidebar in here

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="hidden md:flex">
        <NavBar />
      </div>
      <div className="flex-grow"> {children} </div>
      <Footer />
    </div>
  );
}

export default Layout;
