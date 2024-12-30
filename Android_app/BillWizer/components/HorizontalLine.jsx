import React from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';

const HorizontalLineExample = ({containerStyles}) => {
  return (
    <View className={`flex-1 items-center justify-center bg-gray-100 ${containerStyles}`} >
      <View className={`w-full h-[1px] bg-gray-400  `} />
    </View>
  );
};

export default HorizontalLineExample;
