"use client"; // Error boundaries must be Client Components

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container mx-auto py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
      <p className="text-xl mb-8">{error.message}</p>
      <button
        onClick={() => reset()}
        className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-full transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
