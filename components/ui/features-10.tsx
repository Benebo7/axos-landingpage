import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { TrendingUp, BarChart3, Brain } from 'lucide-react'
import { ReactNode } from 'react'
import Image from 'next/image'

export function Features() {
    return (
        <section className="bg-zinc-50 py-12 sm:py-16 md:py-32 dark:bg-transparent">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl">
                <div className="mx-auto grid gap-4 lg:grid-cols-2">
                    <FeatureCard>
                        <CardHeader className="pb-3">
                            <CardHeading
                                icon={TrendingUp}
                                title="Never miss an opportunity"
                                description="Get instant alerts about important market movements, even when you're not watching."
                            />
                        </CardHeader>

                        <CardContent>
                            <div className="relative mb-6 sm:mb-0">
                                <div className="aspect-[76/59] border">
                                    <DualModeImage
                                        darkSrc="/images/Artes Axos.png"
                                        lightSrc="/images/Artes Axos.png"
                                        alt="trading analytics illustration"
                                        width={1207}
                                        height={929}
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </FeatureCard>

                    <FeatureCard>
                        <CardHeader className="pb-3">
                            <CardHeading
                                icon={BarChart3}
                                title="Smarter decisions"
                                description="Our AI analyzes complex market patterns and translates them into simple, actionable recommendations for you."
                            />
                        </CardHeader>

                        <CardContent>
                            <div className="relative mb-6 sm:mb-0">
                                <div className="aspect-[76/59] border">
                                    <DualModeImage
                                        darkSrc="/images/infos-.jpg"
                                        lightSrc="/images/infos-.jpg"
                                        alt="crypto analysis illustration"
                                        width={1207}
                                        height={929}
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </FeatureCard>

                    <FeatureCard className="p-4 sm:p-6 lg:col-span-2">
                        <p className="mx-auto my-4 sm:my-6 max-w-md text-balance text-center text-lg sm:text-xl md:text-2xl font-semibold">Your personal assistant for crypto investments, available 24/7.</p>

                        <div className="flex justify-center gap-3 sm:gap-6 overflow-hidden flex-wrap">
                            <CircularUI
                                label="Accuracy"
                                circles={[{ pattern: 'border' }, { pattern: 'border' }]}
                            />

                            <CircularUI
                                label="Speed"
                                circles={[{ pattern: 'none' }, { pattern: 'primary' }]}
                            />

                            <CircularUI
                                label="Personalization"
                                circles={[{ pattern: 'blue' }, { pattern: 'none' }]}
                            />

                            <CircularUI
                                label="Savings"
                                circles={[{ pattern: 'primary' }, { pattern: 'none' }]}
                                className="hidden sm:block"
                            />
                        </div>
                    </FeatureCard>
                </div>
            </div>
        </section>
    )
}

interface FeatureCardProps {
    children: ReactNode
    className?: string
}

const FeatureCard = ({ children, className }: FeatureCardProps) => (
    <Card className={cn('group relative rounded-none shadow-zinc-950/5', className)}>
        <CardDecorator />
        {children}
    </Card>
)

const CardDecorator = () => (
    <>
        <span className="border-primary absolute -left-px -top-px block size-2 border-l-2 border-t-2"></span>
        <span className="border-primary absolute -right-px -top-px block size-2 border-r-2 border-t-2"></span>
        <span className="border-primary absolute -bottom-px -left-px block size-2 border-b-2 border-l-2"></span>
        <span className="border-primary absolute -bottom-px -right-px block size-2 border-b-2 border-r-2"></span>
    </>
)

interface CardHeadingProps {
    icon: any
    title: string
    description: string
}

const CardHeading = ({ icon: Icon, title, description }: CardHeadingProps) => (
    <div className="p-4 sm:p-6 min-h-[150px] sm:min-h-[180px] flex flex-col">
        <span className="text-muted-foreground flex items-center gap-2 text-sm sm:text-base">
            <Icon className="size-3.5 sm:size-4" />
            {title}
        </span>
        <p className="mt-4 sm:mt-8 text-lg sm:text-xl md:text-2xl font-semibold">{description}</p>
    </div>
)

interface DualModeImageProps {
    darkSrc: string
    lightSrc: string
    alt: string
    width: number
    height: number
    className?: string
}

const DualModeImage = ({ darkSrc, lightSrc, alt, width, height, className }: DualModeImageProps) => (
    <>
        <div className={cn('hidden dark:block w-full h-full relative', className)}>
            <Image
                src={darkSrc}
                alt={`${alt} dark`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                priority={false}
                className="object-cover rounded"
            />
        </div>
        <div className={cn('shadow dark:hidden w-full h-full relative', className)}>
            <Image
                src={lightSrc}
                alt={`${alt} light`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                priority={false}
                className="object-cover rounded"
            />
        </div>
    </>
)

interface CircleConfig {
    pattern: 'none' | 'border' | 'primary' | 'blue'
}

interface CircularUIProps {
    label: string
    circles: CircleConfig[]
    className?: string
}

const CircularUI = ({ label, circles, className }: CircularUIProps) => (
    <div className={className}>
        <div className="bg-gradient-to-b from-border size-fit rounded-2xl to-transparent p-px">
            <div className="bg-gradient-to-b from-background to-muted/25 relative flex aspect-square w-fit items-center -space-x-4 rounded-[15px] p-3 sm:p-4">
                {circles.map((circle, i) => (
                    <div
                        key={i}
                        className={cn('size-6 sm:size-7 rounded-full border sm:size-8', {
                            'border-primary': circle.pattern === 'none',
                            'border-primary bg-[repeating-linear-gradient(-45deg,hsl(var(--border)),hsl(var(--border))_1px,transparent_1px,transparent_4px)]': circle.pattern === 'border',
                            'border-primary bg-background bg-[repeating-linear-gradient(-45deg,hsl(var(--primary)),hsl(var(--primary))_1px,transparent_1px,transparent_4px)]': circle.pattern === 'primary',
                            'bg-background z-1 border-blue-500 bg-[repeating-linear-gradient(-45deg,theme(colors.blue.500),theme(colors.blue.500)_1px,transparent_1px,transparent_4px)]': circle.pattern === 'blue',
                        })}></div>
                ))}
            </div>
        </div>
        <span className="text-muted-foreground mt-1.5 block text-center text-xs sm:text-sm">{label}</span>
    </div>
) 