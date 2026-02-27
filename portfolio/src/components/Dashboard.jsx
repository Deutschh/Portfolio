import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import LightPillars from "./LightPillars"; // <--- Importe o novo componente
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <div className="w-full h-screen">
      {" "}
      <LightPillars
        topColor="#5227FF"
        bottomColor="#FF9FFC"
        intensity={0.8}
        rotationSpeed={0.5}
        glowAmount={0.0025}
        pillarWidth={8}
        pillarHeight={0.6}
        noiseIntensity={0.5}
        pillarRotation={100}
        interactive={false}
        mixBlendMode="screen"
        quality="high"
      />
    <Sidebar />
    </div>
  );
}
