import cn from 'classnames';
import { FC, memo } from 'react';

import { useAuth } from '@/hooks/useAuth';

import styles from './VideoPlayer.module.scss';

import { MaterialIcon } from '../material-icon';

import { AuthPlaceholder } from './auth-placeholder/AuthPlaceholder';
import { useVideo } from './useVideo';

interface VideoPlayerProps {
  videoSource: string;
  slug: string;
}

const VideoPlayer: FC<VideoPlayerProps> = memo(({ slug, videoSource }) => {
  const { actions, videoRef, video, movieTime, movieLength } = useVideo();
  const { user } = useAuth();

  const blockWithTime = `${movieTime} / ${movieLength}`;

  return (
    <div className={cn(styles.wrapper, 'h-96' && !user)}>
      {user ? (
        <>
          <video
            ref={videoRef}
            className={styles.video}
            src={`${videoSource}#t=8`}
            preload='metadata'
          />

          <div className={styles.progressBarContainer}>
            <div
              style={{ width: `${video.progress}%` }}
              className={styles.progressBar}
            />
          </div>

          <div className={styles.controls}>
            <div>
              <button onClick={actions.revertVideo}>
                <MaterialIcon name='MdHistory' />
              </button>

              <button
                onClick={actions.toggleVideo}
                className={styles.playButton}
              >
                <MaterialIcon
                  name={video.isPlaying ? 'MdPause' : 'MdPlayArrow'}
                />
              </button>

              <button onClick={actions.forwardVideo}>
                <MaterialIcon name='MdUpdate' />
              </button>

              <p className={styles.timeControls}>{blockWithTime}</p>
            </div>

            <div>
              <button onClick={actions.fullScreen}>
                <MaterialIcon name='MdFullscreen' />
              </button>
            </div>
          </div>
        </>
      ) : (
        <AuthPlaceholder slug={slug} />
      )}
    </div>
  );
});

export default VideoPlayer;

// If you wanna add change quality buttons
//kmoskwiak.github.io/videojs-resolution-switcher/
//https://stackoverflow.com/questions/38626993/change-video-quality-with-sources-pointing-to-different-quality-versions
