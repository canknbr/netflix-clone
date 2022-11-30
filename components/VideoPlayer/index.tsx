import { View, Text } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import { Video } from 'expo-av';
import styles from './styles';
interface IVideoPlayer {
  episode: {
    id: string;
    title: string;
    poster: string;
    duration: string;
    plot: string;
    video: string;
  };
}
const VideoPlayer = ({ episode }: IVideoPlayer) => {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  useEffect(() => {
    if (!video) {
      return;
    }
    (async () => {
      await video?.current?.unloadAsync();
      await video?.current?.loadAsync({ uri: episode.video }, {}, false);
    })();
  }, [episode]);
  return (
    <Video
      ref={video}
      source={{ uri: episode.video }}
      posterSource={{ uri: episode.poster }}
      posterStyle={{ resizeMode: 'cover' }}
      style={styles.video}
      useNativeControls
      onPlaybackStatusUpdate={status => setStatus(() => status)}
    />
  );
};

export default VideoPlayer;
