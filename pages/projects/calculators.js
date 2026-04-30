import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Linking } from 'react-native';
 import { Video, ResizeMode } from 'expo-av';

export function Calculators({navigation}) {
    const openProject = () => {  
        Linking.openURL('https://github.com/lwalterson/assignment1-4503c.git')  
          .catch((err) => console.error('Failed to open link:', err));  
      };  
      const openProject2 = () => {  
        Linking.openURL('https://github.com/lwalterson/finalExamExtraCalculator.git')  
          .catch((err) => console.error('Failed to open link:', err));  
      };
  return (
    <View style={styles.container}>
     <Video  
    source={require('../../assets/4503CFinalReflection.mp4')}
    style={{ width: '100%', height: '10%' }}
    useNativeControls
    resizeMode={ResizeMode.CONTAIN}
    isLooping
        />
    <Text>Double Tap for Video Demo</Text>
     <Text style={styles.text}>This was a case study to see my improvement with AI coding from the beginning to end of a semester. I started both projects with the same premise, to create a calculator with react, and used that to compare differences in my prompting method. For the second I noticed I was much more specific with my prompts, asked for a lot more information before I had it start writing code, and I included both AI and browser error checking.</Text>
   <Text style={styles.link} onPress={openProject}>  
             Calculator One GitHub
           </Text>
    <Text style={styles.link} onPress={openProject2}>  
             Calculator Two GitHub
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
  link:{
    fontSize: '150%',
     textAlign: 'center',
    color: '#ffffff'
  }
});