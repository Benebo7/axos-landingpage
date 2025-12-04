"use client";

import { CpuArchitecture } from "@/components/ui/cpu-architecture"

export const CpuDemo = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {/* Default Configuration */}
      <div className="p-6 rounded-xl bg-accent/20 border border-border/50">
        <h3 className="text-lg font-semibold mb-4">Configuração Padrão</h3>
        <CpuArchitecture />
      </div>

      {/* Custom Text */}
      <div className="p-6 rounded-xl bg-accent/20 border border-border/50">
        <h3 className="text-lg font-semibold mb-4">Texto Personalizado</h3>
        <CpuArchitecture text="GPU" />
      </div>

      {/* No Connections */}
      <div className="p-6 rounded-xl bg-accent/20 border border-border/50">
        <h3 className="text-lg font-semibold mb-4">Sem Conexões</h3>
        <CpuArchitecture showCpuConnections={false} />
      </div>

      {/* No Animations */}
      <div className="p-6 rounded-xl bg-accent/20 border border-border/50">
        <h3 className="text-lg font-semibold mb-4">Sem Animações</h3>
        <CpuArchitecture 
          animateText={false} 
          animateLines={false} 
          animateMarkers={false} 
        />
      </div>
    </div>
  );
}; 