import { ZapIcon } from "lucide-react";

const RateLimitedUI = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div
        role="alert"
        className="mx-auto flex max-w-3xl items-start gap-4 rounded-lg border border-success/25 bg-success/10 px-5 py-4 shadow-lg shadow-success/5"
      >
        <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-success/20 text-success">
          <ZapIcon className="size-6" />
        </div>

        <div>
          <h3 className="mb-1 font-semibold text-base-content">
            Rate Limit Reached
          </h3>
          <p className="text-sm text-base-content/80">
            You&apos;ve made too many requests in a short period. Please wait a moment.
          </p>
          <p className="mt-1 text-xs text-base-content/60">
            Try again in a few seconds for the best experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUI;