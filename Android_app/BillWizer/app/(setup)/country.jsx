import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const HorizontalInputs = () => {
  const [country, setCountry] = useState("India");

  return (
    <View>
      {/* City Field */}
      <View style={styles.rowContainer}>
        <Text style={styles.label}>City</Text>
        <TextInput
          style={styles.input}
          placeholder="Tap to Enter"
          placeholderTextColor="gray"
        />
      </View>

      {/* Country Field */}
      <View style={styles.rowContainer}>
        <Text style={styles.label}>Country</Text>
        <RNPickerSelect
          onValueChange={(value) => setCountry(value)}
          items={[
            { label: "India", value: "India" },
            { label: "USA", value: "USA" },
            { label: "Canada", value: "Canada" },
          ]}
          value={country}
          style={pickerSelectStyles}
          placeholder={{ label: "Select Country", value: null }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
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
    textAlign: "right",
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    flex: 2,
    fontSize: 16,
    color: "#000",
    textAlign: "Right", 
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  inputAndroid: {
    flex: 2,
    fontSize: 16,
    color: "#000",
    textAlign: "right",
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
});

export default HorizontalInputs;
