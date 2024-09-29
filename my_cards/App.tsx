import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
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
import Settings, { Props as Setting_prop } from './components/settings';
import FancyCards from './components/FancyCards';
import ContactList, { Props as Contact_prop } from './components/ContactList';

// Constants

function App(): React.JSX.Element {
  const [Page, setPage] = useState('pic');
  const [Username, setUsername] = useState('Anirudha Sahu');
  const [Email, setEmail] = useState('anirudha@gmail.com');
  const [Password, setPassword] = useState('password123');
  const [Theme, setTheme] = useState('Dark');
  const [Language, setLanguage] = useState('English');
  const [Notifications, setNotifications] = useState('');
  const [Privacy_Settings, setPrivacy_Settings] = useState('');
  const [Account_Settings, setAccount_Settings] = useState('');

  const settingPropsList: Setting_prop = {
    label: 'User Preferences',
    constants: [
      {
        label: 'Username',
        selectedValue: Username,
        setSelectedValue: setUsername,
        type: 'text',
        options: '', // Empty options for text input
      },
      {
        label: 'Theme',
        selectedValue: Theme,
        setSelectedValue: setTheme,
        type: 'options',
        options: ['Light', 'Dark', 'System Default'], // Options for selection
      },
      {
        label: 'Language',
        selectedValue: Language,
        setSelectedValue: setLanguage,
        type: 'options',
        options: ['English', 'Spanish', 'French'], // More options for selection
      },
    ],
  };

  const ContactPropsList: Contact_prop[] = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: require('./assets/chatting.jpg'), // Local image
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4', // Remote image
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];

  // Console log area

  if (Page === 'start') {
    return <JustifyContentBasics />;
  } else {
    return (
      <SafeAreaView style={styles.main_view}>
        <View style={styles.sidebar}>
          <PreviewLayout
            label="MENU"
            selectedValue={Page}
            values={[
              ['menu', require('./assets/chatting.jpg')],
              ['navigate', require('./assets/navigate.jpg')],
              ['profile', require('./assets/chatting.jpg')],
              ['favorites', require('./assets/chatting.jpg')],
              ['settings', require('./assets/chatting.jpg')],
              ['logout', require('./assets/chatting.jpg')],
              ['about', require('./assets/chatting.jpg')],
            ]}
            setSelectedValue={setPage}
          />
        </View>

        <View style={styles.side_view}>
          <View style={styles.heading_center}>
            <Text style={styles.heading_center_text}>Shree Ganesha</Text>
          </View>
          <View>
            {Page === 'settings' ? (
              <View>
                <Settings {...settingPropsList} />
              </View>
            ) : Page === 'favorites' ? (
              <View>
                <Text style={styles.heading_center}>Favorites Page</Text>
              </View>
            ) : Page === 'logout' ? (
              <View>
                <Text style={styles.heading_center}>Logout Page</Text>
              </View>
            ) : Page === 'about' ? (
              <View>
                <Text style={styles.heading_center}>About Page</Text>
              </View>
            ) : Page === 'menu' ? (
              <View>
                <Text style={styles.heading_center}>Menu Page</Text>
                <Flatcards />
                <FancyCards
                  label="Fancy Card"
                  items={[
                    [
                      require('./assets/Profile.png'),
                      'Radha Krishna',
                      ' Lord Radha Krishna in Vrindavan',
                      ' Radha',
                    ],
                  ]}
                />
              </View>
            ) : Page === 'navigate' ? (
              <View>
                <Text style={styles.heading_center}>Navigation Page</Text>
              </View>
            ) : Page === 'profile' ? (
              <View>
                <Text style={styles.heading_center}>Profile Page</Text>
                {/* Pass ContactPropsList as contacts prop */}
                <ContactList contacts={ContactPropsList} /> 
              </View>
            ) : (
              <Elecvatedcards />
            )}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

// Styles (make sure to define your styles here)


export default App;


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


