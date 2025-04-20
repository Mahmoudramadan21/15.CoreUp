import React, { Suspense } from "react";
import styles from "./HowItWorks.module.scss";

// Importing icons
import userIcon from "../../assets/icons/user.svg";
import documentIcon from "../../assets/icons/document.svg";
import searchIcon from "../../assets/icons/search.svg";
import envelopeIcon from "../../assets/icons/envelope.svg";

// Importing connectors
import connectorLine from "../../assets/icons/connector-line.svg";
import connectorReversedLine from "../../assets/icons/connector-reversed-line.svg";

// Lazy load the Step component for better performance
const Step = React.lazy(() => import("../../components/Step/Step"));

// Data for the steps (you can fetch this from an API)
const stepsData = [
  {
    icon: userIcon,
    title: "Create account",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sit dictum tortor volutpat.",
    connector: connectorLine,
  },
  {
    icon: documentIcon,
    title: "Complete your profile",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eros risus et tincidunt.",
    connector: connectorReversedLine,
  },
  {
    icon: searchIcon,
    title: "Find an investor",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt praesent nec.",
    connector: connectorLine,
  },
  {
    icon: envelopeIcon,
    title: "Apply now",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet non eget egestas eu.",
  },
];

const HowItWorks = () => {
  return (
    // Section container for "How It Works"
    <section className={styles["how-it-works"]}>
      {/* Section title */}
      <h2 className={styles["how-it-works__title"]}>How CoreUp Work</h2>
      {/* Steps container */}
      <div className={styles["how-it-works__steps"]}>
        {/* Use Suspense for lazy loading */}
        <Suspense fallback={<div>Loading...</div>}>
          {stepsData.map((step) => (
            // Render each step using Step component
            <Step
              key={step.title}
              icon={step.icon}
              title={step.title}
              description={step.description}
              connector={step.connector}
            />
          ))}
        </Suspense>
      </div>
    </section>
  );
};

export default HowItWorks;
