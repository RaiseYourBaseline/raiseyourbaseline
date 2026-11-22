"use client";

import { useRef, useState } from "react";

export default function LbrKnotPlayer({
  videoUrl,
  musicUrl,
}: {
  videoUrl?: string;
  musicUrl?: string;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [musicOn, setMusicOn] = useState(false);

  function toggleMusic() {
    const audio = audioRef.current;
    if (!audio) return;
    if (musicOn) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setMusicOn(!musicOn);
  }

  return (
    <div className="mt-8">
      {videoUrl ? (
        <video
          src={videoUrl}
          controls
          playsInline
          className="w-full rounded-lg border border-lbr-line"
        />
      ) : (
        <div className="flex aspect-video w-full items-center justify-center rounded-lg border border-lbr-line bg-lbr-black/40">
          <p className="text-[11px] uppercase tracking-[0.2em] text-lbr-silverMuted">
            Video coming soon
          </p>
        </div>
      )}

      {musicUrl && (
        <>
          <audio ref={audioRef} src={musicUrl} loop />
          <button
            type="button"
            onClick={toggleMusic}
            className="mt-3 text-[11px] uppercase tracking-[0.2em] text-lbr-silverMuted transition-colors hover:text-lbr-silver"
          >
            {musicOn ? "Pause music" : "Play music"}
          </button>
        </>
      )}
    </div>
  );
}
