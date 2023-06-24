import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

interface IVideoElement extends HTMLVideoElement {
  msRequestFullscreen?: () => void;
  mozRequestFullScreen?: () => void;
  webkitRequestFullscreen?: () => void;
}

export const useVideo = () => {
  const videoRef = useRef<IVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const originalDuration = videoRef.current?.duration;

    if (originalDuration) {
      setVideoTime(originalDuration);
    }
  }, [videoRef.current?.duration]);

  const toggleVideo = useCallback(() => {
    if (isPlaying) {
      videoRef.current?.pause();
      setIsPlaying(false);
    } else {
      videoRef.current?.play();
      setIsPlaying(true);
    }
  }, [isPlaying]);

  const forwardVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10;
    }
  };

  const revertVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10;
    }
  };

  const fullScreen = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
  };

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const updateProgress = () => {
      setCurrentTime(video.currentTime);
      setProgress((video.currentTime / videoTime) * 100);
    };

    video.addEventListener('timeupdate', updateProgress);

    return () => {
      video.removeEventListener('timeupdate', updateProgress);
    };
  }, [videoTime]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight': {
          forwardVideo();
          break;
        }

        case 'ArrowLeft': {
          revertVideo();
          break;
        }

        case ' ': {
          e.preventDefault();
          toggleVideo();
          break;
        }

        case 'f': {
          fullScreen();
          break;
        }

        default: {
          return;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleVideo]);

  const movieTime =
    Math.floor(currentTime / 60) +
    ':' +
    ('0' + Math.floor(currentTime % 60)).slice(-2);

  const movieLength =
    Math.floor(videoTime / 60) +
    ':' +
    ('0' + Math.floor(videoTime % 60)).slice(-2);

  const value = useMemo(
    () => ({
      videoRef,
      movieTime,
      movieLength,
      actions: {
        toggleVideo,
        forwardVideo,
        revertVideo,
        fullScreen,
      },
      video: {
        isPlaying,
        currentTime,
        progress,
        videoTime,
      },
    }),
    [currentTime, progress, isPlaying, videoTime, toggleVideo]
  );

  return value;
};
