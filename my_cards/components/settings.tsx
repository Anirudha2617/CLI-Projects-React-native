import React, {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ImageSourcePropType,
} from 'react-native';

type ConstantProps = PropsWithChildren<{
  label: string;
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  type: 'text' | 'options'; // Use union type for string literals
  options: string | string[]; // Union type for options
}>;

type Props = {
  label: string;
  constants: ConstantProps[];
};


function Settings({label, constants}: Props) {
  return (
    <SafeAreaView>
      <Text style={styles.heading}>{label}</Text>
      {constants.map(
        (
          {label, selectedValue, setSelectedValue, type, options},
          constIndex,
        ) => (
          <View key={constIndex} style={{flexDirection: 'row'}}>
            <Text style={styles.heading2}>{label}</Text>
            <View style={styles.row}>
              {type === 'text' ? (
                <View>
                  <TextInput
                    style={styles.input}
                    defaultValue={selectedValue} // Shows the selected value in the text box
                    onSubmitEditing={e => setSelectedValue(e.nativeEvent.text)} // Updates value when Enter is pressed
                    placeholder="Enter text"
                    returnKeyType="done" // "done" or "enter" for different platforms
                  />
                </View>
              ) : type === 'options' ? (
                // Corrected: Return JSX directly in the map function
                (Array.isArray(options) ? options : [options]).map(
                  (option, optIndex) => (
                    <TouchableOpacity
                      key={optIndex}
                      onPress={() => setSelectedValue(option)}
                      style={[
                        styles.button,
                        selectedValue === option && styles.selected, // Apply selected style
                      ]}>
                      <Text style={styles.text}>{option}</Text>
                    </TouchableOpacity>
                  ),
                )
              ) : (
                <View>{/* Other type handling */}</View>
              )}
            </View>
          </View>
        ),
      )}
    </SafeAreaView>
  );
}

export default Settings;
export type { Props };

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: '#f5e1d7',
    marginHorizontal: 5,
    marginBottom: 10,
    textAlign: 'center',
    elevation: 2,
  },
  selected: {
    backgroundColor: '#ff7043',
    borderWidth: 0,
    elevation: 5,
  },
  text: {
    color: '#333',
    fontWeight: 'bold',
  },
  heading: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: '600',
    color: '#f0f0f0', // More whitish heading color
    marginBottom: 15,
  },
  heading2: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: '600',
    color: '#f0f0f0', // More whitish heading color
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 12,
    borderRadius: 6,
    marginBottom: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
    width: 250, // Increased width for the input box
    color: '#000', // Darker text inside the text box
  },
});

