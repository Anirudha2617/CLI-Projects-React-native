import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Image,
  View,
} from 'react-native';
import Elecvatedcards from './components/Elecvatedcards';
import Sidebar from './components/Sidebar';
import Flex from './components/Sidebar_2';
import DirectionLayout from './components/Flexdirection';
import JustifyContentBasics from './components/justify_content';
import Flatcards from './components/flatcards';
import PreviewLayout from './components/Sidebar_2';

function App(): React.JSX.Element {
  const [justifyContent, setJustifyContent] = useState('flex');
  const [Page, setPage] = useState('flex-start');

  if (justifyContent === 'flex-start') {
    return <JustifyContentBasics />;
  } else {
    return (
      <SafeAreaView style={styles.main_view}>
        <View style={styles.sidebar}>
          <PreviewLayout
            label="MENU"
            selectedValue={Page}
            values={[
              ['menu', require('../assets/chatting.jpg')],
              ['navigate', require('../assets/navigate.jpg')],
              ['profile', require('../assets/chatting.jpg')],
              ['favorites', require('../assets/chatting.jpg')],
              ['settings', require('../assets/chatting.jpg')],
              ['logout', require('../assets/chatting.jpg')],
              ['about', require('../assets/chatting.jpg')],
            ]}
            setSelectedValue={setPage}></PreviewLayout>
        </View>

        <View style={styles.side_view}>
          <View style={styles.heading_center}>
            <Text style={styles.heading_center_text}>Shree Ganesha</Text>
          </View>
          <Elecvatedcards />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    flexDirection: 'row',
  },
  side_view: {
    flex: 1,
    flexDirection: 'column',
  },
  sidebar: {
    width: 45,
    backgroundColor: 'rgb(24, 24, 24)',
    borderColor: 'rgb(192, 204, 204)',
    borderRightWidth: 0.7,
  },
  heading_center: {
    backgroundColor: 'rgb(220, 103, 17)',
  },
  heading_center_text: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
    color: 'rgb(255, 255, 255)',
  },
  heading: {},

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  logo: {
    height: 30,
    width: 30,
  },
});

export default App;
