import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';

export default function Sidebar() {
  return (
    <SafeAreaView>
      <ScrollView style = {styles.sidepanel}>
          <Text>logo</Text>
          <Image
            id="Src Img"
            style={styles.logo}
            source={require('../assets/chatting.jpg')}
          />
          <Image
            id="Src Img"
            style={styles.logo}
            source={require('../assets/navigation.jpg')}
          />
          <Image
            id="Src Img"
            style={styles.logo}
            source={require('../assets/call_bg.png')}
          />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    backgroundColor: '#f4f4f4',
  },
  sidepanel:{

  },

  logo: {
    height: 30,
    width: 30,
    
    marginTop: 5,
    marginBottom: 5,

    borderRadius:2,
    borderColor:'#ccc',
    borderWidth:1,
  },
});
