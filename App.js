import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, Image,
  Dimensions, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import {Home} from './pages/home.js'
import {AboutMe} from './pages/aboutMe.js'
import {ContactMe} from './pages/contactMe.js'
import {AllProjects} from './pages/allProjects.js'
import {MusicApp} from './pages/projects/musicApp.js'
import {ResumeChecker} from './pages/projects/resumeChecker.js'
import {BirdHouses} from './pages/projects/birdHouses.js'
import {Calculators} from './pages/projects/calculators.js'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="home" component={Home} options={{
            headerLeft: null,
          }}/>

      <Stack.Screen name="aboutMe" component={AboutMe} options={{
            headerLeft: () => (
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("home")}>
                <Text style={styles.buttonText}>Home</Text>
              </TouchableOpacity>),
              
          }}/>
          
          <Stack.Screen name="contactMe" component={ContactMe} options={{
            headerLeft: () => (
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("home")}>
                <Text style={styles.buttonText}>Home</Text>
              </TouchableOpacity>),
          }}/>

          <Stack.Screen name="allProjects" component={AllProjects} options={{
            headerLeft: () => (
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("home")}>
                <Text style={styles.buttonText}>Home</Text>
              </TouchableOpacity>),            
          }}/>

          <Stack.Screen name="musicApp" component={MusicApp} options={{
            headerLeft: () => (
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("home")}>
                <Text style={styles.buttonText}>Home</Text>
              </TouchableOpacity>),
          }}/>

      <Stack.Screen name="resumeChecker" component={ResumeChecker} options={{
            headerLeft: () => (
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("home")}>
                <Text style={styles.buttonText}>Home</Text>
              </TouchableOpacity>),
          }}/>

      <Stack.Screen name="birdHouses" component={BirdHouses} options={{
            headerLeft: () => (
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("home")}>
                <Text style={styles.buttonText}>Home</Text>
              </TouchableOpacity>),
          }}/>

          <Stack.Screen name="calculators" component={Calculators} options={{
            headerLeft: () => (
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("home")}>
                <Text style={styles.buttonText}>Home</Text>
              </TouchableOpacity>),
          }}/>

    </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#0a2339',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    color: 'white',
  }

});
