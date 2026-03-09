"use client";

import React, { Component, useState, useEffect, useRef } from "react";
import { Player } from "@remotion/player";
import { HomeValuesChart } from "@/remotion/HomeValuesChart";

class PlayerErrorBoundary extends Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

function StaticFallback() {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "16/9",
        borderRadius: 12,
        backgroundColor: "#2D4A3E",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontFamily: "Cormorant Garamond, serif",
        fontSize: 24,
        fontWeight: 600,
      }}
    >
      Portland Metro Home Values
    </div>
  );
}

export function RemotionChartPlayer() {
  const [ready, setReady] = useState(false);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const timer = setTimeout(() => {
      try {
        playerRef.current?.play();
      } catch {}
    }, 100);
    return () => clearTimeout(timer);
  }, [ready]);

  if (!ready) return <StaticFallback />;

  return (
    <PlayerErrorBoundary fallback={<StaticFallback />}>
      <div
        style={{
          width: "100%",
          borderRadius: 12,
          overflow: "hidden",
          aspectRatio: "16/9",
        }}
      >
        <Player
          ref={playerRef}
          component={HomeValuesChart as unknown as React.FC<Record<string, unknown>>}
          inputProps={{ title: "Portland Metro Home Values" }}
          durationInFrames={120}
          fps={30}
          compositionWidth={1920}
          compositionHeight={1080}
          style={{ width: "100%", height: "100%" }}
          autoPlay
          loop
        />
      </div>
    </PlayerErrorBoundary>
  );
}
