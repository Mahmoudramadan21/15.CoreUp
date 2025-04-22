import React, { Suspense } from "react";
import styles from "./Pricing.module.scss";
import Plan from "../../components/Plan/Plan";
import PlanButton from "../../components/PlanButton/PlanButton";
import blob from "../../assets/blob.svg";

/**
 * Pricing section displaying available plans.
 */
const plansData = [
  {
    title: "Basic",
    description: "For startups just getting started.",
    price: "$0",
    period: "/mo",
    features: [
      "Access to CoreUp Community",
      "Basic Analytics",
      "1 Project Listing",
      "Email Support",
    ],
    button: (
      <PlanButton to="/signup" ariaLabel="Get started with Basic plan">
        Get Started
      </PlanButton>
    ),
  },
  {
    title: "Standard",
    description: "For growing startups needing more tools.",
    price: "$49",
    period: "/mo",
    features: [
      "Access to CoreUp Community",
      "Advanced Analytics",
      "5 Project Listings",
      "Priority Email Support",
      "Profile Highlight",
    ],
    isRecommended: true,
    button: (
      <PlanButton
        to="/signup"
        variant="primary"
        ariaLabel="Get started with Standard plan"
      >
        Get Started
      </PlanButton>
    ),
  },
  {
    title: "Premium",
    description: "For established startups aiming to scale.",
    price: "$99",
    period: "/mo",
    features: [
      "Access to CoreUp Community",
      "Advanced Analytics",
      "Unlimited Project Listings",
      "24/7 Support",
      "Profile Highlight",
      "Investor Matchmaking",
    ],
    button: (
      <PlanButton
        to="/signup"
        variant="primary"
        ariaLabel="Get started with Premium plan"
      >
        Get Started
      </PlanButton>
    ),
  },
];

const Pricing = () => {
  return (
    <section
      className={`${styles.pricing} container`}
      aria-label="Pricing plans section"
    >
      {/* Blob Background */}
      <img
        src={blob}
        alt="Decorative background blob"
        className={styles.pricing__blob}
        loading="lazy"
        width="1200"
        height="600"
      />
      {/* Section Title */}
      <h2 className={styles.pricing__title}>Pricing Plans</h2>
      {/* Plans Container */}
      <div className={styles.pricing__plans} role="list">
        <Suspense fallback={<div>Loading...</div>}>
          {plansData.map((plan) => (
            <Plan
              key={plan.title}
              title={plan.title}
              description={plan.description}
              price={plan.price}
              period={plan.period}
              features={plan.features}
              isRecommended={plan.isRecommended}
              button={plan.button}
            />
          ))}
        </Suspense>
      </div>
    </section>
  );
};

export default Pricing;
