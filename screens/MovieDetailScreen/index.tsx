import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import styles from './styles';
import movie from '../../assets/data/movie';
import {
  MaterialIcons,
  Entypo,
  AntDesign,
  Feather,
  Ionicons,
} from '@expo/vector-icons';
const firstEpisode = movie.seasons.items[0].episodes.items[0];
const MovieDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: firstEpisode.poster }} />
      <View
        style={{
          padding: 12,
        }}
      >
        <Text style={styles.title}>{movie.title}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.match}>98% match</Text>
          <Text style={styles.year}>{movie.year}</Text>
          <View style={styles.ageContainer}>
            <Text style={styles.age}>12+</Text>
          </View>
          <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
          <MaterialIcons
            name="hd"
            size={28}
            color="white"
            style={{ marginLeft: 10 }}
          />
        </View>
        <Pressable style={styles.playButton}>
          <Text style={styles.playButtonText}>
            <Entypo name="controller-play" size={20} color="black" /> Play
          </Text>
        </Pressable>
        <Pressable style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>
            <Entypo name="download" size={20} color="white" /> Download
          </Text>
        </Pressable>
        <Text style={styles.plot}>{movie.plot}</Text>
        <Text style={styles.year}>Cast: {movie.cast}</Text>
        <Text style={styles.year}>Creator: {movie.creator}</Text>
        <View style={{ flexDirection: 'row', marginVertical: 20 }}>
          <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
            <AntDesign name="plus" size={24} color="white" />
            <Text
              style={{
                color: 'darkgrey',
                marginTop: 10,
              }}
            >
              My List
            </Text>
          </View>
          <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
            <Feather name="thumbs-up" size={24} color="white" />
            <Text
              style={{
                color: 'darkgrey',
                marginTop: 10,
              }}
            >
              Rate
            </Text>
          </View>
          <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
            <Ionicons name="share-social" size={24} color="white" />
            <Text
              style={{
                color: 'darkgrey',
                marginTop: 10,
              }}
            >
              Share
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MovieDetailScreen;
