import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StatusBar,StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import HorizontalLine from '../../components/HorizontalLine';
import RNPickerSelect from 'react-native-picker-select';
import { Link } from 'expo-router';

export default function BusinessInfo () {
  const [companyName, setCompanyName] = useState('');
  const [country, setCountry] = useState("India");
    const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [dateFormat, setDateFormat] = useState('DD/MM/YYYY');

  useEffect(() => {
    fetchCountries();
    fetchCurrencies();
  }, []);



  const fetchCountries = async () => {
    try {
      const response = await axios.get('https://restcountry.com/v3.1/all');
      const countryList = response.data.map((country) => ({
        name: country.name.common,
        code: country.cca2,
      }));
      setCountries(countryList);
    } catch (error) {
      console.error('Error fetching country:', error);
    }
  };

  const fetchStates = async (countryCode) => {
    try {
      const response = await axios.get(`https://api.example.com/states?country=${countryCode}`);
      setStates(response.data);
    } catch (error) {
      console.error('Error fetching states:', error);
    }
  };

  const fetchCities = async (state) => {
    try {
      const response = await axios.get(`https://api.example.com/cities?state=${state}`);
      setCities(response.data);
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };

  const fetchCurrencies = async () => {
    try {
      const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
      const currencyList = Object.keys(response.data.rates);
      setCurrencies(currencyList);
    } catch (error) {
      console.error('Error fetching currencies:', error);
    }
  };

  const handleNext = () => {
    console.log({
      companyName,
      selectedCountry,
      selectedState,
      selectedCity,
      dateFormat,
      selectedCurrency,
    });
  };

  return (
    <SafeAreaView className="bg-primary h-full">
          <ScrollView contentContainerStyle={{ height: "100%" }}>
    <View className="flex-1 pl-4 pt-4 mt-2 bg-white">
      <Text className="text-center text-3xl font-pbold mb-12">Business Info</Text>
      <View className="p-8">
      <Text className="text-xl font-medium mb-2">Company / Individual Name</Text>
      <TextInput
        className="border border-l-zinc-950 border-spacing-4 rounded-lg p-4 mb-4"
        placeholder="Tap to Enter"
        value={companyName}
        onChangeText={setCompanyName}
      />
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

 
        <HorizontalLine 
        containerStyles="-mr-8"/>
        <View className="">
      <Text className="text-xl font-medium  mt-2 mb-2">Country</Text>
      <Picker
        selectedValue={selectedCountry}
        onValueChange={(itemValue) => {
          setSelectedCountry(itemValue);
          fetchStates(itemValue);
        }}
        className="border border-gray-300 rounded-lg mb-4"
      >
        {/* {country.map((country) => (
          <Picker.Item key={country.code} label={country.name} value={country.code} />
        ))} */}
      </Picker>
      </View>

      <Text className="text-lg font-medium mb-2">State</Text>
      <View>
      <Picker
        selectedValue={selectedState}
        onValueChange={(itemValue) => {
          setSelectedState(itemValue);
          fetchCities(itemValue);
        }}
        className="border border-gray-300 rounded-lg mb-4"
      >
        {states.map((state) => (
          <Picker.Item key={state.id} label={state.name} value={state.name} />
        ))}
      </Picker>
      </View>

      <Text className="text-lg font-medium mb-2">City</Text>
      <Picker
        selectedValue={selectedCity}
        onValueChange={(itemValue) => setSelectedCity(itemValue)}
        className="border border-gray-300 rounded-lg mb-4"
      >
        {cities.map((city) => (
          <Picker.Item key={city.id} label={city.name} value={city.name} />
        ))}
      </Picker>

      <Text className="text-lg font-medium mb-2">Date Format</Text>
      <Picker
        selectedValue={dateFormat}
        onValueChange={(itemValue) => setDateFormat(itemValue)}
        className="border border-gray-300 rounded-lg mb-4"
      >
        <Picker.Item label="DD/MM/YYYY" value="DD/MM/YYYY" />
        <Picker.Item label="MM/DD/YYYY" value="MM/DD/YYYY" />
        <Picker.Item label="YYYY/MM/DD" value="YYYY/MM/DD" />
      </Picker>

      <Text className="text-lg font-medium mb-2">Select Currency</Text>
      <Picker
        selectedValue={selectedCurrency}
        onValueChange={(itemValue) => setSelectedCurrency(itemValue)}
        className="border border-gray-300 rounded-lg mb-4"
      >
        {currencies.map((currency) => (
          <Picker.Item key={currency} label={currency} value={currency} />
        ))}
      </Picker>

      <TouchableOpacity className="bg-blue-500 p-4 rounded-lg items-center" onPress={handleNext}>
        <Text className="text-white font-bold">Next</Text>
      </TouchableOpacity>
      </View>
    <Link href="./setupComplete.jsx">yes</Link>
    </View>
         </ScrollView>
          <StatusBar backgroundColor="#ccc" style="white" />
    </SafeAreaView>
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


