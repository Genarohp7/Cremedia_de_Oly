"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { FeaturedHomeSlide } from "@/data/home";

const AUTOPLAY_DELAY = 5000;
const MANUAL_PAUSE = 8000;
const SWIPE_THRESHOLD = 48;

export function HomeProductCarousel({ slides }: { slides: FeaturedHomeSlide[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [manualPause, setManualPause] = useState(false);
  const [isDocumentHidden, setIsDocumentHidden] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const pointerStart = useRef<number | null>(null);
  const isPaused = isHovering || hasFocus || manualPause || isDocumentHidden;

  const moveSlide = useCallback((offset: number) => {
    setActiveIndex((index) => (index + offset + slides.length) % slides.length);
    setManualPause(true);
  }, [slides.length]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(media.matches);
    updatePreference();
    media.addEventListener("change", updatePreference);
    return () => media.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const updateVisibility = () => setIsDocumentHidden(document.hidden);
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () => document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  useEffect(() => {
    if (!manualPause) return;
    const timeout = window.setTimeout(() => setManualPause(false), MANUAL_PAUSE);
    return () => window.clearTimeout(timeout);
  }, [manualPause, activeIndex]);

  useEffect(() => {
    if (prefersReducedMotion || isPaused || slides.length < 2) return;
    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, AUTOPLAY_DELAY);
    return () => window.clearInterval(interval);
  }, [isPaused, prefersReducedMotion, slides.length]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch" || event.pointerType === "pen") {
      pointerStart.current = event.clientX;
    }
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pointerStart.current === null) return;
    const distance = event.clientX - pointerStart.current;
    pointerStart.current = null;
    if (Math.abs(distance) < SWIPE_THRESHOLD) return;
    moveSlide(distance < 0 ? 1 : -1);
  };

  return (
    <div
      aria-label="Escaparate de productos destacados"
      className={`home-product-carousel${isPaused ? " is-paused" : ""}`}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setHasFocus(false);
      }}
      onFocus={() => setHasFocus(true)}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") moveSlide(-1);
        if (event.key === "ArrowRight") moveSlide(1);
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      tabIndex={0}
    >
      <div
        className="home-product-carousel-viewport"
        onPointerCancel={() => { pointerStart.current = null; }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        {slides.map((slide, index) => (
          <figure
            aria-hidden={index !== activeIndex}
            className={`home-product-slide is-${slide.fit}${index === activeIndex ? " is-active" : ""}`}
            key={slide.id}
          >
            <Image
              alt={index === activeIndex ? slide.alt : ""}
              height={slide.height}
              loading={index === 0 ? "eager" : "lazy"}
              priority={index === 0}
              sizes="(min-width: 900px) 56vw, 92vw"
              src={slide.image}
              width={slide.width}
            />
          </figure>
        ))}
      </div>

      <div className="home-product-carousel-meta" aria-live="polite">
        <div>
          <span>{slides[activeIndex]?.category}</span>
          <strong>{slides[activeIndex]?.label}</strong>
        </div>
        <span className="home-product-carousel-count">
          {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      <div className="home-product-carousel-progress" aria-hidden="true">
        <span key={`${activeIndex}-${isPaused}`} />
      </div>

      <div className="home-product-carousel-controls">
        <button aria-label="Mostrar producto anterior" onClick={() => moveSlide(-1)} type="button">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <button aria-label="Mostrar producto siguiente" onClick={() => moveSlide(1)} type="button">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </div>
    </div>
  );
}
