"use client";
import ProductPage from "./(routes)/product/page";
import { useEffect } from "react";
import { engage } from "./pages/api/engage";
import sendViewEvent from "./_libs/personalize/sendViewEvent";
import customBtnClick from "./_libs/personalize/customBtnClick";
import { init } from "@sitecore/engage";
declare global {
  interface Window {
    Engage: any; // Use a more specific type according to what Engage provides, if known
  }
}

export default function Home() {
  // const loadEngage = async () => {
  //   // Load Engage API
  //   // ...

  //   // Send VIEW events
  //   // ...

  //   // For testing and debugging purposes only

  //   const engageSettings = {
  //     // clientKey: "aqfpz1cevdy6oolipfwsrjh9uldh9nua",
  //       clientKey: "ngsuatxhbmeuas37zfn79tsaf8etr8ro",
  //     targetURL: "https://api-engage-us.sitecorecloud.io",
  //     pointOfSale: "aq",
  //     cookieExpiryDays: 365,
  //     forceServerCookieMode: true,
  //     includeUTMParameters: true,
  //     webPersonalization: true,
  //   };

  //   const engage = await init(engageSettings);
  //   console.log("Copy-paste the following line into Sitecore CDP > Guests > Search field:");
  //   console.log("bid:", engage.getBrowserId());
  // };

  // useEffect(() => {
  //   loadEngage();
  // }, []);



  useEffect(() => {
    if (engage !== undefined) {
      sendViewEvent(engage, window.location.pathname);
    }
  }, [engage]);

  
  // const sendPageViewEvent = async () => {
  //   if (engage) {
  //     const response = await engage.pageView({
  //       channel: "<channel_PLACEHOLDER>",
  //       currency: "<currency_PLACEHOLDER>",
  //     });
  //     // For testing and debugging purposes only
  //     if (response) {
  //       console.log(
  //         "Copy-paste the following line into Sitecore CDP > Guests > Search field:"
  //       );
  //       console.log("bid:", engage.getBrowserId());
  //     }
  //   }
  // };

  // useEffect(()=>{
  //   if(engage && typeof window != "undefined"){
  //     console.log(engage.getBrowserId(), "browser id")
  //     sendViewEvent(engage, window.location.pathname)
  //   }
  // },[engage])

  // const handleClick = ()=>{
  //   if(engage && typeof window != "undefined"){
  //     customBtnClick(engage, window.location.pathname)
  //   }
  // }

  return (
    <div className="w-full max-w-6xl m-auto">
      <ProductPage />
    </div>
  );
}
