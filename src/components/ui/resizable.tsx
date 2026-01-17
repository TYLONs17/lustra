"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

/* Local GripVertical icon */
const GripVertical = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="5" cy="5" r="2" />
    <circle cx="5" cy="12" r="2" />
    <circle cx="5" cy="19" r="2" />
  </svg>
);

/* ---------------- Panel Group ---------------- */

type Direction = "horizontal" | "vertical";

interface PanelGroupProps {
  className?: string;
  direction?: Direction;
  children: React.ReactNode[];
  minSize?: number;      // %
  maxSize?: number;      // %
  snapPoints?: number[]; // %
  snapTolerance?: number;
}

const ResizablePanelGroup: React.FC<PanelGroupProps> = ({
  className,
  direction = "horizontal",
  children,
  minSize = 15,
  maxSize = 85,
  snapPoints = [],
  snapTolerance = 3,
}) => {
  const count = children.length;
  const initial = Array(count).fill(100 / count);
  const [sizes, setSizes] = useState<number[]>(initial);

  const clamp = (value: number) => Math.min(maxSize, Math.max(minSize, value));

  const applySnap = (value: number) => {
    for (const point of snapPoints) {
      if (Math.abs(value - point) <= snapTolerance) {
        return point;
      }
    }
    return value;
  };

  const resize = (index: number, delta: number) => {
    setSizes((prev) => {
      const next = [...prev];

      let a = clamp(prev[index] + delta);
      let b = clamp(prev[index + 1] - delta);

      const snappedA = applySnap(a);
      const diff = snappedA - a;

      a = snappedA;
      b = clamp(b - diff);

      if (a + b !== prev[index] + prev[index + 1]) return prev;

      next[index] = a;
      next[index + 1] = b;
      return next;
    });
  };

  return (
    <div
      className={cn(
        "flex h-full w-full",
        direction === "vertical" ? "flex-col" : "flex-row",
        className
      )}
      data-panel-group-direction={direction}
    >
      {children.map((child, i) => (
        <div
          key={i}
          style={{
            flexBasis: `${sizes[i]}%`,
            flexGrow: 0,
            flexShrink: 0,
            overflow: "hidden",
          }}
        >
          {child}
          {i < count - 1 && (
            <ResizableHandle
              direction={direction}
              onResize={(delta) => resize(i, delta)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

/* ---------------- Panel ---------------- */

const ResizablePanel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="h-full w-full overflow-auto">{children}</div>
);

/* ---------------- Handle ---------------- */

interface HandleProps {
  direction?: Direction;
  onResize?: (delta: number) => void;
  withHandle?: boolean;
  className?: string;
}

const ResizableHandle: React.FC<HandleProps> = ({
  direction = "horizontal",
  onResize,
  withHandle = true,
  className,
}) => {
  const startRef = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    startRef.current = direction === "vertical" ? e.clientY : e.clientX;

    const move = (ev: MouseEvent) => {
      const current = direction === "vertical" ? ev.clientY : ev.clientX;
      const deltaPx = current - startRef.current;
      const base =
        direction === "vertical" ? window.innerHeight : window.innerWidth;

      const deltaPercent = (deltaPx / base) * 100;
      onResize?.(deltaPercent);
      startRef.current = current;
    };

    const up = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };

  return (
    <div
      onMouseDown={onMouseDown}
      className={cn(
        "relative flex items-center justify-center bg-border select-none",
        direction === "vertical"
          ? "h-1 w-full cursor-row-resize"
          : "w-1 h-full cursor-col-resize",
        className
      )}
    >
      {withHandle && (
        <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
          <GripVertical />
        </div>
      )}
    </div>
  );
};

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
