import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
interface IHomeCategoryProps {
  category: {
    id: string;
    title: string;
    movies: {
      id: string;
      poster: string;
    }[];
  };
}
const HomeCategory = ({ category }: IHomeCategoryProps) => {
  const navigation = useNavigation();
  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Movie Detail', { id: item.id })}
          >
            <Image style={styles.image} source={{ uri: item.poster }} />
          </TouchableOpacity>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        snapToInterval={styles.image.width - 20}
        decelerationRate="fast"
      />
    </>
  );
};

export default HomeCategory;
