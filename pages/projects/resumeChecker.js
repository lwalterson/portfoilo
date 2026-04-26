import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
 import { Video, ResizeMode } from 'expo-av';

export function ResumeChecker({navigation}) {
  return (
    <View style={styles.container}>
     <Video  
    source={require('../../assets/GWCGroup52026Demo.mp4')}
    style={{ width: '100%', height: '10%' }}
    useNativeControls
    resizeMode={ResizeMode.CONTAIN}
    isLooping
        />
     <Text>Double Tap for Video Demo</Text>
     <Text style={styles.text}>This was a group project I participated in as a part of Girls Who Code.  It is an AI tool that analyses a resume. I was in charge of the visual design and branding.</Text>
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
 text: {
    fontSize: '150%',
     textAlign: 'center',
  },
});