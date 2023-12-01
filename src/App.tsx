import { useState } from "react";
import Step from "./Step";

export default function App() {
  const [step, setStep] = useState(1);

  return (
    <div className="flex min-h-screen items-start bg-purple-600 pt-40">
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
                step > 4 ? "pointer-events-none opacity-50" : ""
              } bg flex items-center justify-center rounded-full bg-purple-500 py-1.5 px-3.5 font-medium tracking-tight text-white hover:bg-purple-600 active:bg-purple-700`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
