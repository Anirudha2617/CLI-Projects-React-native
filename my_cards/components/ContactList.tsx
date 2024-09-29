import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';

type Props = {
  uid: number;
  name: string;
  status: string;
  imageUrl: ImageSourcePropType | string;
};

export type {Props}; // Moved this line to the top for better visibility

// Adjusting the component to accept props directly
export default function ContactList({contacts}: {contacts: Props[]}) {
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <TouchableOpacity key={uid} style={styles.userCard}>
            <Image
              source={typeof imageUrl === 'string' ? {uri: imageUrl} : imageUrl} // Check if imageUrl is a string
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#8D3DAF',
    padding: 8,
    borderRadius: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
  },
  userStatus: {
    fontSize: 12,
    color: '#FFF', // Ensure the status text is visible against the background
  },
});
