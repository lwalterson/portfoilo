import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Linking } from 'react-native';

export function MusicApp({navigation}) {
    const openProject = () => {  
        Linking.openURL('https://4503cmidterm.netlify.app/')  
          .catch((err) => console.error('Failed to open link:', err));  
      };  
  return (
    <View style={styles.container}>
     <Image source={require('../../assets/musicApp.png')}
     style={styles.img}
     />
     
     <Text style={styles.text}>This is a music playing app made by Claude Code. It gave me experience in guiding prompts and it was my first exploration of database storage. The app allows users to play music, see song  lyrics, upload songs, and create playlists. The uploaded songs and playlists are specific to each user account.</Text>
   <Text style={styles.text} onPress={openProject}>  
             Test Here
           </Text>
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
});