import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Linking, ScrollView } from 'react-native';
 import { Video, ResizeMode } from 'expo-av';

export function MusicApp({navigation}) {
    const openProject = () => {  
        Linking.openURL('https://4503cmidterm.netlify.app/')  
          .catch((err) => console.error('Failed to open link:', err));  
      };  
      const openProject2 = () => {  
        Linking.openURL('https://github.com/lwalterson/4503C-midterm.git')  
          .catch((err) => console.error('Failed to open link:', err));  
      }; 
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
     <Video  
    source={require('../../assets/4503CFinalDemo.mp4')}
    style={{ width: '100%', height: '10%' }}
    useNativeControls
    resizeMode={ResizeMode.CONTAIN}
    isLooping
        />
     <Text>Double Tap for Video Demo</Text>
     <Text style={styles.text}>This is a music player app created with Claude Code. Users can pause, play and skip songs, display song lyrics, create edit and delete playlist, search songs by title artist or album, upload their own songs, navigate using app specific keyboard controls, and create and delete accounts. 
     </Text>
     <Text style={styles.text}>It is coded using plain HTML CSS and Javascript.  All playlists, songs, and user accounts are stored on Supabase, which is called directly from the browser. Local storage is only used to save the state of the music player. The project is deployed from the github on Netlify. 
     </Text>
     <Text style={styles.text}>I used this project to practice my ability to properly prompt, understand, and correct AI generated code by using the languages that I am the most familiar with. I also used it to learn the basics of integrating databases. 
     </Text>
     <Text style={styles.text}>If I were to add anything I would include an API for songs instead of having test files on Supabase, allowing for a genuine music streaming experience rather than an example. If I could go back to the beginning I would make sure I fully understand the database, its integration, and how it functions before implementing instead of having to try to learn as I was making it. It was a later addition and wasn't focused on in the early stages. The visual design could also use an update. It wasn't my focus for this project and that shows in the basic design. 
     </Text>
     <View style={styles.links}>
   <Text style={styles.link} onPress={openProject}>  
             Test Here
           </Text>
           <Text style={styles.link} onPress={openProject2}>  
             GitHub
           </Text>
           </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor: '#3e78a4'
  },
  links:{
    flexDirection: 'row',
    width: '100%',
     justifyContent: 'space-evenly',
  },
  img: {
    width: '100%',
    height: '70%',
     resizeMode: 'cover',
    marginTop: 0,
    paddingTop: 0,
  },
 text: {
    fontSize: '150%',
     textAlign: 'center',
  },
  link:{
    fontSize: '150%',
     textAlign: 'center',
    color: '#ffffff'
  }
});