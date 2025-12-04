import React, { CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface SafariProps extends React.HTMLAttributes<HTMLDivElement> {
  url?: string;
  imageSrc?: string;
  videoSrc?: string;
  mode?: "default" | "simple";
}

export function Safari({
  url = "magicui.design",
  imageSrc,
  videoSrc,
  mode = "default",
  className,
  style,
  ...props
}: SafariProps) {
  return (
    <div
      className={cn(
        "relative w-full rounded-[12px] bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 shadow-xl overflow-hidden",
        className
      )}
      style={{
        ...style,
      }}
      {...props}
    >
      {/* Browser Header */}
      <div className="flex h-12 w-full items-center justify-between bg-zinc-100 dark:bg-zinc-900 px-4 border-b border-black/5 dark:border-white/5">
        {/* Window Controls */}
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-[#FF5F57] border border-black/10" />
          <div className="h-3 w-3 rounded-full bg-[#FEBC2E] border border-black/10" />
          <div className="h-3 w-3 rounded-full bg-[#28C840] border border-black/10" />
        </div>

        {/* Address Bar */}
        <div className="flex flex-1 items-center justify-center px-4">
          <div className="flex h-8 w-full max-w-xl items-center justify-center rounded-md bg-white dark:bg-zinc-800 border border-black/5 dark:border-white/5 px-3 text-xs text-black/40 dark:text-white/40 shadow-sm">
            {url}
          </div>
        </div>

        {/* Spacer for centering */}
        <div className="w-[52px]" />
      </div>

      {/* Content */}
      <div className="relative w-full bg-white dark:bg-zinc-950 aspect-[1203/753] flex items-center justify-center overflow-hidden">
        {videoSrc ? (
          <video
            src={videoSrc}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : imageSrc ? (
          <img
            src={imageSrc}
            alt="Browser Content"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 text-zinc-400 dark:text-zinc-600">
             {/* Empty State / Placeholder */}
             <div className="text-4xl">Coming Soon</div>
          </div>
        )}
        
        {/* Overlay for simple mode or other effects if needed */}
      </div>
    </div>
  );
}

