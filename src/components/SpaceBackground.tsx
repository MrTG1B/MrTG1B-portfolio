"use client";

import Image from "next/image";
import React, { useEffect, useState, useMemo } from "react";

export default function SpaceBackground() {
  const [scrollY, setScrollY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Initialize window size only on client side
    if (typeof window !== 'undefined') {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

      const handleScroll = () => {
        setScrollY(window.scrollY);
      };

      const handleMouseMove = (e: MouseEvent) => {
        setMouseX(e.clientX);
        setMouseY(e.clientY);
      };

      const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      window.addEventListener("resize", handleResize, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  // Memoize parallax calculations to avoid unnecessary recalculations
  const planetParallax = useMemo(() => ({
    transform: `translate(${scrollY * 0.15}px, ${scrollY * 0.2}px) translate(${(mouseX - windowSize.width / 2) * 0.02}px, ${(mouseY - windowSize.height / 2) * 0.02}px)`,
  }), [scrollY, mouseX, mouseY, windowSize]);

  const satelliteParallax = useMemo(() => ({
    transform: `translate(${-scrollY * 0.1}px, ${scrollY * 0.25}px) translate(${(mouseX - windowSize.width / 2) * 0.03}px, ${(mouseY - windowSize.height / 2) * 0.03}px)`,
  }), [scrollY, mouseX, mouseY, windowSize]);

  const rocketParallax = useMemo(() => ({
    transform: `translate(${scrollY * 0.08}px, ${-scrollY * 0.3}px) translate(${(mouseX - windowSize.width / 2) * 0.025}px, ${(mouseY - windowSize.height / 2) * 0.025}px)`,
  }), [scrollY, mouseX, mouseY, windowSize]);

  return (
    <>
      {/* Enhanced Space Background */}
      <div className="space-bg-container pointer-events-none fixed inset-0 z-0">
        {/* Animated Starfield */}
        <div className="stars-layer-1" />
        <div className="stars-layer-2" />
        <div className="stars-layer-3" />
        
        {/* Space Objects with Scroll Parallax */}
        <div className="space-objects">
          {/* Planet */}
          <div className="planet-container" style={planetParallax}>
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
          <div className="satellite-container" style={satelliteParallax}>
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
          <div className="rocket-container" style={rocketParallax}>
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
