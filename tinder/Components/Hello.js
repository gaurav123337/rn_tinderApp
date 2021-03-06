import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import { useTailwind } from 'tailwind-rn';

const Hello = () => {
  const tailwind = useTailwind();

  return (
    <SafeAreaView style={tailwind('h-full')}>
      <View style={tailwind('pt-12 items-center')}>
        <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
          <Text style={tailwind('text-blue-800 font-semibold')}>
            Hello Tailwind123
          </Text>
          <Button title='click Me' />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Hello;
