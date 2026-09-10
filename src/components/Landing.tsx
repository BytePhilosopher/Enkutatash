interface LandingProps {
  onStart: () => void;
}

export default function Landing({ onStart }: LandingProps) {
  return (
    <div className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center gap-7 px-6 py-16 text-center">
      <div className="animate-bounce-soft text-6xl" aria-hidden="true">
        🌼
      </div>

      <div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
          Enkutatash · 2019 E.C.
        </p>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight text-[color:var(--enku-ink)] sm:text-4xl">
          New Year, New Me… Again?
        </h1>
      </div>

      <p className="max-w-sm text-base leading-relaxed text-black/70 dark:text-white/70">
        Every Enkutatash we all promise it&apos;s different this time. It&apos;s
        not. Answer 6 painfully honest questions and find out which 2019
        resolution personality you actually are.
      </p>

      <button
        type="button"
        onClick={onStart}
        className="min-h-[3.5rem] w-full max-w-xs rounded-2xl bg-[color:var(--enku-ink)] px-8 py-4 text-lg font-bold text-white shadow-lg transition active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
      >
        Start the Quiz 🌼
      </button>

      <p className="text-xs text-black/40 dark:text-white/40">
        Takes about 45 seconds. Zero judgment. (Some judgment.)
      </p>
    </div>
  );
}
