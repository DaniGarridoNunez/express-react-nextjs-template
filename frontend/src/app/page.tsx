"use client";

import { useExampleStore } from "@/stores/exampleStore";
import { useEffect } from "react";

export default function Home() {
  const bears = useExampleStore((state) => state.bears);

  useEffect(() => {
    async function testApi() {
      try {
        const response = await fetch("http://localhost:5000/api/example");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    testApi();
  }, []);

  return (
    <main className="h-screen p-4">
      <h1 className="text-cyan-900 text-xl font-bold">There are {bears} bears nearby :D</h1>
    </main>
  );
}
