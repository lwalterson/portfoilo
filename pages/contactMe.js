import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';


export function ContactMe({navigation}) {
    const openLinkedIn = () => {  
    Linking.openURL('https://www.linkedin.com/in/lauren-walterson/')  
      .catch((err) => console.error('Failed to open link:', err));  
  };  
  const openGitHub = () => {  
    Linking.openURL('https://github.com/lwalterson')  
      .catch((err) => console.error('Failed to open link:', err));  
  }; 
  return (
    <View style={styles.container}>
     <Text style={styles.text}>The best way to contact me is email.</Text>
     <Text style={styles.text}>laurenbwalterson@gmail.com</Text>
    <Text style={styles.link} onPress={openLinkedIn}>  
          LinkedIn
        </Text>
        <Text style={styles.link} onPress={openGitHub}>  
          GitHub
        </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3e78a4'
  },
  text: {
    fontSize: '200%',
     textAlign: 'center',
  },
  link:{
    fontSize: '150%',
     textAlign: 'center',
    color: '#ffffff'
  }
});