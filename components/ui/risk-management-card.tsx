'use client';

import { cn } from '@/lib/utils';
import { Shield, TrendingUp, AlertCircle, CheckCircle2, Activity } from 'lucide-react';
import { useState } from 'react';

export interface RiskManagementCardProps {
  className?: string;
}

export function RiskManagementCard({ className }: RiskManagementCardProps) {
  const [activeTab, setActiveTab] = useState<'protection' | 'analysis' | 'optimization'>('protection');
  const [isHovered, setIsHovered] = useState(false);

  const features = {
    protection: [
      { icon: Shield, label: 'Portfolio Shield', value: '99.9%', status: 'active' },
      { icon: CheckCircle2, label: 'Risk Score', value: 'Low', status: 'good' },
      { icon: Activity, label: 'Monitoring', value: '24/7', status: 'active' },
    ],
    analysis: [
      { icon: TrendingUp, label: 'Risk Level', value: '3/10', status: 'good' },
      { icon: AlertCircle, label: 'Volatility', value: 'Moderate', status: 'warning' },
      { icon: Activity, label: 'Diversification', value: '85%', status: 'good' },
    ],
    optimization: [
      { icon: TrendingUp, label: 'Optimized Assets', value: '12', status: 'active' },
      { icon: CheckCircle2, label: 'Efficiency', value: '94%', status: 'good' },
      { icon: Shield, label: 'Protected Value', value: '$45.2K', status: 'active' },
    ],
  };

  const currentFeatures = features[activeTab];

  return (
    <div
      className={cn(
        'bg-[#141414] rounded-[20px] border-2 border-[#1e1e1e] p-6 h-[500px] flex flex-col justify-between relative overflow-hidden',
        'transition-all duration-500',
        isHovered && 'border-purple-500/30 shadow-lg shadow-purple-500/10',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient background */}
      <div 
        className={cn(
          'absolute inset-0 opacity-0 transition-opacity duration-700',
          isHovered && 'opacity-100'
        )}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className={cn(
              'p-2.5 rounded-xl transition-all duration-500',
              'bg-gradient-to-br from-purple-500/20 to-purple-600/20',
              isHovered && 'scale-110 from-purple-500/30 to-purple-600/30'
            )}>
              <Shield className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Risk Management
              </h3>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Protect your investments with AI-powered risk analysis and portfolio optimization.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 p-1 bg-[#0a0a0a] rounded-xl border border-[#1e1e1e]">
          {(['protection', 'analysis', 'optimization'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                'flex-1 px-3 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300',
                activeTab === tab
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/20'
                  : 'text-gray-500 hover:text-gray-300 hover:bg-[#1e1e1e]'
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Features Grid */}
        <div className="flex-1 space-y-4 mb-6">
          {currentFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.label}
                className={cn(
                  'group p-4 rounded-xl bg-[#0a0a0a] border border-[#1e1e1e]',
                  'hover:border-purple-500/30 hover:bg-[#1a1a1a]',
                  'transition-all duration-300 cursor-pointer',
                  'transform hover:scale-[1.02]'
                )}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      'p-2 rounded-lg transition-all duration-300',
                      feature.status === 'good' && 'bg-green-500/10 group-hover:bg-green-500/20',
                      feature.status === 'active' && 'bg-purple-500/10 group-hover:bg-purple-500/20',
                      feature.status === 'warning' && 'bg-yellow-500/10 group-hover:bg-yellow-500/20'
                    )}>
                      <Icon className={cn(
                        'w-4 h-4 transition-transform duration-300 group-hover:scale-110',
                        feature.status === 'good' && 'text-green-400',
                        feature.status === 'active' && 'text-purple-400',
                        feature.status === 'warning' && 'text-yellow-400'
                      )} />
                    </div>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                      {feature.label}
                    </span>
                  </div>
                  <div className={cn(
                    'px-3 py-1 rounded-full text-xs font-bold transition-all duration-300',
                    feature.status === 'good' && 'bg-green-500/10 text-green-400 group-hover:bg-green-500/20',
                    feature.status === 'active' && 'bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20',
                    feature.status === 'warning' && 'bg-yellow-500/10 text-yellow-400 group-hover:bg-yellow-500/20'
                  )}>
                    {feature.value}
                  </div>
                </div>

                {/* Progress bar (animated on hover) */}
                <div className="mt-3 h-1 bg-[#1e1e1e] rounded-full overflow-hidden">
                  <div 
                    className={cn(
                      'h-full rounded-full transition-all duration-700',
                      feature.status === 'good' && 'bg-gradient-to-r from-green-500 to-emerald-500',
                      feature.status === 'active' && 'bg-gradient-to-r from-purple-500 to-purple-600',
                      feature.status === 'warning' && 'bg-gradient-to-r from-yellow-500 to-orange-500',
                      'group-hover:w-full'
                    )}
                    style={{
                      width: feature.status === 'good' ? '85%' : feature.status === 'active' ? '100%' : '60%'
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <button className={cn(
          'w-full py-3.5 px-4 rounded-xl font-semibold text-sm',
          'bg-gradient-to-r from-purple-600 to-purple-700',
          'hover:from-purple-700 hover:to-purple-800',
          'text-white shadow-lg shadow-purple-500/20',
          'transition-all duration-300',
          'hover:shadow-xl hover:shadow-purple-500/30',
          'hover:scale-[1.02]',
          'active:scale-[0.98]',
          'flex items-center justify-center gap-2'
        )}>
          <Shield className="w-4 h-4" />
          Enable AI Protection
        </button>
      </div>

      {/* Floating particles effect */}
      {isHovered && (
        <>
          <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-purple-400/40 animate-ping" />
          <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-blue-400/40 animate-ping animation-delay-200" />
          <div className="absolute bottom-1/3 right-1/3 w-1 h-1 rounded-full bg-purple-300/40 animate-ping animation-delay-400" />
        </>
      )}
    </div>
  );
}

