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

/*
 * HowItWorks Section to display the steps for using the platform
 */

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
    <section
      className={`${styles["how-it-works"]}`}
      aria-label="How CoreUp Works"
    >
      <div className="container">
        {/* Section Title */}
        <h2 className={styles["how-it-works__title"]}>How CoreUp Work</h2>
        {/* Steps Container */}
        <div className={styles["how-it-works__steps"]}>
          {/* Suspense for lazy loading Step component */}
          <Suspense fallback={<div aria-live="polite">Loading...</div>}>
            {stepsData.map((step) => (
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
      </div>
    </section>
  );
};

export default React.memo(HowItWorks);
