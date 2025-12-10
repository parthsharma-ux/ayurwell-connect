import { Mic, MicOff, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VoiceSearchButtonProps {
  isListening: boolean;
  isSupported: boolean;
  onClick: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const VoiceSearchButton = ({ 
  isListening, 
  isSupported, 
  onClick, 
  className,
  size = 'md'
}: VoiceSearchButtonProps) => {
  if (!isSupported) return null;

  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
  };

  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'flex items-center justify-center rounded-full transition-all duration-300',
        sizeClasses[size],
        isListening 
          ? 'bg-primary text-primary-foreground animate-pulse shadow-glow-terracotta' 
          : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground',
        className
      )}
      title={isListening ? 'Stop listening' : 'Search by voice'}
      aria-label={isListening ? 'Stop voice search' : 'Start voice search'}
    >
      {isListening ? (
        <Mic className={cn(iconSizes[size], 'animate-pulse')} />
      ) : (
        <Mic className={iconSizes[size]} />
      )}
    </button>
  );
};

export default VoiceSearchButton;
