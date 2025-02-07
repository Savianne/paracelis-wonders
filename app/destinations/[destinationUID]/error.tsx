"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="p-5">
      <h1 className="text-red-500">Something went wrong!</h1>
      <button onClick={reset} className="mt-2 px-4 py-2 bg-blue-500 text-white">
        Retry
      </button>
    </div>
  );
}
