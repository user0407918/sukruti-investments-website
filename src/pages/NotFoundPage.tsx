import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="pt-40 pb-28 min-h-[70vh] flex items-center justify-center bg-[#F7F8F4] px-4">
      <div className="max-w-md w-full text-center p-8 sm:p-12 bg-[#fffefa] rounded-3xl border border-[#DFE6DF] shadow-xs">
        <span className="font-mono text-sm font-semibold text-[#00B7A5] tracking-widest uppercase block mb-3">
          404 Error
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#103D3B] font-normal mb-4">
          Page Not Found
        </h1>
        <p className="text-sm text-[#707B75] leading-relaxed mb-8">
          The requested address is not available. Please verify the URL or return to the Sukriti Investments homepage.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#103D3B] hover:bg-[#087F7C] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#DFE6DF]/50 text-[#103D3B] border border-[#DFE6DF] text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};
