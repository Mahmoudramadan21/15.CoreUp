import React, { Suspense } from "react";
import Hero from "../../sections/Hero/Hero";
import Success from "../../sections/Success/Success";
import HowItWorks from "../../sections/HowItWorks/HowItWorks";
import CTA from "../../sections/CTA/CTA";
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";

// Lazy load sections for better performance
const Testimonials = React.lazy(() =>
  import("../../sections/Testimonials/Testimonials")
);
const Pricing = React.lazy(() => import("../../sections/Pricing/Pricing"));

/**
 * Home page component that renders all sections.
 */
export default function Home() {
  return (
    <>
      {/* Header Section */}
      <Header />
      {/* Hero Section */}
      <Hero />
      {/* Success Section */}
      <Success />
      {/* How It Works Section */}
      <HowItWorks />
      {/* Testimonials Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <Testimonials />
      </Suspense>
      {/* Pricing Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <Pricing />
      </Suspense>
      {/* Call to Action Section */}
      <CTA />
      {/* Footer Section */}
      <Footer />
    </>
  );
}
