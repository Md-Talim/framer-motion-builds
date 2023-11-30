import { SVGProps, useState } from 'react';
import { motion } from 'framer-motion';
import { JSX } from 'react/jsx-runtime';

export default function App() {
  const [step, setStep] = useState(1);

  return (
    <div className="flex min-h-screen items-start bg-gradient-to-br from-slate-700 to-slate-900 pt-40">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white">
        <div className="flex justify-between rounded p-8">
          <Step step={1} currentStep={step} />
          <Step step={2} currentStep={step} />
          <Step step={3} currentStep={step} />
          <Step step={4} currentStep={step} />
        </div>
        <div className="px-8 pb-8">
          <div>
            <div className="mt-2 h-6 w-40 rounded bg-slate-100" />
            <div className="mt-4 space-y-2">
              <div className="h-4 w-5/6 rounded bg-slate-100" />
              <div className="h-4 rounded bg-slate-100" />
              <div className="h-4 w-4/6 rounded bg-slate-100" />
            </div>
          </div>

          <div className="mt-10 flex justify-between">
            <button
              onClick={() => setStep(step < 2 ? step : step - 1)}
              className="rounded px-2 py-1 text-slate-400 hover:text-slate-700"
            >
              Previous
            </button>
            <button
              onClick={() => setStep(step > 4 ? step : step + 1)}
              className={`${
                step > 4 ? 'pointer-events-none opacity-50' : ''
              } bg flex items-center justify-center rounded-full bg-blue-500 py-1.5 px-3.5 font-medium tracking-tight text-white hover:bg-blue-600 active:bg-blue-700`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step({ step, currentStep }: { step: number; currentStep: number }) {
  const status =
    currentStep === step
      ? 'active'
      : currentStep < step
        ? 'inactive'
        : 'complete';

  return (
    <motion.div
      initial={false}
      animate={status}
      variants={{
        inactive: {
          backgroundColor: 'var(--white)',
          borderColor: 'var(--slate-200)',
          color: 'var(--slate-400)',
        },
        complete: {
          backgroundColor: 'var(--blue-500)',
          borderColor: 'var(--blue-500)',
          color: 'var(--white)',
        },
        active: {
          backgroundColor: 'var(--white)',
          borderColor: 'var(--blue-500)',
          color: 'var(--blue-500)',
        },
      }}
      className="flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold"
    >
      <div className="flex items-center justify-center">
        {status === 'complete' ? (
          <CheckIcon className="h-6 w-6 text-white" />
        ) : (
          <span>{step}</span>
        )}
      </div>
    </motion.div>
  );
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
