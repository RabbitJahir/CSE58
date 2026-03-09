// src/components/LazyVideo.js
import React, { useRef, useState, useEffect } from "react";

const LazyVideo = ({ src, width = 159, style }) => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // stop observing after it's visible
        }
      },
      { threshold: 0.1 } // trigger when 10% is visible
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={videoRef}>
      {isVisible && (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          style={{ width, height: "auto", borderRadius: "8px", ...style }}
        />
      )}
    </div>
  );
};

export default LazyVideo;