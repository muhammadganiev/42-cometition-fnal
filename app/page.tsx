"use client";
import FeaturesSectionDemo from "@/components/features-section-demo-3";
import { ThreeDCardDemo } from "@/components/ui/tree-card";
import { WavyBackground } from "@/components/ui/wavy-background";
import Spline from "@splinetool/react-spline";
import React from "react";

const Home = () => {
  return (
    <div className="relative w-screen min-h-screen bg-black">
      <section className="relative w-full h-screen">
        {/* Spline as background */}
        <Spline
          className="fixed inset-0 z-0 w-full h-full"
          scene="https://draft.spline.design/vyg44pKP1MVpS3-H/scene.splinecode"
        />
      </section>
      <section className="relative w-full min-h-screen bg-gray-900 flex items-center justify-center">
        <WavyBackground
          className="max-w-4xl mx-auto"
          colors={["#06d6d6", "#ff7c2d", "#a259f7", "#ff3b30"]}
        >
          <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
            Together, We&apos;re Unstoppable. Join the Coalitions Today.
          </p>
          <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
            Leverage the power of canvas to create a beautiful hero section
          </p>
        </WavyBackground>
      </section>
      {/* Test Section */}
      <section className="relative w-full min-h-screen bg-black flex items-center justify-center">
        <FeaturesSectionDemo />
      </section>
      <section className="relative w-full min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-wrap justify-center gap-8 w-full max-w-screen-lg">
          <ThreeDCardDemo
            title="Oryx"
            description="Fast and agile, the Oryx leads the charge."
            image="/1.png"
          />
          <ThreeDCardDemo
            title="Wolf"
            description="The Wolf is strong and loyal to the pack."
            image="/3.png"
          />
          <ThreeDCardDemo
            title="Leopard"
            description="Stealthy and powerful, the Leopard strikes unseen."
            image="/4.png"
          />
          <ThreeDCardDemo
            title="Falcon"
            description="The Falcon soars above, always watching."
            image="/5.png"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
