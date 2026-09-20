import React, { useState, useRef, useEffect } from 'react';
import { Music, VolumeX, Phone } from 'lucide-react';

function FloatingActions({ contactNumber, audioTrackUrl, contact, musicUrl }) {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioElementRef = useRef(null);
  const userHasInteractedRef = useRef(false);

  const activeContactNumber = contactNumber || contact || '+91 6364469555';
  const activeMusicTrackUrl = audioTrackUrl || musicUrl || '/assets/music_track.mp3';

  useEffect(() => {
    const audioElement = audioElementRef.current;
    if (!audioElement) return;

    const handlePlayEvent = () => setIsAudioPlaying(true);
    const handlePauseEvent = () => setIsAudioPlaying(false);

    audioElement.addEventListener('play', handlePlayEvent);
    audioElement.addEventListener('pause', handlePauseEvent);

    return () => {
      audioElement.removeEventListener('play', handlePlayEvent);
      audioElement.removeEventListener('pause', handlePauseEvent);
    };
  }, []);

  useEffect(() => {
    const handleFirstGesture = () => {
      if (userHasInteractedRef.current) return;
      userHasInteractedRef.current = true;
      const audioElement = audioElementRef.current;
      if (audioElement && audioElement.paused) {
        audioElement
          .play()
          .then(() => setIsAudioPlaying(true))
          .catch(() => {});
      }
    };

    window.addEventListener('click', handleFirstGesture, { once: true });
    window.addEventListener('touchstart', handleFirstGesture, { once: true });

    return () => {
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
    };
  }, []);

  const handleToggleMusic = (event) => {
    event.stopPropagation();
    userHasInteractedRef.current = true;
    const audioElement = audioElementRef.current;
    if (!audioElement) return;

    if (!audioElement.paused) {
      audioElement.pause();
      setIsAudioPlaying(false);
    } else {
      audioElement
        .play()
        .then(() => setIsAudioPlaying(true))
        .catch((playbackError) => {
          console.log('Audio playback error:', playbackError);
        });
    }
  };

  return (
    <>
      <audio
        ref={audioElementRef}
        src={activeMusicTrackUrl}
        loop
        preload="auto"
      />

      {/* Direct Call Button */}
      <a
        className="floating-action-btn floating-action-btn--call"
        href={`tel:${activeContactNumber}`}
        aria-label="Call for details"
        title="Call for wedding details"
      >
        <Phone size={24} />
      </a>

      {/* Background Music Toggle */}
      <button
        type="button"
        className={`floating-action-btn floating-action-btn--music ${isAudioPlaying ? 'floating-action-btn--active' : ''}`}
        onClick={handleToggleMusic}
        aria-label={isAudioPlaying ? 'Pause celebration music' : 'Play celebration music'}
        title={isAudioPlaying ? 'Pause celebration music' : 'Play celebration music'}
      >
        {isAudioPlaying ? <Music size={26} /> : <VolumeX size={26} />}
      </button>
    </>
  );
}

export default FloatingActions;
