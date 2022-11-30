import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import HomeCategory from '../../components/HomeCategory';
import categories from '../../assets/data/categories';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories.items}
        renderItem={({ item }) => <HomeCategory category={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HomeScreen;
