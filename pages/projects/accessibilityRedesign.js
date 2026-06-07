import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Linking, ScrollView } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useWindowDimensions } from 'react-native';


export function AccessibilityRedesign({navigation}) {
  const { width } = useWindowDimensions();
  const videoWidth = width * 0.45; // 45% of screen width
  const videoHeight = videoWidth * (9 / 16); // maintain 16:9 ratio
    

      const player = useVideoPlayer(require('../../assets/3175AccessibilityRedesign.mp4'), p => {
    p.loop = true;
  });
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
     <View style={styles.view}>
     <Text style={styles.text}>In this project I took the existing yale school of art website and redesigned it to follow the accessible design rules I had been learning about in the class I completed the project for. My goal was to find a balance between maintaining the existing identity of the website while improving accessibility. This redesign was not about aesthetic design. A walkthrough of the website as well as a comparison and explanation of my decisions can be seen on the attached video. 

     </Text>
      <View style={{ width: videoWidth, height: videoHeight }}>
     <VideoView
    player={player}
    style={{ width: videoWidth, height: videoHeight }}
    allowsFullscreen={false}
    nativeControls={true}
  /></View>
     </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#84a3b5',
  },
  view:{
    flex: 1,
    flexDirection: 'row',
    width: '100%',
     justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '5%'
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: '5%',
  },
  links:{
    flexDirection: 'row',
    width: '100%',
     justifyContent: 'space-evenly',
     paddingBottom: '5%'
  },
  img: {
    width: '100%',
    height: '70%',
     resizeMode: 'cover',
    marginTop: 0,
    paddingTop: 0,
  },
 text: {
  flexShrink: 1,
    fontSize: '150%',
     textAlign: 'center',
  },
  link:{
    fontSize: '150%',
     textAlign: 'center',
    color: '#326791'
  }
});