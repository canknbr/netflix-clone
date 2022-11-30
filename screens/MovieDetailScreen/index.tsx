import {
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import styles from './styles';
import movie from '../../assets/data/movie';
import { useNavigation } from '@react-navigation/native';
import {
  MaterialIcons,
  Entypo,
  AntDesign,
  Feather,
  Ionicons,
} from '@expo/vector-icons';
import EpisodeItem from '../../components/EpisodeItem';
import { Picker } from '@react-native-picker/picker';
import VideoPlayer from '../../components/VideoPlayer';
const firstSeason = movie.seasons.items[0];
const firstEpisode = firstSeason.episodes.items[0];
const MovieDetailScreen = () => {
  const navigation = useNavigation();
  const [currentSeason, setCurrentSeason] = useState(firstSeason);
  const [currentEpisode, setCurrentEpisode] = useState(
    firstSeason.episodes.items[0]
  );
  const seasonNames = movie.seasons.items.map(season => season.name);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="chevron-back" size={28} color="white" />
      </TouchableOpacity>

      <VideoPlayer episode={currentEpisode} />

      <FlatList
        contentContainerStyle={{ paddingBottom: 250 }}
        data={currentSeason.episodes.items}
        renderItem={({ item }) => (
          <EpisodeItem episode={item} onPress={setCurrentEpisode} />
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
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
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
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
            <Picker
              selectedValue={currentSeason.name}
              onValueChange={(itemValue, itemIndex) =>
                setCurrentSeason(movie.seasons.items[itemIndex])
              }
              style={{ width: 200, height: 44, backgroundColor: '#fff00' }}
              itemStyle={{ height: 44, color: 'white', fontSize: 16 }}
              dropdownIconColor="white"
            >
              {seasonNames.map(seasonName => (
                <Picker.Item
                  key={seasonName}
                  label={seasonName}
                  value={seasonName}
                />
              ))}
            </Picker>
          </View>
        )}
      />
    </View>
  );
};

export default MovieDetailScreen;
