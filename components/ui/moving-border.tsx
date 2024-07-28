"use client";
import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";





export function MovingBorderCard({
  children,
  containerClassName,
  borderClassName,
  duration = 4000,
  className,
  ...otherProps
}: {
  children: React.ReactNode;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}) {
  return (
    <div
      className={cn(
        "bg-transparent relative p-[1px] overflow-hidden",
        containerClassName
      )}
      {...otherProps}
    >
      <div className="absolute inset-0 rounded-lg" style={{ padding: '1px' }}>
  <MovingBorder duration={duration}>
    <div
            className={cn(
              "h-20 w-20 opacity-[0.8] bg-[radial-gradient(circle_at_center,#00ccb1,#7b61ff,#ffc414,#1ca0fb)]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <Card
        className={cn(
          "relative bg-white text-black w-full h-full",
          className
        )}
      >
        {children}
      </Card>
    </div>
  );
}

export const MovingBorder = ({
  children,
  duration = 4000,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  [key: string]: any;
}) => {
  const pathRef = useRef<any>();
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          vectorEffect="non-scaling-stroke"
          stroke="transparent"
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

