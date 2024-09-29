import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Flatcards() {
  return (
    <View style={styles.mainview}>
      <Text style={styles.headingtext}>Flatcards</Text>
      <View style={styles.container}>
        <View style={styles.cardsWrapper}>
          <View style={styles.background} />
          
          {/* Cards */}
          <View style={[styles.card, styles.card1]}>
            <Text>Red</Text>
          </View>
          <View style={[styles.card, styles.card2]}>
            <Text>Green</Text>
          </View>
          <View style={[styles.card, styles.card3]}>
            <Text>Blue</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainview: {
    paddingTop: 10,
  },
  headingtext: {
    padding : 5,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'rgb(229, 229, 229)',
  },
  container: {
    alignItems: 'flex-start',
    backgroundColor: 'transparent', 
  },
  cardsWrapper: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'relative', 
  },
  background: {
    backgroundColor: 'rgb(31, 31, 31)', 
    opacity: 0.7, 
    borderRadius: 10, 
    position: 'absolute', 
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1, 
  },
  card: {
    fontSize: 15,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255, 255, 255)',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    opacity: 1,
  },
  card1: {
    backgroundColor: 'rgb(255, 0, 0)',
  },
  card2: {
    backgroundColor: 'rgb(0, 255, 0)',
  },
  card3: {
    backgroundColor: 'rgb(0, 0, 255)',
  },
});
