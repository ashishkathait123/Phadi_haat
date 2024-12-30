import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const HorizontalCityInput = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>City</Text>
      <TextInput
        style={styles.input}
        placeholder="Tap to Enter"
        placeholderTextColor="gray"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  label: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  input: {
    flex: 2,
    fontSize: 16,
    color: "#000",
    textAlign: "right", // Aligns text to the right for the placeholder
  },
});

export default HorizontalCityInput;
