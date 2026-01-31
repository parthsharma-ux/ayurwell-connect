import { useState, useCallback, useEffect, useRef } from 'react';

// Type declarations for Web Speech API
interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
  resultIndex: number;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
}

interface SpeechRecognitionResult {
  isFinal: boolean;
  [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

interface SpeechRecognitionResultList {
  length: number;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionInstance extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  maxAlternatives: number;
  onstart: (() => void) | null;
  onaudiostart: (() => void) | null;
  onspeechstart: (() => void) | null;
  onspeechend: (() => void) | null;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
  abort: () => void;
}

declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognitionInstance;
    webkitSpeechRecognition: new () => SpeechRecognitionInstance;
  }
}

interface UseVoiceSearchOptions {
  onResult: (transcript: string) => void;
  onError?: (error: string) => void;
  language?: string;
}

export const useVoiceSearch = ({ onResult, onError, language = 'en-IN' }: UseVoiceSearchOptions) => {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [interimTranscript, setInterimTranscript] = useState('');
  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  const shouldKeepListeningRef = useRef(false);
  const finalReceivedRef = useRef(false);
  const accumulatedTranscriptRef = useRef('');

  useEffect(() => {
    // Check for browser support - enhanced mobile detection
    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    // Check if we're on a mobile device and if speech recognition is available
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const hasSupport = !!SpeechRecognitionAPI;
    
    setIsSupported(hasSupport);

    if (SpeechRecognitionAPI) {
      const recognition = new SpeechRecognitionAPI();
      
      // Mobile-optimized settings
      recognition.continuous = !isMobile; // Disable continuous on mobile for better reliability
      recognition.interimResults = true;
      recognition.lang = language;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        console.log('Voice recognition started');
        setIsListening(true);
        setInterimTranscript('');
        accumulatedTranscriptRef.current = '';
      };

      recognition.onaudiostart = () => {
        console.log('Audio capture started');
      };

      recognition.onspeechstart = () => {
        console.log('Speech detected');
      };

      recognition.onspeechend = () => {
        console.log('Speech ended');
      };

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        let interim = '';
        let final = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            final += transcript;
          } else {
            interim += transcript;
          }
        }

        // Accumulate transcripts for mobile where results come in chunks
        if (final) {
          accumulatedTranscriptRef.current += final;
        }

        const displayText = accumulatedTranscriptRef.current + interim;
        setInterimTranscript(displayText || final);

        // On mobile, handle final result immediately
        if (final && isMobile) {
          console.log('Final transcript (mobile):', accumulatedTranscriptRef.current);
          finalReceivedRef.current = true;
          onResult(accumulatedTranscriptRef.current.trim());
          setInterimTranscript('');
          shouldKeepListeningRef.current = false;
          try {
            recognition.stop();
          } catch (e) {
            console.warn('Error stopping recognition:', e);
          }
        } else if (final && !isMobile) {
          console.log('Final transcript:', final);
          finalReceivedRef.current = true;
          onResult(final.trim());
          setInterimTranscript('');
          shouldKeepListeningRef.current = false;
          recognition.stop();
        }
      };

      recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
        console.error('Voice recognition error:', event.error);
        
        // Don't set listening to false on 'no-speech' if we should keep listening
        if (event.error === 'no-speech' && shouldKeepListeningRef.current) {
          console.log('No speech detected, but keeping listener active');
          return;
        }
        
        setIsListening(false);
        setInterimTranscript('');
        
        let errorMessage = 'Voice recognition failed';
        switch (event.error) {
          case 'no-speech':
            errorMessage = language.startsWith('hi') 
              ? 'Koi awaaz nahi suni. Phir se bolein.' 
              : 'No speech detected. Please try again.';
            break;
          case 'audio-capture':
            errorMessage = language.startsWith('hi')
              ? 'Microphone nahi mila. Device check karein.'
              : 'No microphone found. Please check your device.';
            break;
          case 'not-allowed':
            errorMessage = language.startsWith('hi')
              ? 'Microphone permission denied. Browser settings mein allow karein.'
              : 'Microphone access denied. Please allow in browser settings.';
            break;
          case 'network':
            errorMessage = language.startsWith('hi')
              ? 'Network error. Connection check karein.'
              : 'Network error. Please check your connection.';
            break;
          case 'aborted':
            // User stopped, not an error
            return;
        }
        
        onError?.(errorMessage);
      };

      recognition.onend = () => {
        console.log('Voice recognition ended');
        setIsListening(false);

        // On mobile, if we have accumulated transcript but no final was received, send it
        if (isMobile && accumulatedTranscriptRef.current && !finalReceivedRef.current) {
          console.log('Sending accumulated transcript on end:', accumulatedTranscriptRef.current);
          onResult(accumulatedTranscriptRef.current.trim());
          accumulatedTranscriptRef.current = '';
        }

        // Restart if needed (desktop only)
        if (!isMobile && shouldKeepListeningRef.current && !finalReceivedRef.current) {
          setTimeout(() => {
            try {
              recognition.start();
            } catch (e) {
              console.warn('Voice recognition restart failed:', e);
            }
          }, 250);
        }

        finalReceivedRef.current = false;
      };

      recognitionRef.current = recognition;
    }

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (e) {
          // Ignore errors on cleanup
        }
      }
    };
  }, [language, onResult, onError]);

  const startListening = useCallback(() => {
    if (recognitionRef.current && !isListening) {
      try {
        shouldKeepListeningRef.current = true;
        finalReceivedRef.current = false;
        accumulatedTranscriptRef.current = '';
        recognitionRef.current.start();
      } catch (error) {
        console.error('Error starting recognition:', error);
        // If already started, try stopping and restarting
        try {
          recognitionRef.current.stop();
          setTimeout(() => {
            recognitionRef.current?.start();
          }, 100);
        } catch (e) {
          console.error('Failed to restart recognition:', e);
        }
      }
    }
  }, [isListening]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      shouldKeepListeningRef.current = false;
      try {
        recognitionRef.current.stop();
      } catch (e) {
        console.warn('Error stopping recognition:', e);
      }
    }
  }, []);

  const toggleListening = useCallback(() => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  }, [isListening, startListening, stopListening]);

  return {
    isListening,
    isSupported,
    interimTranscript,
    startListening,
    stopListening,
    toggleListening,
  };
};
