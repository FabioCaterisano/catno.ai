"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  gradient?: boolean;
}

export const Hero = React.forwardRef<HTMLDivElement, HeroProps>(
  ({ className, children, gradient = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative min-h-screen flex items-center justify-center overflow-hidden",
          gradient && "gradient-dark",
          className
        )}
        {...props}
      >
        {gradient && (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background" />
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          </>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full"
        >
          {children}
        </motion.div>
      </div>
    );
  }
);

Hero.displayName = "Hero";
