"use client";

import Image from "next/image";
import React from "react";

export default function SpaceBackground() {
  return (
    <div className="space-bg pointer-events-none fixed inset-0 -z-10">
      <div className="stars" aria-hidden />

      <div className="space-objects">
        <div className="planet" aria-hidden>
          <Image src="/Images/planet.svg" alt="planet" width={220} height={220} />
        </div>

        <div className="satellite" aria-hidden>
          <Image src="/Images/satellite.svg" alt="satellite" width={120} height={120} />
        </div>

        <div className="rocket" aria-hidden>
          <Image src="/Images/rocket.svg" alt="rocket" width={140} height={140} />
        </div>
      </div>
    </div>
  );
}
