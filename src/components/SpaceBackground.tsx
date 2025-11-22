"use client";

import Image from "next/image";
import React from "react";

export default function SpaceBackground() {
  return (
    <>
      {/* Enhanced Space Background */}
      <div className="space-bg-container pointer-events-none fixed inset-0 z-0">
        {/* Animated Starfield */}
        <div className="stars-layer-1" />
        <div className="stars-layer-2" />
        <div className="stars-layer-3" />
        
        {/* Space Objects */}
        <div className="space-objects">
          {/* Planet */}
          <div className="planet-container">
            <div className="planet-glow" />
            <Image 
              src="/Images/planet.svg" 
              alt="planet" 
              width={300} 
              height={300} 
              priority 
              className="planet-image"
            />
          </div>

          {/* Satellite */}
          <div className="satellite-container">
            <div className="satellite-glow" />
            <Image 
              src="/Images/satellite.svg" 
              alt="satellite" 
              width={150} 
              height={150} 
              priority 
              className="satellite-image"
            />
          </div>

          {/* Rocket */}
          <div className="rocket-container">
            <div className="rocket-glow" />
            <Image 
              src="/Images/rocket.svg" 
              alt="rocket" 
              width={180} 
              height={180} 
              priority 
              className="rocket-image"
            />
          </div>

          {/* Additional floating elements */}
          <div className="floating-stars">
            {Array.from({ length: 50 }).map((_, i) => (
              <div 
                key={i} 
                className="floating-star" 
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
