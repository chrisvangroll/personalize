"use client";
import ProductPage from "./(routes)/product/page";
import { useEffect } from "react";
import { engage } from "./pages/api/engage";
import sendViewEvent from "./_libs/personalize/sendViewEvent";
declare global {
  interface Window {
    Engage: any; // Use a more specific type according to what Engage provides, if known
  }
}

export default function Home() {

  useEffect(() => {
    if (engage !== undefined) {
      sendViewEvent(engage, window.location.pathname);
    }
  }, [engage]);

  return (
    <main id="product-page" className="w-full max-w-6xl m-auto">
      <ProductPage />
    </main>
  );
}
