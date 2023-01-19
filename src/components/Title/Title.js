import React from 'react';
import {View, Text} from 'react-native';
import styles from './Title.style';

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Breeze Flash</Text>
    </View>
  );
}
