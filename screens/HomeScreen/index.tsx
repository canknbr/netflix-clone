import { View, Text, FlatList, Image, useWindowDimensions } from 'react-native';
import React from 'react';
import styles from './styles';
import HomeCategory from '../../components/HomeCategory';
import categories from '../../assets/data/categories';

const HomeScreen = () => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <FlatList
        data={categories.items}
        renderItem={({ item }) => <HomeCategory category={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        decelerationRate="fast"
        snapToAlignment="start"
        snapToInterval={width}
      />
    </View>
  );
};

export default HomeScreen;
