
import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageModalProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-green-400 transition-colors z-[110]"
      >
        <X size={32} />
      </button>

      <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
        <button 
          onClick={onPrev}
          className="absolute left-0 p-4 text-white hover:text-green-400 transition-colors hidden md:block"
        >
          <ChevronLeft size={48} />
        </button>
        
        <img 
          src={images[currentIndex]} 
          className="max-w-full max-h-full object-contain animate-in zoom-in-95 duration-300" 
          alt={`Gallery ${currentIndex}`} 
        />

        <button 
          onClick={onNext}
          className="absolute right-0 p-4 text-white hover:text-green-400 transition-colors hidden md:block"
        >
          <ChevronRight size={48} />
        </button>
      </div>

      <div className="mt-6 flex gap-2 overflow-x-auto max-w-full py-2">
        {images.map((img, i) => (
          <img 
            key={i} 
            src={img} 
            className={`h-16 w-16 object-cover cursor-pointer rounded-lg border-2 transition-all ${
              i === currentIndex ? 'border-green-500 scale-110' : 'border-transparent opacity-50'
            }`}
            onClick={(e) => {
              e.stopPropagation();
              // In a real app we'd trigger the index change here
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageModal;
