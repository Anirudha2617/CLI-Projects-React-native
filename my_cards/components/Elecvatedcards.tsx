import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

const Title = "Welcome";

export default function Elecvatedcards( ) {
  return (
    <View style={[styles.mainview]}>
      <Text style={[styles.headingtext, styles.mainview]}> {Title}</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={styles.cardview}>
          <Text style={styles.cardtext}>Card 1</Text>
        </View>
        <View style={styles.cardview}>
          <Text style={styles.cardtext}>Card 1</Text>
        </View>
        <View style={styles.cardview}>
          <Text style={styles.cardtext}>Card 1</Text>
        </View>
        <View style={styles.cardview}>
          <Text style={styles.cardtext}>Card 1</Text>
        </View>
        <View style={styles.cardview}>
          <Text style={styles.cardtext}>Card 1</Text>
        </View>
        <View style={styles.cardview}>
          <Text style={styles.cardtext}>Card 1</Text>
        </View>
        <View style={styles.cardview}>
          <Text style={styles.cardtext}>Card 1</Text>
        </View>
        <View style={styles.cardview}>
          <Text style={styles.cardtext}>Card 1</Text>
        </View>
        <View style={styles.cardview}>
          <Text style={styles.cardtext}>Card 1</Text>
        </View>
        <View style={styles.cardview}>
          <Text style={styles.cardtext}>Card 1</Text>
        </View>
        <View style={styles.cardview}>
          <Text style={styles.cardtext}>Card 1</Text>
        </View>
        <View style={styles.cardview}>
          <Text style={styles.cardtext}>Card 1</Text>
        </View>
        <View style={styles.cardview}>
          <Text style={styles.cardtext}>Card 1</Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainview: {
    paddingBottom: 10,
    justifyContent: 'center',
  },
  headingtext: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    padding: 5,
    color: 'rgb(229, 229, 229)',
  },
  container: {
    padding: 10,
    backgroundColor: 'rgb(31, 31, 31)',
  },
  cardview: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255, 255, 255)',
    margin: 5,
    padding: 0,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  cardtext: {
    backgroundColor: 'rgb(42, 45, 46)',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 3,

    textAlign: 'center',
  },
});
