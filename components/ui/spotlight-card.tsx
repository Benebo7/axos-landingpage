import React, { useEffect, useRef, ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange';
  size?: 'sm' | 'md' | 'lg';
  width?: string | number;
  height?: string | number;
  customSize?: boolean; // When true, ignores size prop and uses width/height or className
  borderless?: boolean;
  staticGlow?: boolean; // When true, keeps glow hue fixed (no color shift)
  fixedHue?: number; // Optional: force a specific hue (e.g., 270 for purple)
  glowIntensity?: 'subtle' | 'normal' | 'strong'; // Control the intensity of the glow effect
}

const glowColorMap = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 }
};

const sizeMap = {
  sm: 'w-48 h-64',
  md: 'w-64 h-80',
  lg: 'w-80 h-96'
};

const GlowCard: React.FC<GlowCardProps> = ({ 
  children, 
  className = '', 
  glowColor = 'blue',
  size = 'md',
  width,
  height,
  customSize = false,
  borderless = false,
  staticGlow = false,
  fixedHue,
  glowIntensity = 'normal',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Desabilita tracking de mouse em dispositivos mobile/touch para melhor performance
    const isTouchDevice = window.matchMedia('(max-width: 768px)').matches || 
                          ('ontouchstart' in window) || 
                          (navigator.maxTouchPoints > 0);
    
    if (isTouchDevice) {
      // Em mobile, centraliza o efeito para uma aparência uniforme
      if (cardRef.current) {
        cardRef.current.style.setProperty('--x', '50%');
        cardRef.current.style.setProperty('--xp', '0.5');
        cardRef.current.style.setProperty('--y', '50%');
        cardRef.current.style.setProperty('--yp', '0.5');
      }
      return;
    }

    const syncPointer = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        cardRef.current.style.setProperty('--x', `${x}px`);
        cardRef.current.style.setProperty('--xp', (e.clientX / window.innerWidth).toFixed(2));
        cardRef.current.style.setProperty('--y', `${y}px`);
        cardRef.current.style.setProperty('--yp', (e.clientY / window.innerHeight).toFixed(2));
      }
    };

    document.addEventListener('mousemove', syncPointer);
    return () => document.removeEventListener('mousemove', syncPointer);
  }, []);

  const { base, spread } = glowColorMap[glowColor];
  const effectiveBaseHue = typeof fixedHue === 'number' ? fixedHue : base;

  // Intensity map for glow effect
  const intensityMap = {
    subtle: { bgOpacity: '0.08', borderOpacity: '0.5', borderLightOpacity: '0.4', size: '180' },
    normal: { bgOpacity: '0.14', borderOpacity: '0.9', borderLightOpacity: '0.9', size: '200' },
    strong: { bgOpacity: '0.20', borderOpacity: '1.0', borderLightOpacity: '1.0', size: '220' }
  };

  const intensitySettings = intensityMap[glowIntensity];

  // Determine sizing
  const getSizeClasses = () => {
    if (customSize) {
      return ''; // Let className or inline styles handle sizing
    }
    return sizeMap[size];
  };

  const getInlineStyles = () => {
    const baseStyles: React.CSSProperties & Record<string, string | number> = {
      '--base': effectiveBaseHue,
      '--spread': staticGlow ? 0 : spread,
      '--radius': '14',
      '--border': borderless ? '0' : '3',
      '--backdrop': 'hsl(0 0% 60% / 0.12)',
      '--backup-border': borderless ? 'transparent' : 'var(--backdrop)',
      '--size': intensitySettings.size,
      '--outer': borderless ? '0' : '1',
      '--border-size': 'calc(var(--border, 2) * 1px)',
      '--spotlight-size': 'calc(var(--size, 150) * 1px)',
      '--hue': 'calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))',
      '--saturation': '100',
      '--lightness': '63',
      '--bg-spot-opacity': intensitySettings.bgOpacity,
      '--border-spot-opacity': intensitySettings.borderOpacity,
      '--border-light-opacity': intensitySettings.borderLightOpacity,
      backgroundImage: `radial-gradient(
        var(--spotlight-size) var(--spotlight-size) at
        var(--x, 50%)
        var(--y, 50%),
        hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / var(--bg-spot-opacity, 0.1)), transparent
      )`,
      backgroundColor: 'var(--backdrop, transparent)',
      backgroundSize: 'calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))',
      backgroundPosition: 'center',
      border: borderless ? '0 solid transparent' : 'var(--border-size) solid var(--backup-border)',
      position: 'relative' as const,
      touchAction: 'none' as const,
      overflow: 'hidden',
      backgroundClip: 'padding-box',
      isolation: 'isolate',
    };

    // Add width and height if provided
    if (width !== undefined) {
      baseStyles.width = typeof width === 'number' ? `${width}px` : width;
    }
    if (height !== undefined) {
      baseStyles.height = typeof height === 'number' ? `${height}px` : height;
    }

    return baseStyles;
  };

  const beforeAfterStyles = `
    [data-glow]::before,
    [data-glow]::after {
      pointer-events: none;
      content: "";
      position: absolute;
      inset: calc(var(--border-size) * -1);
      border: var(--border-size) solid transparent;
      border-radius: calc(var(--radius) * 1px);
      background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
      background-repeat: no-repeat;
      background-position: center;
      mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
      mask-clip: padding-box, border-box;
      mask-composite: intersect;
    }
    
    /* Hide border pseudo-elements when borderless */
    [data-glow][data-borderless]::before,
    [data-glow][data-borderless]::after {
      display: none;
    }
    
    [data-glow]::before {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
        var(--x, 50%)
        var(--y, 50%),
        hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 50) * 1%) / var(--border-spot-opacity, 1)), transparent 100%
      );
      filter: brightness(2);
    }
    
    [data-glow]::after {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
        var(--x, 50%)
        var(--y, 50%),
        hsl(0 100% 100% / var(--border-light-opacity, 1)), transparent 100%
      );
    }
    
    [data-glow] [data-glow] {
      position: absolute;
      inset: 0;
      will-change: filter;
      opacity: var(--outer, 1);
      border-radius: calc(var(--radius) * 1px);
      border-width: calc(var(--border-size) * 20);
      filter: blur(calc(var(--border-size) * 10));
      background: none;
      pointer-events: none;
      border: none;
    }
    
    [data-glow] > [data-glow]::before {
      inset: -10px;
      border-width: 10px;
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
      <div
        ref={cardRef}
        data-glow
        data-borderless={borderless ? true : undefined}
        style={getInlineStyles()}
        className={`
          ${getSizeClasses()}
          ${!customSize ? 'aspect-[3/4]' : ''}
          rounded-2xl 
          relative 
          grid 
          grid-rows-[1fr_auto] 
          shadow-[0_1rem_2rem_-1rem_black] 
          p-4 
          gap-4 
          backdrop-blur-[5px]
          ${className}
        `}
      >
        <div ref={innerRef} data-glow></div>
        {children}
      </div>
    </>
  );
};

export { GlowCard }
