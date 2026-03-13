import { useCallback, useEffect, useRef } from "react";

type AudioRef = null | HTMLAudioElement;

export const useAudio = (soundSrc: string) => {
    const audioRef = useRef<AudioRef>(null);

    const playSound = useCallback(() => {
        if (!audioRef.current) return;

        audioRef.current.currentTime = 0;
        audioRef.current.play();
    }, []);

    useEffect(() => {
        audioRef.current = new Audio(soundSrc);
        audioRef.current.load();
    }, [soundSrc]);

    return { playSound };
};
