import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    aspectRatio: 16 / 9,
    height: 75,
    resizeMode: 'cover',
    borderRadius: 3,
  },
  rightContainer: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  duration: {
    color: 'lightgrey',
    fontSize: 14,
    marginTop: 4,
  },
  plot: {
    color: 'lightgrey',
    fontSize: 14,
    margin: 10,
  },
});

export default styles;
