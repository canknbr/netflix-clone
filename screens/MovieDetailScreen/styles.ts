import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: 50,
    backgroundColor: '#000',
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  match: {
    color: '#59d467',
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 15,
  },
  year: {
    color: '#757575',
    fontSize: 14,
  },
  ageContainer: {
    backgroundColor: '#e6e229',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    paddingHorizontal: 3,
    marginHorizontal: 15,
  },
  age: {
    color: '#fff',
    fontWeight: 'bold',
  },
  playButton: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    marginVertical: 10,
  },
  downloadButton: {
    backgroundColor: '#2b2b2b',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
  },
  playButtonText: {
    color: '#000',
    fontSize: 20,
  },
  downloadButtonText: {
    color: '#fff',
    fontSize: 20,
  },
  plot: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 10,
    lineHeight: 20,
  },
});

export default styles;
