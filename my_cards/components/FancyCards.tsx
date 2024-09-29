import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  ImageSourcePropType,
} from 'react-native';
import React  from 'react';

type Props = {
  label: string;
  items: [ImageSourcePropType, string, string, string][];
};

export default function FancyCards({label, items}: Props) {
  return (
    <View style={styles.mainview}>
      <Text style={styles.headingtext}>{label}</Text>

      <ScrollView horizontal={true} contentContainerStyle={{ justifyContent: 'center' }}>
        <View style={styles.container}>
          {items.map(([image, heading, content, footer], index) => (
            <View style={[styles.card]} key={index}>
              <Image id="Src Img" style={styles.stretch} source={image} />
              <ScrollView style={styles.contentscroll}>
                <Text id="Heading text" style={styles.headding_2}>
                  {heading}
                </Text>
                <Text style={styles.content}>{content}</Text>
                <Text style={styles.footer}> {footer} </Text>
              </ScrollView>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainview: {
    paddingTop: 10,
  },
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'rgb(31, 31, 31)',
    alignContent: 'center',
    justifyContent: 'center',
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
    justifyContent: 'flex-end',
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
    height: 230,
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
    width: 160,
  },
});
