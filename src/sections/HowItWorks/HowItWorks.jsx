import React, { Suspense } from "react";
import styles from "./HowItWorks.module.scss";
import userIcon from "../../assets/icons/user.svg";
import documentIcon from "../../assets/icons/document.svg";
import searchIcon from "../../assets/icons/search.svg";
import envelopeIcon from "../../assets/icons/envelope.svg";
import connectorLine from "../../assets/icons/connector-line.svg";
import connectorReversedLine from "../../assets/icons/connector-reversed-line.svg";

const Step = React.lazy(() => import("../../components/Step/Step"));

/**
 * HowItWorks section explaining the process.
 */
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
    <section className={styles["how-it-works"]}>
      {/* Section Title */}
      <h2 className={styles["how-it-works__title"]}>How CoreUp Work</h2>
      {/* Steps Container */}
      <div className={styles["how-it-works__steps"]} role="list">
        <Suspense fallback={<div>Loading...</div>}>
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
    </section>
  );
};

export default HowItWorks;
