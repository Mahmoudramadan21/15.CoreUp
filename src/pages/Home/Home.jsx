import React from "react";
import Hero from "../../sections/Hero/Hero";
import Success from "../../sections/Success/Sucess";
import HowItWorks from "../../sections/HowItWorks/HowItWorks";
import Testimonials from "../../sections/Testimonials/Testimonials";
import CTA from "../../sections/CTA/CTA";
import Pricing from "../../sections/Pricing/Pricing";
import Header from "../../sections/Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Success />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTA />
    </>
  );
}
