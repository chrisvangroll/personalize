"use client";
import ProductPage from "./(routes)/product/page";
import { useEffect } from "react";
import { engage } from "./(routes)/api/engage";
import sendViewEvent from "./_libs/personalize/sendViewEvent";
import customBtnClick from "./_libs/personalize/customBtnClick";

export default function Home() {

  useEffect(()=>{
    if(engage && typeof window != "undefined"){
      sendViewEvent(engage, window.location.pathname)
    }
  },[])

  const handleClick = ()=>{
    if(engage && typeof window != "undefined"){
      customBtnClick(engage, window.location.pathname)
    }
  }

  return (
    <div className="w-full max-w-6xl m-auto">
      <button onClick={handleClick}>Custom click</button>
      <ProductPage />
    </div>
  );
}