import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity } from 'react-native';



export function Home({navigation}) {
  return (
     <ImageBackground
        source={require('../assets/beachPic.jpg')}
        style={styles.background}
        resizeMode="cover"
      >
    <View style={styles.container}>
        <Text style={styles.text} >Hello I am Lauren Walterson a senior Digital Media (Web and Interactive Media) student at UCF.</Text>
        <Text>Click below to learn more about me.</Text>
    </View>
     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("All Projects")}>
    <Text style={styles.buttonText}>Projects</Text>
  </TouchableOpacity>
    
<TouchableOpacity style={styles.button} onPress={() => navigation.navigate("About Me")}>
    <Text style={styles.buttonText}>About Me</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Contact Me")}>
    <Text style={styles.buttonText}>Contact Me</Text>
  </TouchableOpacity>

     
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 'auto',
    marginLeft: '5%',
    marginRight: '5%',
    borderRadius: 3
    
  },
   background: {
    height: '100%',
    width: '100%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
    backgroundColor: '#0a202e',
    padding: 10,
    borderRadius: 3,
    margin: 5,
  },
  buttonText: {
    color: 'white',
  },
   text: {
    fontSize: '200%',
     textAlign: 'center',
  },
});