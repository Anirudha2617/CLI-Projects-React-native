import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image, ImageSourcePropType} from 'react-native';
import type {PropsWithChildren} from 'react';


type PreviewLayoutProps = PropsWithChildren<{
  label: string;
  values: [string,ImageSourcePropType][];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}>;


const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}: PreviewLayoutProps) => (
  <View style={{padding: 10, flex: 1}}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value[0]}
          onPress={() => setSelectedValue(value[0])}
          >
        <Image
          id="Src Img"
          style={styles.logo}
          source={value[1]}
        />

        </TouchableOpacity>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 9,
  },
  logo: {
    height: 30,
    width: 30,

    marginTop: 5,
    marginBottom: 5,

    borderRadius: 2,
    borderColor: '#ccc',
    borderWidth: 1,
  },
});

export default PreviewLayout;
