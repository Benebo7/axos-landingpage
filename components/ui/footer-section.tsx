import React from 'react';
import type { ReactNode } from 'react';
import { InstagramIcon } from 'lucide-react';


export function Footer() {
	return (
		<footer className="relative w-full flex flex-col items-center justify-center rounded-t-[2rem] sm:rounded-t-[3rem] md:rounded-t-[4rem] border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-10 md:py-12 lg:py-16">
			<div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />



			<div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center space-y-4 sm:space-y-5 md:space-y-6">
				<AnimatedContainer className="flex flex-col items-center space-y-3 sm:space-y-4">
					<div className="flex items-center gap-3 sm:gap-4">
                        <img 
                            src="/images/image.png" 
                            alt="Axos Logo" 
                            className="h-10 w-10 sm:h-12 sm:w-12" 
                        />
						<span className="text-xl sm:text-2xl font-bold text-white">Axos</span>
					</div>
					
                    <a 
						href="https://instagram.com" 
						target="_blank"
						rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-[hsl(var(--axos-purple))] transition-all duration-300"
					>
						<InstagramIcon className="size-4 sm:size-5" />
						<span className="text-xs sm:text-sm">Follow us on Instagram</span>
					</a>

					<p className="text-muted-foreground text-xs sm:text-sm mt-3 sm:mt-4">
						© {new Date().getFullYear()} Axos.AI. All rights reserved.
					</p>
				</AnimatedContainer>
			</div>
		</footer>
	);
};

type ViewAnimationProps = {
	className?: string;
	children: ReactNode;
};

function AnimatedContainer({ className, children }: ViewAnimationProps) {
	return (
		<div className={className}>
			{children}
		</div>
	);
};