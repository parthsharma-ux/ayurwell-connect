import { Mic } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCallback, useRef } from 'react';

interface VoiceSearchButtonProps {
  isListening: boolean;
  isSupported: boolean;
  onStart: () => void;
  onStop: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  mode?: 'toggle' | 'push-to-talk';
}

const VoiceSearchButton = ({ 
  isListening, 
  isSupported, 
  onStart,
  onStop,
  className,
  size = 'md',
  mode = 'push-to-talk'
}: VoiceSearchButtonProps) => {
  const holdTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const handlePointerDown = useCallback(() => {
    if (mode === 'push-to-talk') {
      // Small delay to avoid accidental taps
      holdTimeoutRef.current = setTimeout(() => {
        onStart();
      }, 100);
    }
  }, [mode, onStart]);

  const handlePointerUp = useCallback(() => {
    if (holdTimeoutRef.current) {
      clearTimeout(holdTimeoutRef.current);
      holdTimeoutRef.current = null;
    }
    if (mode === 'push-to-talk' && isListening) {
      onStop();
    }
  }, [mode, isListening, onStop]);

  const handleClick = useCallback(() => {
    if (mode === 'toggle') {
      if (isListening) {
        onStop();
      } else {
        onStart();
      }
    }
    // For push-to-talk, click does nothing (handled by pointer events)
  }, [mode, isListening, onStart, onStop]);

  if (!isSupported) return null;

  return (
    <button
      type="button"
      onClick={handleClick}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onContextMenu={(e) => e.preventDefault()}
      className={cn(
        'flex items-center justify-center rounded-full transition-all duration-300 select-none touch-none',
        sizeClasses[size],
        isListening 
          ? 'bg-primary text-primary-foreground animate-pulse shadow-glow-terracotta scale-110' 
          : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground',
        className
      )}
      title={mode === 'push-to-talk' ? 'Hold to speak' : (isListening ? 'Stop listening' : 'Search by voice')}
      aria-label={mode === 'push-to-talk' ? 'Hold to speak' : (isListening ? 'Stop voice search' : 'Start voice search')}
    >
      <Mic className={cn(iconSizes[size], isListening && 'animate-pulse')} />
      {isListening && mode === 'push-to-talk' && (
        <span className="absolute -bottom-6 text-[10px] font-medium text-primary whitespace-nowrap">
          Release to send
        </span>
      )}
    </button>
  );
};

export default VoiceSearchButton;
