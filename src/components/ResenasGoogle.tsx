"use client";
import { useState, useEffect, useRef } from "react";
import { reviews, RATING_GLOBAL, TOTAL_RESENAS, Review } from "@/lib/reviews";

const AUTOPLAY_MS = 6_000;
const RESUME_MS   = 120_000;

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg className={`w-4 h-4 ${filled ? "text-yellow-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function Stars({ n, size = "sm" }: { n: number; size?: "sm" | "md" }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <svg
          key={i}
          className={`${size === "md" ? "w-5 h-5" : "w-4 h-4"} ${i <= n ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function TarjetaResena({ review }: { review: Review }) {
  return (
    <div className="border border-gray-100 p-6 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-white font-bold text-sm shrink-0">
          {review.nombre.charAt(0).toUpperCase()}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-navy-900 text-sm truncate">{review.nombre}</span>
            <GoogleIcon />
          </div>
          <p className="text-xs text-gray-400">{review.fecha}</p>
        </div>
      </div>
      <Stars n={review.estrellas} />
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">{review.texto}</p>
      {review.foto && (
        <img src={review.foto} alt="" className="w-full h-32 object-cover" />
      )}
    </div>
  );
}

export default function ResenasGoogle() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused]   = useState(false);
  const inactivityRef         = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleManualNav = (fn: () => void) => {
    fn();
    setPaused(true);
    if (inactivityRef.current) clearTimeout(inactivityRef.current);
    inactivityRef.current = setTimeout(() => setPaused(false), RESUME_MS);
  };

  const next = () => setCurrent(p => (p + 1) % reviews.length);
  const prev = () => setCurrent(p => (p - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setCurrent(p => (p + 1) % reviews.length), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused]);

  useEffect(() => () => { if (inactivityRef.current) clearTimeout(inactivityRef.current); }, []);

  const visible = [0, 1, 2].map(offset => reviews[(current + offset) % reviews.length]);

  return (
    <div className="mt-16 border-t border-gray-100 pt-12">
      <p className="section-label mb-8">Lo que dicen nuestros pacientes</p>

      {/* Rating header */}
      <div className="flex items-center gap-6 mb-8 flex-wrap">
        <div className="flex items-end gap-3">
          <span className="text-5xl font-bold text-navy-900 leading-none">{RATING_GLOBAL}</span>
          <div className="pb-1">
            <Stars n={Math.round(RATING_GLOBAL)} size="md" />
            <p className="text-xs text-gray-500 mt-1">{TOTAL_RESENAS} reseñas en Google</p>
          </div>
        </div>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Cl%C3%ADnica+Veterinaria+Bulnes+Bulnes+28+Santiago"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto btn-outline text-sm py-2"
        >
          Ver todas en Google
        </a>
      </div>

      {/* 3 tarjetas — desktop */}
      <div className="hidden md:grid grid-cols-3 gap-4">
        {visible.map((r, i) => (
          <TarjetaResena key={`${r.nombre}-${current}-${i}`} review={r} />
        ))}
      </div>

      {/* 1 tarjeta — móvil */}
      <div className="md:hidden">
        <TarjetaResena review={visible[0]} />
      </div>

      {/* Controles */}
      <div className="flex items-center gap-4 mt-6">
        <button
          onClick={() => handleManualNav(prev)}
          className="w-9 h-9 border border-gray-200 hover:border-navy-800 hover:bg-navy-800 hover:text-white text-navy-800 flex items-center justify-center transition-colors"
          aria-label="Anterior"
        >
          ‹
        </button>
        <button
          onClick={() => handleManualNav(next)}
          className="w-9 h-9 border border-gray-200 hover:border-navy-800 hover:bg-navy-800 hover:text-white text-navy-800 flex items-center justify-center transition-colors"
          aria-label="Siguiente"
        >
          ›
        </button>

        <div className="flex gap-1.5 ml-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => handleManualNav(() => setCurrent(i))}
              className={`h-1.5 transition-all duration-300 ${
                i === current ? "w-6 bg-navy-800" : "w-1.5 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Ir a reseña ${i + 1}`}
            />
          ))}
        </div>

        <span className="ml-auto flex items-center gap-2 text-xs text-gray-300">
          {paused && <span title="Reanuda en 2 min">⏸</span>}
          {current + 1} / {reviews.length}
        </span>
      </div>
    </div>
  );
}
