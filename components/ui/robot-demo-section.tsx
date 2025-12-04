'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShinyButton } from '@/components/ui/shiny-button';
import { X, Send } from 'lucide-react';
import { waitlistService } from '@/lib/supabase';

interface SurveyData {
  features: string[];
  riskProfile: string;
  investmentAmount: string;
  experience: string;
  goals: string[];
}

export function RobotDemoSection() { 
  const [email, setEmail] = useState('');
  const [savedEmail, setSavedEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSurvey, setShowSurvey] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [surveyData, setSurveyData] = useState<SurveyData>({
    features: [],
    riskProfile: '',
    investmentAmount: '',
    experience: '',
    goals: []
  });
  const [surveyStep, setSurveyStep] = useState(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const { data, error } = await waitlistService.addEmail(email);
      
      if (error) {
        if ((error as any).code === 'duplicate') {
          setError('This email is already on the waitlist.');
        } else {
          setError('Unable to save email. Please try again.');
        }
        setIsLoading(false);
        return;
      }

      setSavedEmail(email);
      setShowSurvey(true);
      setEmail('');
    } catch (err) {
      console.error('Unexpected error:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFeatureToggle = (feature: string) => {
    setSurveyData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleGoalToggle = (goal: string) => {
    setSurveyData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }));
  };

  const handleSurveySubmit = async () => {
    if (!savedEmail) return;

    setIsLoading(true);
    
    try {
      const { error } = await waitlistService.saveSurvey(savedEmail, {
        features: surveyData.features,
        risk_profile: surveyData.riskProfile as 'conservador' | 'moderado' | 'arrojado',
        investment_amount: surveyData.investmentAmount,
        experience: surveyData.experience as 'iniciante' | 'intermediario' | 'avancado',
        goals: surveyData.goals
      });

      if (error) {
        console.error('Erro ao salvar pesquisa:', error);
        setError('Erro ao salvar suas preferências. Por favor, tente novamente.');
      } else {
        setShowSurvey(false);
        setIsSubmitted(true);
        setSurveyStep(1);
        setSurveyData({
          features: [],
          riskProfile: '',
          investmentAmount: '',
          experience: '',
          goals: []
        });
        setSavedEmail('');
      }
    } catch (err) {
      console.error('Erro inesperado:', err);
      setError('Erro inesperado. Por favor, tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const step1Valid = useMemo(() => surveyData.features.length > 0, [surveyData.features]);
  const step2Valid = useMemo(() => !!surveyData.riskProfile, [surveyData.riskProfile]);
  const step3Valid = useMemo(() => !!surveyData.experience, [surveyData.experience]);
  const step4Valid = useMemo(() => surveyData.goals.length > 0, [surveyData.goals]);
  const currentStepValid = useMemo(() => {
    if (surveyStep === 1) return step1Valid;
    if (surveyStep === 2) return step2Valid;
    if (surveyStep === 3) return step3Valid;
    return step4Valid;
  }, [surveyStep, step1Valid, step2Valid, step3Valid, step4Valid]);

  useEffect(() => {
    if (showSurvey) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      // Scroll to join section when survey opens
      const joinSection = document.getElementById('join');
      if (joinSection) {
        setTimeout(() => {
          joinSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 0);
      }
      return () => { document.body.style.overflow = prev; };
    }
  }, [showSurvey]);

  const nextStep = () => setSurveyStep(prev => prev + 1);
  const prevStep = () => setSurveyStep(prev => prev - 1);

  return (
    <section id="join" className="flex flex-col items-center pt-0 pb-8 sm:pb-12 md:pb-16 lg:pb-24 bg-black relative">
        {/* Animated gradient background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="w-full max-w-[800px] px-3 sm:px-4 md:px-6 relative z-10">
          <div className="relative bg-[rgba(5,5,5,0.45)] rounded-[20px] sm:rounded-[22px] md:rounded-[25px] shadow-[0px_0px_40px_0px_#000000] sm:shadow-[0px_0px_60px_0px_#000000] px-[20px] sm:px-[30px] md:px-[60px] py-[35px] sm:py-[50px] md:py-[80px] transition-all duration-500 border border-[rgba(207,207,207,0.1)] overflow-hidden">
            {/* Purple blur effects in corners - Mobile: smaller and more in corners */}
            <div className="absolute -top-20 sm:-top-32 -right-20 sm:-right-32 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-purple-600/40 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-20 sm:-bottom-32 -left-20 sm:-left-32 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-purple-500/35 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
            <div className="absolute -top-16 sm:-top-24 -right-16 sm:-right-24 w-[180px] sm:w-[300px] h-[180px] sm:h-[300px] bg-purple-700/30 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-16 sm:-bottom-24 -left-16 sm:-left-24 w-[180px] sm:w-[300px] h-[180px] sm:h-[300px] bg-indigo-600/30 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />
            
            {!isSubmitted ? (
              <div className="relative flex flex-col items-center gap-[30px] z-10">
                {/* Section - Content */}
                <div className="flex flex-col items-center gap-[10px] w-full">
                  {/* Coming Soon Badge */}
                  <div className="flex flex-col items-start">
                    <div className="relative bg-[rgba(255,189,122,0.02)] px-[8px] sm:px-[10px] py-[4px] sm:py-[5px] rounded-[6px] flex items-center justify-center border border-[rgba(207,207,207,0.1)]">
                      <div className="max-w-[140px] sm:max-w-[160px] w-[140px] sm:w-[160px] flex flex-col items-start">
                        <div className="flex flex-col items-center w-full">
                          <p className="font-light text-[13px] sm:text-[14.9px] leading-[17px] sm:leading-[19.2px] text-center whitespace-pre text-transparent bg-clip-text bg-gradient-to-t from-[rgba(62,24,152,1)] to-[#5b29d0]" style={{ fontFamily: 'Inter, sans-serif', WebkitTextFillColor: 'transparent' }}>
                            coming soon in 2025…
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Texts */}
                  <div className="flex flex-col items-center gap-[10px] w-full">
                    {/* Heading */}
                    <div className="flex flex-col items-start w-full">
                      <div className="flex flex-wrap gap-[8px] sm:gap-[10px] md:gap-[15.4px] items-center justify-center w-full">
                        <p className="font-light text-[28px] sm:text-[36px] md:text-[51.1px] leading-[36px] sm:leading-[48px] md:leading-[66px] text-center text-[#fffcfa]" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Join
                        </p>
                        <p className="font-light text-[28px] sm:text-[34px] md:text-[48.3px] leading-[36px] sm:leading-[48px] md:leading-[66px] text-center text-[#fffcfa]" style={{ fontFamily: 'Inter, sans-serif' }}>
                          the
                        </p>
                        <p className="font-light text-[28px] sm:text-[32px] md:text-[46.6px] leading-[36px] sm:leading-[48px] md:leading-[66px] text-center text-[#fffcfa]" style={{ fontFamily: 'Inter, sans-serif' }}>
                          waitlist
                        </p>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <div className="max-w-[380px] w-full flex flex-col items-center px-2 sm:px-4 md:px-0">
                      <div className="w-full">
                        <p className="font-light text-[14px] sm:text-[15px] md:text-[16px] leading-[18px] sm:leading-[19px] md:leading-[19.2px] text-center text-[#a1988f]" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Join the waitlist for early access and exclusive updates.
                          <br />
                          Be the first to experience what's next!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Form */}
                <form onSubmit={handleSubmit} className="max-w-[380px] w-full flex flex-col gap-[20px] items-stretch">
                  {/* Email Input */}
                  <div className="bg-[rgba(5,5,5,0.45)] flex flex-col h-[40px] items-start justify-center rounded-[10px] w-full relative border border-[rgba(207,207,207,0.1)]">
                    <div className="flex items-start justify-center p-[12px] w-full h-full">
                      <div className="flex flex-col items-start flex-1">
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your Email here."
                          className="font-normal text-[14px] leading-[normal] text-[#a1a1a1] placeholder:text-[#a1a1a1] bg-transparent border-none outline-none w-full"
                          required
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <div className="w-full">
                    <ShinyButton
                      onClick={(e) => {
                        e.preventDefault();
                        const form = e.currentTarget.closest('form');
                        if (form) {
                          form.requestSubmit();
                        }
                      }}
                      className="w-full h-[40px] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="flex items-center justify-center gap-2">
                        {isLoading ? 'Submitting...' : (
                          <>
                            Submit
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </span>
                    </ShinyButton>
                  </div>
                  
                  {error && (
                    <div className="text-sm text-red-400 flex items-center justify-center gap-2 w-full" role="alert">
                      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <path d="M12 8v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="17" r="1" fill="currentColor" />
                      </svg>
                      <span>{error}</span>
                    </div>
                  )}
                </form>
              </div>
            ) : (
              <div className="relative flex flex-col items-center text-center space-y-6 z-10">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-purple-500/30 to-purple-600/30 flex items-center justify-center border border-purple-400/40 shadow-lg shadow-purple-500/20">
                  <svg className="w-10 h-10 text-purple-400 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">You're on the list!</h3>
                <p className="text-base md:text-lg text-white/90 drop-shadow-md max-w-sm mx-auto leading-relaxed">
                  Welcome to Axos! We'll notify you when we launch with exclusive early access.
                </p>
                <ShinyButton 
                  onClick={() => { setIsSubmitted(false); setError(null); setSavedEmail(''); }} 
                  className="mt-4"
                >
                  Register another email
                </ShinyButton>
              </div>
            )}
          </div>
        </div>

        {showSurvey && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
            <div className="bg-neutral-900 border border-white/10 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Help us personalize your experience
                </h3>
                <Button variant="ghost" size="sm" onClick={() => setShowSurvey(false)} className="text-white/60 hover:text-white">
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="p-4 sm:p-6">
                {surveyStep === 1 && (
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h4 className="text-base sm:text-lg font-medium mb-3 sm:mb-4 text-white">Which features are most important to you?</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {['Market sentiment analysis', 'Real-time alerts', 'Automatic recommendations', 'Portfolio tracking', 'Advanced technical analysis', 'Risk management'].map((feature) => (
                          <button key={feature} onClick={() => handleFeatureToggle(feature)} className={`p-2.5 sm:p-3 rounded-lg border text-left transition-colors text-sm sm:text-base ${surveyData.features.includes(feature) ? 'border-purple-500 bg-purple-500/20 text-purple-300' : 'border-white/10 bg-white/5 text-white/80 hover:border-purple-400/50'}`}>{feature}</button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {surveyStep === 2 && (
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h4 className="text-base sm:text-lg font-medium mb-3 sm:mb-4 text-white">What&apos;s your risk profile?</h4>
                      <div className="space-y-2 sm:space-y-3">
                        {[{ value: 'conservador', label: 'Conservative - I prefer safety' }, { value: 'moderado', label: 'Moderate - I balance risk and return' }, { value: 'arrojado', label: 'Aggressive - I seek higher returns' }].map((option) => (
                          <button key={option.value} onClick={() => setSurveyData(prev => ({ ...prev, riskProfile: option.value }))} className={`w-full p-2.5 sm:p-3 rounded-lg border text-left transition-colors text-sm sm:text-base ${surveyData.riskProfile === option.value ? 'border-purple-500 bg-purple-500/20 text-purple-300' : 'border-white/10 bg-white/5 text-white/80 hover:border-purple-400/50'}`}>{option.label}</button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {surveyStep === 3 && (
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h4 className="text-base sm:text-lg font-medium mb-3 sm:mb-4 text-white">What&apos;s your investment experience?</h4>
                      <div className="space-y-2 sm:space-y-3">
                        {[{ value: 'iniciante', label: 'Beginner - Little or no experience' }, { value: 'intermediario', label: 'Intermediate - Some years of experience' }, { value: 'avancado', label: 'Advanced - Significant experience' }].map((option) => (
                          <button key={option.value} onClick={() => setSurveyData(prev => ({ ...prev, experience: option.value }))} className={`w-full p-2.5 sm:p-3 rounded-lg border text-left transition-colors text-sm sm:text-base ${surveyData.experience === option.value ? 'border-purple-500 bg-purple-500/20 text-purple-300' : 'border-white/10 bg-white/5 text-white/80 hover:border-purple-400/50'}`}>{option.label}</button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {surveyStep === 4 && (
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h4 className="text-base sm:text-lg font-medium mb-3 sm:mb-4 text-white">What are your main goals?</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {['Passive income', 'Wealth growth', 'Retirement', 'Diversification', 'Active trading', 'Hedge against inflation'].map((goal) => (
                          <button key={goal} onClick={() => handleGoalToggle(goal)} className={`p-2.5 sm:p-3 rounded-lg border text-left transition-colors text-sm sm:text-base ${surveyData.goals.includes(goal) ? 'border-purple-500 bg-purple-500/20 text-purple-300' : 'border-white/10 bg-white/5 text-white/80 hover:border-purple-400/50'}`}>{goal}</button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                <div className="h-6">
                  {error && (
                    <div className="flex items-start text-sm text-red-400 mt-1">
                      <svg className="w-4 h-4 mr-2 flex-shrink-0 text-red-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <path d="M12 8v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="17" r="1" fill="currentColor" />
                      </svg>
                      <span className="text-red-400">{error}</span>
                    </div>
                  )}
                </div>
                <div className="flex justify-between mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    {[1, 2, 3, 4].map((step) => (<div key={step} className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${step <= surveyStep ? 'bg-purple-500' : 'bg-white/20'}`} />))}
                  </div>
                  <div className="flex gap-2 sm:gap-3">
                    {surveyStep > 1 && <Button variant="outline" onClick={prevStep} disabled={isLoading} size="sm" className="sm:size-default border-white/10 text-white hover:bg-white/5">Previous</Button>}
                    {surveyStep < 4 ? <Button onClick={nextStep} disabled={isLoading || !currentStepValid} size="sm" className="sm:size-default bg-purple-600 hover:bg-purple-700 text-white">Next</Button> : <Button onClick={handleSurveySubmit} disabled={isLoading || !currentStepValid} size="sm" className="sm:size-default bg-purple-600 hover:bg-purple-700 text-white">{isLoading ? 'Saving...' : 'Finish'}</Button>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </section>
  );
}
