import { motion } from 'framer-motion';

interface LoadingSkeletonProps {
  className?: string;
  count?: number;
}

export default function LoadingSkeleton({ className = '', count = 1 }: LoadingSkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
          className={`bg-gray-200 rounded-lg ${className}`}
        />
      ))}
    </>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="group relative bg-white rounded-lg shadow-sm overflow-hidden">
      <LoadingSkeleton className="aspect-square w-full" />
      <div className="p-4 space-y-3">
        <LoadingSkeleton className="h-6 w-3/4" />
        <LoadingSkeleton className="h-5 w-1/2" />
        <div className="flex justify-between items-center">
          <LoadingSkeleton className="h-4 w-1/3" />
          <LoadingSkeleton className="h-8 w-8 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function CategoryCardSkeleton() {
  return (
    <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
      <LoadingSkeleton className="w-full h-full" />
      <div className="absolute inset-x-0 bottom-0 p-4 space-y-2">
        <LoadingSkeleton className="h-6 w-2/3 mx-auto" />
        <LoadingSkeleton className="h-4 w-1/2 mx-auto" />
      </div>
    </div>
  );
}