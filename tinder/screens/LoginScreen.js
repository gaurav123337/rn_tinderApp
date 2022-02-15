import React, { useLayoutEffect } from 'react';
import {
  View,
  Text,
  Button,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTailwind } from 'tailwind-rn';

export default function LoginScreen() {
  const tw = useTailwind();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={tw('flex-1')}>
      <ImageBackground
        resizeMode='cover'
        style={tw('flex-1')}
        source={{ uri: 'https://tinder.com/static/tinder.png' }}
      >
        <TouchableOpacity
          style={[
            tw('absolute bottom-10 w-52 bg-white p-4 rounded-2xl'),
            { marginHorizontal: '40%' },
          ]}
        >
          <Text style={tw('font-semibold text-center')}>Get swiping</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
