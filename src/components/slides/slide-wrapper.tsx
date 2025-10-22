import type { FC, ReactNode } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Asterisk, Atom, Dna, Pizza } from 'lucide-react';

interface SlideWrapperProps {
  children: ReactNode;
  className?: string;
}

const studioMarsLogo = PlaceHolderImages.find((p) => p.id === 'studio-mars-logo');
const goDeliveryLogo = PlaceHolderImages.find((p) => p.id === 'go-delivery-logo');

export const SlideWrapper: FC<SlideWrapperProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'relative flex h-[100svh] w-full flex-col items-center justify-center px-6 md:px-12 lg:px-16 py-8 text-center overflow-hidden',
        className
      )}
    >
      <header className="absolute top-6 md:top-8 left-6 md:left-8 z-10">
        {studioMarsLogo && (
          <Image
            src={studioMarsLogo.imageUrl}
            alt={studioMarsLogo.description}
            width={300} // Increased width
            height={100} // Increased height proportionally
            className="object-contain w-auto h-14 md:h-16" // Adjusted height classes
            priority
          />
        )}
      </header>

      {/* Animated background elements - más sutiles */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <Atom className="absolute -left-10 top-1/4 h-32 w-32 text-primary/3 animate-spin-slow opacity-30" />
        <Pizza className="absolute -right-12 bottom-1/3 h-28 w-28 text-primary/3 animate-spin-slow opacity-30" style={{ animationDelay: '5s', animationDirection: 'reverse' }}/>
        <Dna className="absolute left-1/4 bottom-10 h-24 w-24 text-primary/3 animate-spin-slow opacity-30" style={{ animationDelay: '2s' }} />
        <Asterisk className="absolute right-1/4 top-16 h-20 w-20 text-primary/3 animate-spin-slow opacity-30" style={{ animationDelay: '8s' }} />
      </div>
      
      <div className="flex flex-col items-center justify-center w-full max-w-[90vw] lg:max-w-[85vw] xl:max-w-[80vw] mx-auto space-y-4 md:space-y-6">
        {children}
      </div>

    </div>
  );
};
