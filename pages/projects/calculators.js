import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Linking, ScrollView } from 'react-native';
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
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
     <Video  
    source={require('../../assets/4503CFinalReflection.mp4')}
    style={{ width: '100%', height: '10%' }}
    useNativeControls
    resizeMode={ResizeMode.CONTAIN}
    isLooping
        />
    <Text>Double Tap for Video Demo</Text>
     <Text style={styles.text}>This was a case study to see my improvement with AI coding from the beginning to end of a semester. I started both projects with the same premise, to create a calculator with react, and used that to compare differences in my prompting method.
     </Text>
     <Text style={styles.text}>My first attempt was my first time coding with AI and I was limited by my assignment in the number of prompts I could use. My prompts were. {'\n'}
  1. Create a simple calculator component that can add subtract multiply and divide. Use React hooks. Have buttons for each number and function.{'\n'}
  2. Have the full equation show before the equal button is pressed.{'\n'}
  3. Allow equations to be entered with the buttons and with the keyboard. {'\n'}
  4. Add exponents and parentheses buttons 
     </Text>
     <Text style={styles.text}>In the second I noticed I was much more specific with my prompts, asked for a lot more information before I had it start writing code, and I included both AI and browser error checking. The new conversation which is on the GitHub linked below is far longer than the first, which may be seen as less efficient, but I walked away with a much better understanding of what I had just created. 
     </Text>
   <Text style={styles.link} onPress={openProject}>  
             Calculator One GitHub
           </Text>
    <Text style={styles.link} onPress={openProject2}>  
             Calculator Two GitHub
           </Text>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
scrollView: {
    backgroundColor: '#3e78a4',
  },
  
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: '5%',
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