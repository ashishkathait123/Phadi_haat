import { View, Text, TextInput } from 'react-native';
import React from 'react';

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
  return (
    <View style={{ marginBottom: 16, ...otherStyles }}>
      <Text style={{ fontSize: 16, color: '#6b7280', fontWeight: '500' }}>{title}</Text>
      <View
        style={{
          marginTop:12,
          borderWidth: 1,
          borderColor: '#A0A0A0',
          borderRadius: 12,
          backgroundColor: '#f9fafb',
          height: 56,
          paddingHorizontal: 10,
          justifyContent: 'center',
        }}
      >
        <TextInput
          style={{
            fontSize: 16,
            color: '#000',
            fontWeight: '200',
            flex: 1,
            width: '100%',
          }}
          value={value || ''}
          onChangeText={handleChangeText}
          placeholder={placeholder || 'Email'}
          placeholderTextColor="#A0A0A0"
          {...props}
        />
      </View>
    </View>
  );
};

export default FormField;
