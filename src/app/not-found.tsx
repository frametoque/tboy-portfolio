import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl md:text-9xl font-bold tracking-tight text-white mb-4">
        404<span className="text-red-500">.</span>
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-200">
        Page Not Found
      </h2>
      <p className="text-gray-400 max-w-md mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="butn butn-md butn-bord radius-30 px-8 py-3 text-white border border-white/20 hover:border-red-500 transition-colors"
      >
        <span className="text">Back to Home</span>
      </Link>
    </div>
  );
}
