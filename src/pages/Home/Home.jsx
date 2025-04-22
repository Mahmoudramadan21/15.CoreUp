import React from "react";
import Hero from "../../sections/Hero/Hero";
import Success from "../../sections/Success/Sucess";
import HowItWorks from "../../sections/HowItWorks/HowItWorks";
import Testimonials from "../../sections/Testimonials/Testimonials";
import CTA from "../../sections/CTA/CTA";
import Pricing from "../../sections/Pricing/Pricing";
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";

/*
 * Home page component that renders all sections
 */
const Home = () => {
  return (
    <>
      {/* Header Section */}
      <Header />
      {/* Main Content */}
      <main>
        <Hero />
        <Success />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default React.memo(Home);
