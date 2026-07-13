import { Link } from "react-router";
import { FaHouse, FaTriangleExclamation } from "react-icons/fa6";

function ErrorPage() {
  return (
    <div className="relative flex min-h-[70vh] items-center justify-center overflow-hidden !px-5 !py-16 sm:!py-20">

      {/* subtle float animation for the icon, self-contained */}
      <style>{`
        @keyframes nf-float {
          0%, 100% { transform: translateY(0) rotate(-6deg); }
          50% { transform: translateY(-12px) rotate(6deg); }
        }
        @keyframes nf-fadeUp {
          from { transform: translateY(24px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>

      {/* decorative background blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-100/50 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 hidden h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-100 sm:block" />

      <div className="relative z-[2] mx-auto flex max-w-lg flex-col items-center text-center">

        <div
          className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-orange-500 opacity-0 sm:h-20 sm:w-20"
          style={{ animation: "nf-fadeUp 0.6s 0.05s cubic-bezier(0.22,1,0.36,1) both, nf-float 3.2s 0.8s ease-in-out infinite" }}
        >
          <FaTriangleExclamation className="text-2xl sm:text-3xl" />
        </div>

        <h1 className="!mt-6 text-7xl font-black leading-none tracking-tight text-orange-500 opacity-0 [animation:nf-fadeUp_0.6s_0.15s_cubic-bezier(0.22,1,0.36,1)_both] sm:text-8xl lg:text-9xl">
          404
        </h1>

        <h2 className="!mt-4 text-2xl font-black tracking-tight text-slate-900 opacity-0 [animation:nf-fadeUp_0.6s_0.3s_cubic-bezier(0.22,1,0.36,1)_both] sm:text-3xl">
          Oops! Page Not Found.
        </h2>

        <p className="!mt-3 max-w-sm text-sm leading-6 text-slate-500 opacity-0 [animation:nf-fadeUp_0.6s_0.42s_cubic-bezier(0.22,1,0.36,1)_both] sm:text-base">
          The page you're looking for doesn't exist, may have been moved, or the link might be broken.
        </p>

        <Link
          to="/"
          className="!mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 !px-8 !py-3.5 text-sm font-semibold text-white opacity-0 shadow-lg shadow-orange-200 transition [animation:nf-fadeUp_0.6s_0.55s_cubic-bezier(0.22,1,0.36,1)_both] hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl active:translate-y-0"
        >
          <FaHouse className="text-sm" />
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;