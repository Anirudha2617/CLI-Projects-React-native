import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View style={styles.mainview}>
      <Text style={styles.headingtext}>FancyCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card]}>
          <Image
            id="Src Img"
            style={styles.stretch}
            source={{
              uri: 'E:///CLIPROJECTS/Cards/assets/images/react-logo.png',
            }}
          />
          <ScrollView style={styles.contentscroll}>
            <Text id="Heading text" style={styles.headding_2}>
              Red
            </Text>
            <Text style={styles.content}>This is the content text.</Text>
            <Text style={styles.footer}> This is footer text </Text>
          </ScrollView>
        </View>
        <View style={[styles.card]}>
          <Image
            id="Src Img"
            style={styles.stretch}
            source={{
              uri: 'E:///CLIPROJECTS/Cards/assets/images/react-logo.png',
            }}
          />
          <ScrollView style={styles.contentscroll}>
            <Text id="Heading text" style={styles.headding_2}>
              Red
            </Text>
            <Text style={styles.content}>
              This is the content text.And i am glad to be able to do it myself.
            </Text>
            <Text style={styles.footer}> This is footer text </Text>
          </ScrollView>
        </View>
        <View style={[styles.card]}>
          <Image
            id="Src Img"
            style={styles.stretch}
            source={{
              uri: 'E:///CLIPROJECTS/Cards/assets/images/react-logo.png',
            }}
          />
          <ScrollView style={styles.contentscroll}>
            <Text id="Heading text" style={styles.headding_2}>
              Red
            </Text>
            <Text style={styles.content}>This is the content text.</Text>
            <Text style={styles.content}>This is the content text.</Text>
            <Text style={styles.content}>This is the content text.</Text>
            <Text style={styles.content}>This is the content text.</Text>
            <Text style={styles.content}>This is the content text.</Text>
            <Text style={styles.content}>This is the content text.</Text>
            <Text style={styles.content}>This is the content text.</Text>
            <Text style={styles.footer}> This is footer text </Text>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'rgb(31, 31, 31)',
  },
  headingtext: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    padding: 5,
    color: 'rgb(229, 229, 229)',
  },
  headding_2: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'rgb(100,100,100)',
  },

  content: {
    fontSize: 12,
    color: 'rgb(153, 153, 153)',
  },

  footer: {
    flex: 1,
    verticalAlign: 'bottom',
    fontSize: 12,
    paddingTop: 10,
    color: 'rgb(229, 229, 229)',
  },
  contentscroll: {
    flex: 1,
    height: 100,
    width: '100%',
    backgroundColor: 'rgb(255, 255, 255)',
  },
  card: {
    fontSize: 15,
    flex: 1,
    height: 200,
    width: 200,

    alignItems: 'center',
    backgroundColor: 'rgb(255, 255, 255)',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },

  stretch: {
    height: 100,
    width: 100,
    resizeMode: 'stretch',
  },
});
