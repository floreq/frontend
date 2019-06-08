import React from "react";
import Navbar from "./../components/Navbar";
import Workplace from "./../components/Workplace";
import Footer from "./../components/Footer";

function Wrapper() {
  return (
    <React.Fragment>
      <Navbar />
      <Workplace />
      <Footer />
    </React.Fragment>
  );
}

export default Wrapper;
