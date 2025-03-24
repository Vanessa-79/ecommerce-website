import { createContext, useContext, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}

interface LoadingProviderProps {
  children: ReactNode;
}

export default function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <div className="bg-white rounded-lg p-8 flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-gray-200 border-t-black rounded-full animate-spin" />
            <p className="mt-4 text-gray-600">Loading...</p>
          </div>
        </motion.div>
      )}
    </LoadingContext.Provider>
  );
}