import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import {MusicApp} from './projects/musicApp.js'

const Stack = createNativeStackNavigator();

export function AllProjects({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Music App")}>
          <Text style={styles.buttonText}>Music Player</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Calculators")}>
          <Text style={styles.buttonText}>Calculators</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Resume Checker")}>
            <Text style={styles.buttonText}>Resume Checker</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Birdhouses")}>
              <Text style={styles.buttonText}>Bird Houses</Text>
            </TouchableOpacity>
     
    </View>
)

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3e78a4'
  },
  button: {
    backgroundColor: '#0a202e',
    padding: 10,
    borderRadius: 3,
    margin: 5,
  },
  buttonText: {
    color: 'white',
     textAlign: 'center',
},
text: {
    fontSize: '150%',
     textAlign: 'center',
  },});