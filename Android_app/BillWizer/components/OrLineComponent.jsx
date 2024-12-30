import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrLineComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>or</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginRight:10,
    marginLeft:10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc', // Add a visible background color for the line
  },
  text: {
    marginHorizontal: 20,
    paddingTop: -4,
    fontSize: 22,
    color: '#666', // Text color
  },
});

export default OrLineComponent;
