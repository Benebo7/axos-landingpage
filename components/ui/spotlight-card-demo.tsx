import { GlowCard } from "@/components/ui/spotlight-card";

export function SpotlightCardDemo(){
  return(
    <div className="w-screen h-screen flex flex-row items-center justify-center gap-10 custom-cursor">
      <GlowCard glowColor="blue">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold text-white">Blue Glow</h3>
          <p className="text-sm text-white/70">Interactive spotlight card</p>
        </div>
      </GlowCard>
      
      <GlowCard glowColor="purple">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold text-white">Purple Glow</h3>
          <p className="text-sm text-white/70">Interactive spotlight card</p>
        </div>
      </GlowCard>
      
      <GlowCard glowColor="green">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold text-white">Green Glow</h3>
          <p className="text-sm text-white/70">Interactive spotlight card</p>
        </div>
      </GlowCard>
    </div>
  );
};
