"use client";

import dynamic from "next/dynamic";

const MapInner = dynamic(() => import("./MapInner"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        height: 500,
        width: "100%",
        borderRadius: 12,
        backgroundColor: "#FAF7F2",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#6B7280",
        fontSize: 14,
      }}
    >
      Loading map…
    </div>
  ),
});

export function ServiceAreaMap() {
  return <MapInner />;
}
