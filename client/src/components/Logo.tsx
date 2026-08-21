import React from "react";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  height?: number | string;
}

export default function Logo({ variant = "light", className = "h-12 w-auto", height = 48 }: LogoProps) {
  const isDark = variant === "dark";

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Vektörel Vinç İkon Rozeti */}
      <div className="relative flex-shrink-0">
        <svg
          width={height}
          height={height}
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rounded-xl shadow-md transition-transform hover:scale-105"
        >
          <defs>
            <linearGradient id="logoOrange" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>
            <linearGradient id="logoShield" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>

          {/* Kalkan Arka Plan */}
          <rect width="56" height="56" rx="14" fill="url(#logoShield)" />

          {/* Vinç Bomu */}
          <path d="M12 44 L36 14 L44 14 L20 44 Z" fill="url(#logoOrange)" />

          {/* Çelik Mafsal Pimleri */}
          <circle cx="16" cy="40" r="2.5" fill="#ffffff" />
          <circle cx="40" cy="18" r="2.5" fill="#ffffff" />

          {/* Çelik Halat & Kanca */}
          <line x1="40" y1="20" x2="40" y2="28" stroke="#fb923c" strokeWidth="2.5" strokeLinecap="round" />
          <path
            d="M40 28 C40 35 32 35 32 31 C32 28 36 28 36 31"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Yazı Bölümü */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-black tracking-tight text-xl md:text-2xl font-mono ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            ARAZ
          </span>
          <span className="font-black tracking-tight text-xl md:text-2xl text-orange-600">
            VİNÇ
          </span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[10px] font-extrabold tracking-wider px-1.5 py-0.5 rounded bg-orange-600/10 text-orange-600 uppercase">
            Salihli
          </span>
          <span className={`text-[10px] font-semibold tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
            7/24 Hizmet
          </span>
        </div>
      </div>
    </div>
  );
}
