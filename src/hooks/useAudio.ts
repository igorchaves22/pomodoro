import { useCallback, useEffect, useRef } from "react";

type AudioRef = HTMLAudioElement | null;

const INITIAL_AUDIO = null;

export const useAudio = (soundSrc: string) => {
    const audioRef = useRef<AudioRef>(INITIAL_AUDIO);

    const playSound = useCallback(() => {
        if (!audioRef.current) return;

        audioRef.current.currentTime = 0;
        audioRef.current.play().catch((err) => console.warn("Unable to play audio:", err));
    }, []);

    useEffect(() => {
        const audio = new Audio(soundSrc);
        audio.load();
        audioRef.current = audio;

        return () => {
            audio.pause();
            audioRef.current = INITIAL_AUDIO;
        };
    }, [soundSrc]);

    return { playSound };
};
