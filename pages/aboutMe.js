import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';


export function AboutMe({navigation}) {
  return (
    <View style={styles.container}>           
     <Text style={styles.text}>Hello I am Lauren Walterson a senior Digital Media (Web and Interactive Media) student at UCF. My degree has given my skills in both coding and design, though I am more comfortable on the design side of things. I am familiar with HTML, CSS, Javascript, and React Native, and have small amounts of experience in PHP and Dart. My greatest interest is in film, writing and video editing and I am currently pursuing those goals with an internship at AdventHealth. </Text>
    <Image source={require('../assets/me.png')}
             style={styles.img}
             />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
     justifyContent: 'space-evenly',
    backgroundColor: '#3e78a4'
  },
  text: {
    fontSize: '150%',
    textAlign: 'center',
    width: 500,
  },
  img: {
    width: 300,
    height: 400,
     resizeMode: 'cover',
    marginTop: 0,
    paddingTop: 0,
  },
});