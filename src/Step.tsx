import { motion } from "framer-motion";
import { SVGProps } from "react";

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: 0.2,
          type: "tween",
          ease: "easeOut",
          duration: 0.3,
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

const Step = ({ step, currentStep }: { step: number; currentStep: number }) => {
  const status =
    currentStep === step
      ? "active"
      : currentStep < step
        ? "inactive"
        : "complete";

  return (
    <motion.div animate={status} className="relative">
      <motion.div
        variants={{
          active: {
            scale: 1,
          },
          complete: {
            scale: 1.25,
          },
        }}
        transition={{
          delay: 0.2,
          duration: 0.5,
          type: "tween",
          ease: "circOut",
        }}
        className="absolute bg-blue-200 inset-0 rounded-full"
      />

      <motion.div
        initial={false}
        variants={{
          inactive: {
            backgroundColor: "var(--white)",
            borderColor: "var(--slate-200)",
            color: "var(--slate-400)",
          },
          complete: {
            backgroundColor: "var(--blue-500)",
            borderColor: "var(--blue-500)",
            color: "var(--white)",
          },
          active: {
            backgroundColor: "var(--white)",
            borderColor: "var(--blue-500)",
            color: "var(--blue-500)",
          },
        }}
        transition={{ duration: 0.2 }}
        className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold"
      >
        <div className="flex items-center justify-center">
          {status === "complete" ? (
            <CheckIcon className="h-6 w-6 text-white" />
          ) : (
            <span>{step}</span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Step;
