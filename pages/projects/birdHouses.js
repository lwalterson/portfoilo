import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, FlatList } from 'react-native';

export function BirdHouses({navigation}) {
  return (
    <View style={styles.container}>
         <View style={styles.imageRow}>
     <Image source={require('../../assets/birdHouse1.jpg')}
     style={styles.img}
     />
     <Image source={require('../../assets/birdHouse2.jpg')}
     style={styles.img}
     />
    <Image source={require('../../assets/birdHouse3.jpg')}
     style={styles.img}
     /></View>
     <Text style={styles.text}>This birdhouse is part of a three-project series of structures that progressively get more abstract. Rather than make three unique structures with shared elements, I am creating the illusion that each structure is the same house in various stages of twisting and warping. The plans for the houses were made on Illustrator and the lazer cut and assembled.</Text>
     
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor: '#3e78a4'
  },
  
  img: {
    width: 300,
    height: 400,
     resizeMode: 'cover',
    marginTop: 0,
    paddingTop: 0,
  },
  imageRow: {
    flexDirection: 'row',
    width: '100%',
     justifyContent: 'space-between',
  },
  text: {
    fontSize: '150%',
     textAlign: 'center',
  },
});