import React from "react";
import styles from "./Pricing.module.scss";
import Plan from "../../components/Plan/Plan";
import PlanButton from "../../components/PlanButton/PlanButton";
import blob from "../../assets/blob.svg";
import spiral from "../../assets/spiral.svg";

// Pricing Plans Section
const Pricing = () => {
  const plans = [
    {
      title: "Basic",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sit risus sociosqu ex.",
      price: "$19",
      period: "/Monthly",
      features: [
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
      ],
      isRecommended: false,
      buttonVariant: "default",
    },
    {
      title: "Standard",
      description:
        "Lorem ipsum dolor sit amet consectetur. Diam rhoncus vel porttitor.",
      price: "$39",
      period: "/Monthly",
      features: [
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
      ],
      isRecommended: true,
      buttonVariant: "primary",
    },
    {
      title: "Premium",
      description:
        "Lorem ipsum dolor sit amet consectetur. Egestas ut et consectetur.",
      price: "$59",
      period: "/Monthly",
      features: [
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
      ],
      isRecommended: false,
      buttonVariant: "default",
    },
  ];

  return (
    <section className={styles.pricing}>
      {/* Background Images */}
      <img
        src={blob}
        alt="Blob background"
        className={styles["pricing__blob"]}
        loading="lazy"
      />
      <img
        src={spiral}
        alt="Spiral background"
        className={styles["pricing__spiral-left"]}
        loading="lazy"
      />
      <img
        src={spiral}
        alt="Spiral background"
        className={styles["pricing__spiral-right"]}
        loading="lazy"
      />

      {/* Pricing Plans */}
      <div className={styles["pricing__plans"]}>
        {plans.map((plan, index) => (
          <Plan
            key={index}
            title={plan.title}
            description={plan.description}
            price={plan.price}
            period={plan.period}
            features={plan.features}
            isRecommended={plan.isRecommended}
            button={
              <PlanButton
                variant={plan.buttonVariant}
                to="/pricing"
                aria-label={`Choose ${plan.title} plan`}
              >
                Choose Plan
              </PlanButton>
            }
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
