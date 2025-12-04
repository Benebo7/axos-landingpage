'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import CardFlip from './flip-card';
import Image from 'next/image';

const cards = [
  {
    title: 'AI-Powered Analysis',
    subtitle: 'Smart recommendations 24/7',
    description:
      'Our advanced AI algorithms analyze market trends and provide real-time recommendations to maximize your crypto portfolio returns.',
    features: [
      'Real-time Market Analysis',
      'Predictive Insights',
      'Auto-optimization',
      'Smart Alerts'
    ],
    color: '#9333ea',
    image: '/images/dash frapto.webp'
  },
  {
    title: 'Maximize Returns',
    subtitle: 'Optimize your investments',
    description:
      'Track performance, identify opportunities, and make data-driven decisions to grow your crypto portfolio consistently.',
    features: [
      'Portfolio Tracking',
      'Performance Analytics',
      'ROI Optimization',
      'Trend Detection'
    ],
    color: '#9333ea',
    image: '/images/image copy 4.webp'
  },
  {
    title: 'Secure & Reliable',
    subtitle: 'Enterprise-grade protection',
    description:
      'Your assets and data are protected with bank-level security, encrypted communications, and continuous monitoring.',
    features: [
      'End-to-end Encryption',
      'Multi-layer Security',
      '24/7 Monitoring',
      'Secure Infrastructure'
    ],
    color: '#9333ea',
    image: '/images/Artes Axos (1).webp'
  }
];

export const StickyScrollCards = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  });

  const scale = useTransform(scrollYProgress, [0, 0.3], [1.1, 1]);
  const card2Scale = useTransform(scrollYProgress, [0.3, 0.6], [1.1, 1]);
  const card3Scale = useTransform(scrollYProgress, [0.6, 0.9], [1.1, 1]);

  // Refs para detectar quando cada card entra na viewport
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  const card1InView = useInView(card1Ref, { 
    once: true, 
    amount: 0.2,
    margin: "0px 0px -150px 0px"
  });
  const card2InView = useInView(card2Ref, { 
    once: true, 
    amount: 0.2,
    margin: "0px 0px -150px 0px"
  });
  const card3InView = useInView(card3Ref, { 
    once: true, 
    amount: 0.05, // Threshold bem menor para último card
    margin: "0px 0px -250px 0px" // Margin muito maior para detectar bem mais cedo
  });

  return (
    <div ref={ref} className="relative w-full -mt-20 sm:-mt-24 md:-mt-28 lg:-mt-32 -mb-20 sm:-mb-24 md:-mb-28 lg:-mb-32">
      <div className="h-[300vh] w-full">
        <div ref={card1Ref} className="sticky top-0 h-screen w-full">
          <motion.div
            style={{
              scale
            }}
            className="flex h-full w-full items-center justify-start"
          >
            <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-4 md:px-6">
              <div className="flex items-center gap-10 md:gap-16 lg:gap-24 pl-20 sm:pl-24 md:pl-32 lg:pl-40 md:ml-12 lg:ml-20">
                <CardFlip {...cards[0]} autoFlip={card1InView} />
                <motion.div 
                  className="hidden md:block relative w-[450px] lg:w-[600px] h-[280px] lg:h-[380px] rounded-2xl overflow-hidden shadow-2xl"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: card1InView ? 1 : 0, x: card1InView ? 0 : 50 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <Image
                    src={cards[0].image}
                    alt={cards[0].title}
                    fill
                    sizes="(max-width: 1024px) 450px, 600px"
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
        <div ref={card2Ref} className="sticky top-0 h-screen w-full">
          <motion.div
            style={{
              scale: card2Scale
            }}
            className="flex h-full w-full items-center justify-start"
          >
            <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-4 md:px-6">
              <div className="flex items-center gap-10 md:gap-16 lg:gap-24 pl-20 sm:pl-24 md:pl-32 lg:pl-40 md:ml-12 lg:ml-20">
                <CardFlip {...cards[1]} autoFlip={card2InView} />
                <motion.div 
                  className="hidden md:block relative w-[450px] lg:w-[600px] h-[280px] lg:h-[380px] rounded-2xl overflow-hidden shadow-2xl"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: card2InView ? 1 : 0, x: card2InView ? 0 : 50 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <Image
                    src={cards[1].image}
                    alt={cards[1].title}
                    fill
                    sizes="(max-width: 1024px) 450px, 600px"
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
        <div ref={card3Ref} className="sticky top-0 h-screen w-full">
          <motion.div
            style={{
              scale: card3Scale
            }}
            className="flex h-full w-full items-center justify-start"
          >
            <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-4 md:px-6">
              <div className="flex items-center gap-10 md:gap-16 lg:gap-24 pl-20 sm:pl-24 md:pl-32 lg:pl-40 md:ml-12 lg:ml-20">
                <CardFlip {...cards[2]} autoFlip={card3InView} flipDelay={300} />
                <motion.div 
                  className="hidden md:block relative w-[450px] lg:w-[600px] h-[280px] lg:h-[380px] rounded-2xl overflow-hidden shadow-2xl"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: card3InView ? 1 : 0, x: card3InView ? 0 : 50 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <Image
                    src={cards[2].image}
                    alt={cards[2].title}
                    fill
                    sizes="(max-width: 1024px) 450px, 600px"
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
