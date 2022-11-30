import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';
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
  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item.poster }} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        snapToInterval={styles.image.width + 20}
        decelerationRate="fast"
      />
    </>
  );
};

export default HomeCategory;
