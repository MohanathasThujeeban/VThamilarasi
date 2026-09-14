import React, { useEffect, useRef, useState } from "react";
import videoSrc from "@/assets/thamilmp4.mp4";

export const CinematicVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  // Non-blocking seek refs
  const currentSeekRef = useRef<number>(0);
  const targetSeekRef = useRef<number>(0);
  const durationRef = useRef<number>(0);
  const isSeekingRef = useRef<boolean>(false);

  // Parallax refs
  const targetMouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const currentMouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const mousePosPxRef = useRef<{ x: number; y: number }>({ x: 50, y: 50 });

  const [progressPercent, setProgressPercent] = useState<number>(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    const updateDuration = () => {
      const dur = video.duration;
      if (dur && !isNaN(dur) && dur > 0) {
        durationRef.current = dur;
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress =
          docHeight > 0
            ? Math.max(0, Math.min(1, window.scrollY / docHeight))
            : 0;
        targetSeekRef.current = progress * Math.max(0, dur - 0.05);
      }
    };

    const performSeek = () => {
      if (!videoRef.current || isSeekingRef.current) return;
      const target = currentSeekRef.current;
      const diff = Math.abs(videoRef.current.currentTime - target);

      // Fine precision frame update threshold (>0.005s) for silky-smooth motion
      if (diff > 0.005) {
        isSeekingRef.current = true;
        try {
          if (
            "fastSeek" in videoRef.current &&
            typeof (videoRef.current as any).fastSeek === "function"
          ) {
            (videoRef.current as any).fastSeek(target);
          } else {
            videoRef.current.currentTime = target;
          }
        } catch {
          isSeekingRef.current = false;
        }
      }
    };

    const handleSeeked = () => {
      isSeekingRef.current = false;
      performSeek();
    };

    const handleSeeking = () => {
      isSeekingRef.current = true;
    };

    video.addEventListener("loadedmetadata", updateDuration);
    video.addEventListener("durationchange", updateDuration);
    video.addEventListener("canplay", updateDuration);
    video.addEventListener("loadeddata", updateDuration);
    video.addEventListener("seeked", handleSeeked);
    video.addEventListener("seeking", handleSeeking);

    updateDuration();

    // Scroll progress handler
    const handleScroll = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        docHeight > 0 ? Math.max(0, Math.min(1, window.scrollY / docHeight)) : 0;

      const dur = durationRef.current || video.duration || 0;
      if (dur > 0) {
        targetSeekRef.current = Math.max(0, Math.min(dur - 0.05, progress * dur));
      }
      setProgressPercent(progress * 100);
    };

    // Mouse movement handler
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const normX = (e.clientX / innerWidth) * 2 - 1; // -1 to 1
      const normY = (e.clientY / innerHeight) * 2 - 1; // -1 to 1

      targetMouseRef.current = { x: normX, y: normY };
      mousePosPxRef.current = {
        x: (e.clientX / innerWidth) * 100,
        y: (e.clientY / innerHeight) * 100,
      };
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    handleScroll();

    // Main Animation Loop
    let animId: number;

    const loop = () => {
      // 1. Ultra-Smooth Seek Interpolation (0.08 LERP factor for buttery frame transitions)
      const seekDiff = targetSeekRef.current - currentSeekRef.current;
      if (Math.abs(seekDiff) > 0.0001) {
        currentSeekRef.current += seekDiff * 0.08;
        performSeek();
      }

      // 2. Parallax Mouse Tilt LERP
      const mXDiff = targetMouseRef.current.x - currentMouseRef.current.x;
      const mYDiff = targetMouseRef.current.y - currentMouseRef.current.y;
      currentMouseRef.current.x += mXDiff * 0.08;
      currentMouseRef.current.y += mYDiff * 0.08;

      const dx = currentMouseRef.current.x;
      const dy = currentMouseRef.current.y;

      if (containerRef.current) {
        // Includes 35px translateY offset so subject head sits well clear of fixed header bar
        containerRef.current.style.transform = `scale(1.08) translate3d(${
          dx * -20
        }px, ${dy * -20 + 35}px, 0) rotateX(${dy * -3}deg) rotateY(${dx * 3}deg)`;
      }

      // 3. Interactive Cursor Spotlight Glow
      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(circle at ${mousePosPxRef.current.x}% ${mousePosPxRef.current.y}%, rgba(240, 160, 32, 0.28), rgba(196, 0, 36, 0.15) 35%, transparent 65%)`;
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      video.removeEventListener("loadedmetadata", updateDuration);
      video.removeEventListener("durationchange", updateDuration);
      video.removeEventListener("canplay", updateDuration);
      video.removeEventListener("loadeddata", updateDuration);
      video.removeEventListener("seeked", handleSeeked);
      video.removeEventListener("seeking", handleSeeking);
    };
  }, []);

  return (
    <>
      {/* Top Ambient Laser Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none bg-background/20">
        <div
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-primary via-red-500 to-amber-400 transition-all duration-75 shadow-[0_0_15px_rgba(240,160,32,0.9)]"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Fixed Background Engine Wrapper */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none perspective-1000">
        <div
          ref={containerRef}
          className="w-full h-full transition-transform ease-out duration-75 will-change-transform transform-gpu"
        >
          <video
            ref={videoRef}
            src={videoSrc}
            playsInline
            muted
            preload="auto"
            className="w-full h-full object-cover object-[center_32%] brightness-[1.1] contrast-[1.08] opacity-95"
          />
        </div>

        {/* Dynamic Interactive Overlays - High Visibility */}
        <div className="cine-vignette absolute inset-0 pointer-events-none z-[1] opacity-40" />
        <div
          ref={glowRef}
          id="cine-glow"
          className="cine-glow absolute inset-0 pointer-events-none z-[2] mix-blend-screen transition-opacity duration-300 opacity-80"
        />
        <div className="cine-scan absolute inset-0 pointer-events-none z-[3] opacity-20" />
        <div className="cine-grain absolute inset-0 pointer-events-none z-[4] opacity-10" />
        <div className="absolute inset-0 bg-background/20 z-[5] pointer-events-none" />
      </div>
    </>
  );
};

export default CinematicVideo;
