"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface AmbientAudioProps {
  mode: "dawn" | "dusk";
}

export const AmbientAudio: React.FC<AmbientAudioProps> = ({ mode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume] = useState(0.5);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Stop current audio generator
  const stopAudio = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
      audioCtxRef.current.close().catch(() => {});
      audioCtxRef.current = null;
    }
    gainNodeRef.current = null;
  };

  // Start synthesized audio based on mode
  const startAudio = () => {
    stopAudio();

    const AudioContextClass =
      window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    audioCtxRef.current = ctx;

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(volume * 0.35, ctx.currentTime);
    masterGain.connect(ctx.destination);
    gainNodeRef.current = masterGain;

    if (mode === "dawn") {
      // 1. Soft pink noise for gentle morning breeze
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        output[i] = (b0 + b1 + b2) * 0.04;
      }
      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Low pass filter for soft breeze
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(450, ctx.currentTime);

      whiteNoise.connect(filter);
      filter.connect(masterGain);
      whiteNoise.start();

      // 2. Periodic gentle bird chirps
      const playBirdChirp = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state === "closed") return;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const chirpGain = ctx.createGain();

        const baseFreq = 2200 + Math.random() * 800;
        osc.type = "sine";
        osc.frequency.setValueAtTime(baseFreq, now);
        osc.frequency.exponentialRampToValueAtTime(baseFreq + 600, now + 0.08);
        osc.frequency.exponentialRampToValueAtTime(baseFreq - 200, now + 0.16);

        chirpGain.gain.setValueAtTime(0.001, now);
        chirpGain.gain.linearRampToValueAtTime(0.04, now + 0.04);
        chirpGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);

        osc.connect(chirpGain);
        chirpGain.connect(masterGain);

        osc.start(now);
        osc.stop(now + 0.2);
      };

      timerRef.current = setInterval(() => {
        if (Math.random() > 0.3) {
          playBirdChirp();
          if (Math.random() > 0.5) {
            setTimeout(playBirdChirp, 140);
          }
        }
      }, 2400);
    } else {
      // DUSK: Campfire crackles & soft night warmth
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        output[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = output[i];
        output[i] *= 0.25;
      }
      const fireNoise = ctx.createBufferSource();
      fireNoise.buffer = noiseBuffer;
      fireNoise.loop = true;

      const fireFilter = ctx.createBiquadFilter();
      fireFilter.type = "bandpass";
      fireFilter.frequency.setValueAtTime(320, ctx.currentTime);
      fireFilter.Q.setValueAtTime(1.2, ctx.currentTime);

      fireNoise.connect(fireFilter);
      fireFilter.connect(masterGain);
      fireNoise.start();

      // Sharp subtle wood crackles
      const playWoodCrackle = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state === "closed") return;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const crackleGain = ctx.createGain();

        osc.type = "triangle";
        osc.frequency.setValueAtTime(150 + Math.random() * 600, now);

        crackleGain.gain.setValueAtTime(0.08, now);
        crackleGain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

        osc.connect(crackleGain);
        crackleGain.connect(masterGain);

        osc.start(now);
        osc.stop(now + 0.04);
      };

      timerRef.current = setInterval(() => {
        if (Math.random() > 0.4) {
          playWoodCrackle();
        }
      }, 500);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopAudio();
      setIsPlaying(false);
    } else {
      startAudio();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      startAudio();
    }
    return () => stopAudio();
  }, [mode]);

  useEffect(() => {
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(
        volume * 0.35,
        audioCtxRef.current.currentTime
      );
    }
  }, [volume]);

  return (
    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs select-none">
      <button
        onClick={togglePlay}
        className="flex items-center gap-1.5 hover:text-[#D8BA74] transition-colors cursor-pointer"
        aria-label={isPlaying ? "Mute ambient retreat audio" : "Play ambient retreat soundscape"}
      >
        {isPlaying ? (
          <>
            <Volume2 size={15} className="text-[#D8BA74]" />
            <span className="font-mono text-[10px] tracking-wider uppercase text-[#EFE8DC]">
              {mode === "dawn" ? "Dawn Breeze" : "Fireplace Embers"}
            </span>
          </>
        ) : (
          <>
            <VolumeX size={15} className="opacity-70" />
            <span className="font-mono text-[10px] tracking-wider uppercase opacity-80">
              Listen to Ambiance
            </span>
          </>
        )}
      </button>

      {isPlaying && (
        <div className="flex items-center gap-1 pl-1 border-l border-white/20">
          <span className="w-1 h-3 bg-[#D8BA74] rounded-full animate-pulse" />
          <span className="w-1 h-4 bg-[#D8BA74] rounded-full animate-pulse [animation-delay:200ms]" />
          <span className="w-1 h-2 bg-[#D8BA74] rounded-full animate-pulse [animation-delay:400ms]" />
        </div>
      )}
    </div>
  );
};
