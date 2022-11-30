import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
interface IEpisodeProps {
  episode: {
    id: string;
    title: string;
    poster: string;
    duration: string;
    plot: string;
    video: string;
  };
  onPress: (episode: any) => void;
}
const EpisodeItem = ({ episode, onPress }: IEpisodeProps) => {
  return (
    <Pressable
      onPress={() => onPress(episode)}
     style={{ marginVertical: 10 }}>
      <View style={styles.row}>
        <Image style={styles.image} source={{ uri: episode.poster }} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{episode.title}</Text>
          <Text style={styles.duration}>{episode.duration}</Text>
        </View>
        <AntDesign name="download" size={24} color="white" />
      </View>
      <Text style={styles.plot}>{episode.plot}</Text>
    </Pressable>
  );
};

export default EpisodeItem;
